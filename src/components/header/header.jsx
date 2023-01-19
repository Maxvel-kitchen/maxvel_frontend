/* eslint-disable no-unused-vars */
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./header.module.css";
import logo from "../../images/logo.svg";

function Header({ isOpen }) {
  const location = useLocation();

  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.navigation__links}>
          <button
            onClick={isOpen}
            className={style.hamburger__menu}
            type="button"
            aria-label="Кнопка меню"
          />
          <NavLink className={style.navigation__link} to="/">
            <img
              className={style.logo__image}
              alt="Логотип Максвел"
              src={logo}
            />
          </NavLink>
        </nav>
        <nav className={style.navigation__links}>
          <NavLink
            className={cn(style.navigation__link, style.menu__link)}
            to="/menu"
          >
            {location.pathname === ("/cart" || "/order") ? "Меню" : ""}
          </NavLink>
          <Link
            className={style.navigation__link}
            activeClass={style.active}
            to="contacts"
            spy
            smooth
            duration={800}
          >
            Контакты
          </Link>
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
