import style from "./menu-list.module.css";
import Title from "../title/title";

function MenuList() {
  return (
    <div className={style.container}>
      <Title title="Меню" styles={style.title} />
      <ul className={style.items}>
        <li className={style.item}>Закуски</li>
        <li className={style.item}>Салаты</li>
        <li className={style.item}>Платтеры</li>
        <li className={style.item}>Горячее</li>
        <li className={style.item}>Соусы</li>
        <li className={style.item}>Детское</li>
        <li className={style.item}>Азия</li>
        <li className={style.item}>Десерты</li>
        <li className={style.item}>Напитки</li>
        <li className={style.item}>Станция</li>
        <li className={style.item}>Услуги</li>
        <li className={style.item}>Посуда</li>
      </ul>
    </div>
  );
}

export default MenuList;
