/* eslint-disable prefer-const */
import { useState, useEffect, useCallback } from "react";
import CardList from "../card-list/card-list";
import MenuList from "../menu-list/menu-list";
import style from "./menu.module.css";

function Menu() {
  const [width, setWidth] = useState(undefined);
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
  }, [width])

  useEffect(() => window.addEventListener("resize", windowWidth), []);

  useEffect(() => checkWidth(), [checkWidth, width]);

  return (
    <main className={style.menu}>
      <div className={style.container}>
        {menuList && <MenuList />}
        <CardList />
      </div>
    </main>
  );
}

export default Menu;
