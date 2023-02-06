/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import OrderForm from "../order-form/order-form";
import OrderList from "../order-list/order-list";
import style from "./cart.module.css";

function Cart() {
  const { items } = useSelector((state) => state.cart);

  return (
    <main className={style.cart}>
      <div className={style.container}>
        {items === [] ? (
          ""
        ) : (
          <>
            <OrderList />
            <OrderForm />
          </>
        )}
      </div>
    </main>
  );
}

export default Cart;
