import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./header.module.css";
import logo from "../../images/logo.svg";

function Header({ isOpen }) {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <button
          onClick={isOpen}
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
      </div>
    </header>
  );
}
Header.propTypes = {
  isOpen: PropTypes.func.isRequired,
};
export default Header;
