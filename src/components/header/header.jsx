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

import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./header.module.css";
import logo from "../../images/logo.svg";

function Header({ isOpen, count }) {
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
          <Element className={style.menu__box} name="/">
            <NavLink
              className={style.navigation__link}
              to="/menu/new"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              <img
                className={style.logo__image}
                alt="Логотип Максвел"
                src={logo}
              />
            </NavLink>
          </Element>
        </nav>
        <nav className={style.navigation__links}>
          <NavLink
            className={cn(style.navigation__link, style.menu__link)}
            to="/"
          >
            Меню
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
          <NavLink className={style.cart__link} to="/cart">
            {count === 0 ? "" : <div className={style.badge}>{count}</div>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
Header.propTypes = {
  isOpen: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
export default Header;
