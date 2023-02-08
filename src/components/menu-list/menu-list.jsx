import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import style from "./menu-list.module.css";
import Title from "../title/title";
import ScrollButtons from "../scroll-buttons/scroll-buttons";

function MenuList({ onClose }) {
  const location = useLocation({ onClose });
  return (
    <div className={style.container}>
      <Title title="Меню" styles={style.title} />
      <nav className={style.links}>
        <ul className={style.items}>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/menu/new"
              onClick={onClose}
            >
              Новинки
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/menu/starter"
              onClick={onClose}
            >
              Закуски
            </NavLink>
            {location.pathname === "/menu/starter" &&
            window.innerWidth > 768 ? (
              <ScrollButtons />
            ) : null}
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/menu/salad"
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
              to="/menu/platter"
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
              to="/menu/main-dish"
              onClick={onClose}
            >
              Горячее
            </NavLink>
            {location.pathname === "/menu/main-dish" &&
            window.innerWidth > 768 ? (
              <ScrollButtons />
            ) : null}
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.link_active : style.link
              }
              to="/menu/sauce"
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
              to="/menu/kids"
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
              to="/menu/dessert"
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
              to="/menu/drink"
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
              to="/menu/station"
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
              to="/menu/service"
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
