import { useSelector } from "react-redux";
import Card from "../card/card";
import style from "./card-list.module.css";

function CardList() {
  const { mainMenuList } = useSelector((state) => state.menu);
  return (
    <ul className={style.cards}>
      {mainMenuList.payload?.map((item) => (
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
