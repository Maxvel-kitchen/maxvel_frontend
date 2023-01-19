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
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
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

function Menu() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuList, setMenuList] = useState(true);

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
          <div className={style.sticky}>{menuList && <MenuList />}</div>
          <ScrollToTop
            height={location.pathname === "/" ? 0 : width < 768 ? 460 : 680}
          />
          <Routes>
            <Route exact path="/" element={<New />} />
            <Route
              exact
              path="/menu"
              element={<Navigate replace to="/menu/new" />}
            />
            <Route path="/menu/new" element={<New />} />
            <Route path="/menu/starter" element={<Starter />} />
            <Route path="/menu/salad" element={<Salad />} />
            <Route path="/menu/platter" element={<Platter />} />
            <Route path="/menu/main-dish" element={<MainDish />} />
            <Route path="/menu/sauce" element={<Sauce />} />
            <Route path="/menu/kids" element={<Kids />} />
            <Route path="/menu/dessert" element={<Dessert />} />
            <Route path="/menu/drink" element={<Drink />} />
            <Route path="/menu/station" element={<Station />} />
            <Route path="/menu/service" element={<Service />} />
          </Routes>
        </Element>
      </div>
    </main>
  );
}

export default Menu;
