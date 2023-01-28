import OrderForm from "../order-form/order-form";
import style from "./cart.module.css";

function Cart() {
  return (
    <main className={style.cart}>
      <div className={style.container}>
        <OrderForm />
      </div>
    </main>
  );
}

export default Cart;
