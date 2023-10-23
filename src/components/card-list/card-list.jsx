/* eslint-disable react/prop-types */
import Card from "../card/card";
import style from "./card-list.module.css";

function CardList({ data }) {
  return (
    <ul className={style.cards}>
      {data?.map((item) => (
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
