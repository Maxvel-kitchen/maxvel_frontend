/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import style from "./card.module.css";
import Counter from "../counter/counter";

function Card() {  
  const [button, setButton] = useState(true);

  function hideItem() {
    setButton(false);
  }

  function showItem() {
    setButton(true);
  }

  return (
    <li className={style.card}>
      {false && <p className={style.tag}>New</p>}
      <div className={style.image}></div>
      <p className={style.title}>Длинное название блюда 5</p>
      <div className={style.container}>
        <p className={style.price}>3500 €</p>
        {button ? (
          <button onClick={hideItem} className={style.button} type="button">
            Добавить
          </button>
        ) : (
          <Counter showItem={() => showItem()} />
        )}
      </div>
    </li>
  );
}

export default Card;
