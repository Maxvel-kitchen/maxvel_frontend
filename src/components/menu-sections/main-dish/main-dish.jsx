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
import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./main-dish.module.css";

function MainDish() {
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
      <Element name="link1" className={style.element}>
        <Title title="Мясо и птица" styles={style.title} />
        <CardList />
      </Element>
      <Element name="link2" className={style.element}>
        <Title title="Рыба" styles={style.title} />
        <CardList />
      </Element>
      <Element name="link3" className={style.element}>
        <Title title="Без мяса" styles={style.title} />
        <CardList />
      </Element>
    </div>
  );
}

export default MainDish;
