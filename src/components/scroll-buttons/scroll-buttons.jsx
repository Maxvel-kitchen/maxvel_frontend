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
import style from "./scroll-buttons.module.css";

function ScrollButtons() {
  return (
    <div className={style.container}>
      <ul className={style.items}>
        <li className={style.item}>
          <Link
            className={style.link}
            activeClass={style.active}
            to="link1"
            spy
            smooth
            duration={700}
            offset={-190}
          >
            Мясо и птица
          </Link>
        </li>
        <li>
          <Link
            className={style.link}
            activeClass={style.active}
            to="link2"
            spy
            smooth
            duration={700}
            offset={-190}
          >
            Рыба
          </Link>
        </li>
        <li>
          <Link
            className={style.link}
            activeClass={style.active}
            to="link3"
            spy
            smooth
            duration={700}
            offset={-190}
          >
            Без мяса
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ScrollButtons;
