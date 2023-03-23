/* eslint-disable react/prop-types */
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
import PropTypes from "prop-types";
import style from "./scroll-buttons.module.css";

function ScrollButtons({ subCategories }) {
  return (
    <div className={style.container}>
      <ul className={style.items}>
        {subCategories?.map((subCategory) => (
          <li className={style.item} key={subCategory.id}>
            <Link
              className={style.link}
              activeClass={style.active}
              to="link1"
              spy
              smooth
              duration={700}
              offset={-100}
            >
              {subCategory.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ScrollButtons.propTypes = {
//   subCategories: PropTypes.arrayOf.isRequired,
// };

export default ScrollButtons;
