import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss"

export const CartModal = ({ setIsVisible, cartList, removeCartProduct, removeAll }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={styles.dialog}>
         <div className={styles.modalBox}>
         <div className={styles.headerModal}>
            <h2 className="title sm">Carrinho de compras</h2>
            <button aria-label="close" title="Fechar" onClick={() => setIsVisible(false)}>
               <MdClose size={21} />
            </button>
         </div>
         <div className={styles.cartList}>
            {cartList == 0 ? <p className={styles.noItem}>Nenhum item no carrinho</p>: (<ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} removeCartProduct={removeCartProduct} />
               ))}
            </ul>)}
            
         </div>
         <div className={styles.totalBox}>
            <div className={styles.totalTitle}>
               <span className="paragraph">Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button className="btn remove" onClick={removeAll}>Remover todos</button>
         </div>
         </div>
      </div>
   );
};
