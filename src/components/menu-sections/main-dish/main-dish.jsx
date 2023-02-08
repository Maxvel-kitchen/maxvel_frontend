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
import ScrollButtons from "../../scroll-buttons/scroll-buttons";
import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./main-dish.module.css";

function MainDish() {
  return (
    <div className={style.container}>
      <div className={style.buttons}>
        {window.innerWidth < 768 ? <ScrollButtons /> : null}
      </div>
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
