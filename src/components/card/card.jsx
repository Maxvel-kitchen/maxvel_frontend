import { useState } from "react";
import style from "./card.module.css";
import CardButton from "../card-button/card-button";

function Card() {
  // eslint-disable-next-line no-unused-vars
  const [tag, setTag] = useState(true);

  return (
    <li className={style.card}>
      {tag && <p className={style.tag}>New</p>}
      <div className={style.image}>Изображение</div>
      <p className={style.title}>Название блюда Lorem ipsum dolor sit</p>
      <div className={style.container}>
        <p className={style.price}>3500 ₽</p>
        <CardButton />
      </div>
    </li>
  );
}

export default Card;
