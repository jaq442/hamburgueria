import styles from "./styles.module.scss";

export const ProductCard = ({ product, addCartProduct }) => {
  return (
    <li className={styles.productCard}>
      <img src={product.img} alt={product.name} />
      <div className={styles.productInfo}>
        <h3 className="title sm">{product.name}</h3>
        <span className="paragraph sm">{product.category}</span>

        <span className="paragraph bold">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <div className={styles.btnContainer}>
          <button className="btn" onClick={() => addCartProduct(product)}>Adicionar</button>
        </div>
      </div>
    </li>
  );
};
