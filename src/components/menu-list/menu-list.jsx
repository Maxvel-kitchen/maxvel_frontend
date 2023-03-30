/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import style from "./menu-list.module.css";
import Title from "../title/title";
import ScrollButtons from "../scroll-buttons/scroll-buttons";

function MenuList({ categories }) {
  //   const location = useLocation({ onClose });
  return (
    <div className={style.container}>
      <Title title="Меню" styles={style.title} />
      <nav className={style.links}>
        <ul className={style.items}>
          {categories?.map((category) => (
            <li className={style.item} key={category.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.link_active : style.link
                }
                to={`/menu/${category.slug}`}
              >
                {category.name}
              </NavLink>
              {category.sub_categories !== [] && window.innerWidth > 768 ? (
                <ScrollButtons subCategories={category.sub_categories} />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
// MenuList.propTypes = {
//   //   onClose: PropTypes.func.isRequired,
//   categories: PropTypes.arrayOf.isRequired,
// };

export default MenuList;
