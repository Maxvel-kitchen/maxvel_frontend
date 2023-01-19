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
import { Route, Routes, Navigate } from "react-router-dom";
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

  return (
    <Element name="menu">
      <main className={style.menu}>
        <div className={style.container}>
          <div className={style.sticky}>{menuList && <MenuList />}</div>
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/starter" />}
            />
            <Route path="/starter" element={<Starter />} />
            <Route path="/salad" element={<Salad />} />
            <Route path="/platter" element={<Platter />} />
            <Route path="/main-dish" element={<MainDish />} />
            <Route path="/sauce" element={<Sauce />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/dessert" element={<Dessert />} />
            <Route path="/drink" element={<Drink />} />
            <Route path="/station" element={<Station />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </div>
      </main>
    </Element>
  );
}

export default Menu;
