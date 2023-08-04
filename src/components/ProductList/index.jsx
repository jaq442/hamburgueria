import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss";

export const ProductList = ({ addCartProduct, foodList }) => {
  return (
    <>
      {foodList.length > 0 ? (
        <ul className={`${styles.list} container`}>

       

            {foodList.map((product) => (
               <ProductCard key={product.id} product={product} addCartProduct={addCartProduct} />
               ))}
           
   
        </ul>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </>
  );
};
