/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-const */
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
import { useState, useEffect, useCallback } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  NavLink,
} from "react-router-dom";
import New from "../menu-sections/new/new";
import Carousel from "../carousel/carousel";
import Starter from "../menu-sections/starter/starter";
import Salad from "../menu-sections/salad/salad";
import Platter from "../menu-sections/platter/platter";
import MainDish from "../menu-sections/main-dish/main-dish";
import Sauce from "../menu-sections/sauce/sauce";
import Kids from "../menu-sections/kids/kids";
import Dessert from "../menu-sections/dessert/dessert";
import Drink from "../menu-sections/drink/drink";
import Station from "../menu-sections/station/station";
import Service from "../menu-sections/service/service";
import MenuList from "../menu-list/menu-list";
import style from "./menu.module.css";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import { getCategories } from "../../services/api/categories";
import MenuItem from "../menu-sections/menu-item";

function Menu() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuList, setMenuList] = useState(true);
  const [categories, setCategories] = useState();
  useEffect(() => {
    getCategories(setCategories);
    console.log(categories);
  }, []);

  function windowWidth() {
    setWidth(() => window.innerWidth);
  }

  const checkWidth = useCallback(() => {
    if (width < 768) {
      setMenuList(false);
    } else {
      setMenuList(true);
    }
  }, [width]);

  useEffect(() => window.addEventListener("resize", windowWidth), []);

  useEffect(() => checkWidth(), [checkWidth, width]);

  const location = useLocation();
  return (
    <main className={style.menu}>
      <div className={style.container}>
        <Carousel />

        <Element className={style.menu__box} name="menu">
          <div className={style.sticky}>
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
          </div>
          <ScrollToTop
            height={location.pathname === "/" ? 0 : width < 768 ? 460 : 680}
          />
          <Routes>
            <Route exact path="/" element={<New />} />
            <Route
              exact
              path="/menu"
              element={<Navigate replace to="/menu/1" />}
            />
            {categories?.map((category) => (
              <Route
                path={`/menu/${category.id}`}
                element={<MenuItem title={category.name} key={category.id} />}
              />
            ))}
            {/* <Route path="/menu/new" element={<New />} />
            <Route path="/menu/starter" element={<Starter />} />
            <Route path="/menu/salad" element={<Salad />} />
            <Route path="/menu/platter" element={<Platter />} />
            <Route path="/menu/main-dish" element={<MainDish />} />
            <Route path="/menu/sauce" element={<Sauce />} />
            <Route path="/menu/kids" element={<Kids />} />
            <Route path="/menu/dessert" element={<Dessert />} />
            <Route path="/menu/drink" element={<Drink />} />
            <Route path="/menu/station" element={<Station />} />
            <Route path="/menu/service" element={<Service />} /> */}
          </Routes>
        </Element>
      </div>
    </main>
  );
}

export default Menu;
