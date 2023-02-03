import Card from "../card/card";
import style from "./card-list.module.css";

const items = [
  { id: 876, title: "Макарун", price: 55, quantity: 0, newer: true },
  { id: 876, title: "Маун", price: 5, quantity: 0 },
  { id: 876, title: "Макар", price: 85, quantity: 0 },
  { id: 876, title: "Мкаун", price: 51, quantity: 0 },
];

function CardList() {
  return (
    <ul className={style.cards}>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          newer={item.newer}
        />
      ))}
    </ul>
  );
}

export default CardList;
