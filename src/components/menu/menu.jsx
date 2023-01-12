import CardList from "../card-list/card-list";
import MenuList from "../menu-list/menu-list";
import style from "./menu.module.css";

function Menu() {
  return (
    <main className={style.menu}>
      <div className={style.container}>
        <MenuList />
        <CardList />
      </div>
    </main>
  );
}

export default Menu;
