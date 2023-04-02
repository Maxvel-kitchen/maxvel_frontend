/* eslint-disable react/button-has-type */
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
import { useSelector, useDispatch } from "react-redux";
import Carousel from "../carousel/carousel";
import style from "./menu.module.css";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import getCategories from "../../services/api/categories";
import MenuItem from "./menu-item/menu-item";
import MenuList from "./menu-list/menu-list";
import Title from "../title/title";
import ScrollButtons from "../scroll-buttons/scroll-buttons";
import {
  getNewPositions,
  getPositions,
} from "../../services/api/position-list";
import { getMenu } from "../../services/redux/main-menu-reducer";

function Menu() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuList, setMenuList] = useState(true);
  const [categories, setCategories] = useState();
  const [positions, setPositions] = useState();
  const dispatch = useDispatch();

  function handleCategoryClick(category) {
    console.log("category: ", category);
    // console.log("menu: ", menu);
  }

  useEffect(() => {
    Promise.all([getCategories(), getNewPositions()])
      .then(([categoriesData, positionsData]) => {
        setCategories(categoriesData);
        setPositions(positionsData);
      })
      .then(() => {
        console.log(positions);
        dispatch(
          getMenu({
            payload: positions,
          })
        );
      })
      .catch((err) => console.log("error in PromiseAll: ", err));
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
            {menuList && <MenuList categories={categories} />}
          </div>
          <ScrollToTop
            height={location.pathname === "/" ? 0 : width < 768 ? 460 : 680}
          />
          <MenuItem title="Новинки" />
          {/* <Routes>
            <Route exact path="/" element={<MenuItem title="Новинки" />} />
            {categories && (
              <Route
                exact
                path="/menu"
                element={
                  <Navigate replace to={`/menu/${categories[0].slug}`} />
                }
              />
            )}
        </Routes> */}
        </Element>
      </div>
    </main>
  );
}

export default Menu;
