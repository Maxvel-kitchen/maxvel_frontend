import style from "./menu-list.module.css";

function MenuList() {
  return (
    <div className={style.container}>
      <p className={style.title}>Меню</p>
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
        <li className={style.item}>Доп. услуги</li>
        <li className={style.item}>Посуда</li>
      </ul>
    </div>
  );
}

export default MenuList;