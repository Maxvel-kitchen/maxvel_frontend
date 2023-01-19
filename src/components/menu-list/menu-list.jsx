import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import style from "./menu-list.module.css";
import Title from "../title/title";
import ScrollButtons from "../scroll-buttons/scroll-buttons";

function MenuList() {
  const location = useLocation({ onClose });
  return (
    <div className={style.container}>
      <Title title="Меню" styles={style.title} />
      <nav>
        <ul className={style.items}>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/starter"
              onClick={onClose}
            >
              Закуски
            </NavLink>
            {location.pathname === "/starter" && window.innerWidth > 768 ? (
              <ScrollButtons />
            ) : null}
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/salad"
              onClick={onClose}
            >
              Салаты
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/platter"
              onClick={onClose}
            >
              Платтеры
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/main-dish"
              onClick={onClose}
            >
              Горячее
            </NavLink>
            {location.pathname === "/main-dish" && window.innerWidth > 768 ? (
              <ScrollButtons />
            ) : null}
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/sauce"
              onClick={onClose}
            >
              Соусы
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/kids"
              onClick={onClose}
            >
              Детское
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/dessert"
              onClick={onClose}
            >
              Десерты
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/drink"
              onClick={onClose}
            >
              Напитки
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/station"
              onClick={onClose}
            >
              Станция
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/service"
              onClick={onClose}
            >
              Услуги
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
MenuList.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default MenuList;
