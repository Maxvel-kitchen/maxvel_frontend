import OrderForm from "../order-form/order-form";
import OrderList from "../order-list/order-list";
import style from "./cart.module.css";

function Cart() {
  return (
    <main className={style.cart}>
      <div className={style.container}>
        <OrderList />
        <OrderForm />
      </div>
    </main>
  );
}

export default Cart;
