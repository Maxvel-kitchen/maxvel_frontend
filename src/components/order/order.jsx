// import { useSelector } from "react-redux";
import style from "./order.module.css";
import Title from "../title/title";
// import CartItem from "../cart-item/cart-item";

function Order() {
  // const { items, totalCount } = useSelector((state) => state.order);

  return (
    <div className={style.content}>
      <div className={style.banner}>
        <Title title="Заказ оформлен успешно!" styles={style.title} />
        <p className={style.text}>
          Скоро вам позвонит менеджер для дальнейшего обсуждения
        </p>
      </div>
      {/* <p>Ваш заказ:</p>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          amount={item.amount}
        />
      ))}
      <p>Итого: {totalCount}</p> */}
    </div>
  );
}

export default Order;
