/* eslint-disable react/prop-types */
import Card from "../card/card";
// import { data } from "../../utils/constants";
import style from "./card-list.module.css";

function CardList({ menu }) {
  //   console.log(menu);
  return (
    <ul className={style.cards}>
      {menu?.map((item) => (
        <Card
          item={item}
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          amount={item.amount}
          newer={item.newer}
        />
      ))}
    </ul>
  );
}

export default CardList;
