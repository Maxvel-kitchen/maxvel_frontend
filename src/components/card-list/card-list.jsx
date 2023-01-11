import Card from "../card/card";
import style from "./card-list.module.css";

function CardList() {
  return (
    <ul className={style.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
}

export default CardList;
