import Order from "../order/order";
import OrderForm from "../order-form/order-form";
import style from "./cart.module.css";

function Cart() {
  return (
    <main className={style.content}>
      <Order />
      <OrderForm />
    </main>
  );
}

export default Cart;
