import OrderItem from "../order-item/order-item";
import style from "./order-list.module.css";

function OrderList() {
  return (
    <ul className={style.list}>
      <OrderItem />
    </ul>
  );
}

export default OrderList;
