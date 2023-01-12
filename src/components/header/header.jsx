import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className={style.header}>      
      <button
        className={style.hamburger__menu}
        type="button"
        aria-label="Кнопка меню"
      />
      <NavLink className={style.navigation__link} to="/">
        <img className={style.logo__image} alt="Логотип Максвел" src={logo} />
      </NavLink>
      <nav className={style.navigation__links}>
        <NavLink className={style.menu__link} to="/">
          Меню
        </NavLink>
        <NavLink className={style.navigation__link}>Контакты</NavLink>
        <NavLink className={style.cart__link} to="/cart" />
      </nav>
    </header>
  );
}

export default Header;
