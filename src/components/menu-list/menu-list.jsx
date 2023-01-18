import { NavLink, useLocation } from "react-router-dom";
import style from "./menu-list.module.css";
import Title from "../title/title";
import ScrollButtons from "../scroll-buttons/scroll-buttons";

function MenuList() {
  const location = useLocation();
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
            >
              Услуги
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuList;
