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
import style from "./new.module.css";

function New() {
  return (
    <div className={style.container}>
      <Element name="link1" className={style.element}>
        <Title title="Новинки" styles={style.title} />
        <CardList />
      </Element>
    </div>
  );
}

export default New;
