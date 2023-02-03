/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-irregular-whitespace */
import cn from "classnames";
import Counter from "../counter/counter";
import style from "./order-item.module.css";
import img from "../../images/demo6.png";

function OrderItem() {
  return (
    <li className={style.item}>
      <img src={img} alt="Название блюда" className={style.image} />
      <div className={style.container}>
        <p className={style.title}>
          Мини круассан с лососем, рукколой и цитрусовой филадельфией
        </p>
        <p className={cn(style.price, style.price_size_small)}>5 € / шт</p>
      </div>
      <Counter />
      <p className={cn(style.price, style.price_size_big)}>500 €</p>
      <button className={style.button} type="button"></button>
    </li>
  );
}

export default OrderItem;
