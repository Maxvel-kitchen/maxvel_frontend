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
import style from "./starter.module.css";

function Starter() {
  return (
    <div className={style.container}>
      <div className={style.buttons}>
        {window.innerWidth < 768 ? <ScrollButtons /> : null}
      </div>
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
