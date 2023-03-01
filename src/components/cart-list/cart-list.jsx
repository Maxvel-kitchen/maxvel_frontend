import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "../title/title";
import CartItem from "../cart-item/cart-item";
import { getCartTotal } from "../../services/redux/cart-slice";
import style from "./cart-list.module.css";

function CartList() {
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
          <CartItem
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

export default CartList;
