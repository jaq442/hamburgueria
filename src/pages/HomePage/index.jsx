import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productApi } from "../../services/api";
import { toast } from "react-toastify";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const localCartList = localStorage.getItem("@cartListItems");
  const [cartList, setCartList] = useState(
    localCartList ? JSON.parse(localCartList) : []
  );
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const { data } = await productApi.get("/products");
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductList();
  }, []);

  const filteredProductList = productList.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  const foodList = search ? filteredProductList : productList;

  const addCartProduct = (newCartProduct) => {
    if (!cartList.some((cartItem) => cartItem.id == newCartProduct.id)) {
      setCartList([...cartList, newCartProduct]);
      toast.success("Item adicionado ao carrinho com sucesso");
    } else {
      toast.error("Item já adicionado ao carrinho");
    }
  };

  const removeAll = () => {
    cartList.splice(0, cartList.length);
    setCartList([...cartList]);
  };

  const removeCartProduct = (removeId) => {
    const newProductList = cartList.filter(
      (product) => product.id !== removeId
    );
    setCartList(newProductList);
  };

  useEffect(() => {
    localStorage.setItem("@cartListItems", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <>
      <Header
        setIsVisible={setIsVisible}
        setSearch={setSearch}
        cartList={cartList}
      />
      <main>
        <ProductList addCartProduct={addCartProduct} foodList={foodList} />
        {isVisible ? (
          <CartModal
            setIsVisible={setIsVisible}
            cartList={cartList}
            removeCartProduct={removeCartProduct}
            removeAll={removeAll}
          />
        ) : null}
      </main>
    </>
  );
};

// useEffect montagem - carrega os produtos da API e joga em productList
// useEffect atualização - salva os produtos no localStorage (carregar no estado)
// adição, exclusão, e exclusão geral do carrinho
// renderizações condições e o estado para exibir ou não o carrinho
// filtro de busca
// estilizar tudo com sass de forma responsiva
