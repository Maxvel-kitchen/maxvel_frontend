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
import style from "./starter.module.css";

function Starter() {
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
            Мясные
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
            Рыбные
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
        <Title title="Закуски мясные" styles={style.title} />
        <CardList />
      </Element>
      <Element name="link2" className={style.element}>
        <Title title="Закуски рыбные" styles={style.title} />
        <CardList />
      </Element>
      <Element name="link3" className={style.element}>
        <Title title="Закуски без мяса" styles={style.title} />
        <CardList />
      </Element>
    </div>
  );
}

export default Starter;
