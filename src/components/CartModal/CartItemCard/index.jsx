import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss"

export const CartItemCard = ({ product, removeCartProduct }) => {
   return (
      <li className={styles.cartList}>
         <div className={styles.title}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => removeCartProduct(product.id) }>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
