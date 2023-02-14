import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "../title/title";
import OrderItem from "../order-item/order-item";
import { getCartTotal } from "../../services/reducers/cart-slice";
import style from "./order-list.module.css";

function OrderList() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);
  return (
    <>
      <Title title="Заказ" styles={style.title} />
      <ul className={style.list}>
        {items.map((item) => (
          <OrderItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </ul>
      <Title title={`Итого: ${totalAmount} €`} styles={style.total} />
    </>
  );
}

export default OrderList;
