/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
import style from "./menu-list.module.css";
import Title from "../../title/title";
import CategoryButton from "../category-button/category-button";

function MenuList({ categories }) {
  //   const location = useLocation({ onClose });
  return (
    <div className={style.container}>
      <Title title="Меню" styles={style.title} />
      <nav className={style.links}>
        <ul className={style.items}>
          {categories?.map((category) => (
            <li className={style.item} key={category.id}>
              <CategoryButton category={category} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
MenuList.propTypes = {
  //   onClose: PropTypes.func.isRequired,
  categories: PropTypes.instanceOf(Object).isRequired,
};

export default MenuList;
