import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setIsVisible, setSearch, cartList }) => {
  const [value, setValue] = useState("");

  const totalProducts = cartList.reduce((prevValue, product) => {
   return cartList.length;
}, 0);

  const submit = (event) => {
    event.preventDefault();
    setSearch(value);
    setValue("");
  };

  return (
    <header className={styles.logo}>
      <div className={`container ${styles.headerBox}`}>
        <div className={styles.cart}>
          <img src={Logo} alt="Logo Kenzie Burguer" />
     
          <button className="btnCart" onClick={() => setIsVisible(true)}>
            <MdShoppingCart size={21} />
            <span>{totalProducts}</span>
          </button>
        </div>

        <form onSubmit={submit} className="form">
          <input
            type="text"
            value={value}
            placeholder="Digitar pesquisa"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="btn search"
            type="submit"
          >
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};
