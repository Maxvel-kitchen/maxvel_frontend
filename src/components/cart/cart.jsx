/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartForm from "../cart-form/cart-form";
import CartList from "../cart-list/cart-list";
import style from "./cart.module.css";
import { getCartTotal } from "../../services/reducers/cart-slice";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);
  return (
    <main className={style.cart}>
      <div className={style.container}>
        {items.length === 0 ? (
          <p className={style.empty}>Ваша корзина пуста</p>
        ) : (
          <>
            <CartList />
            <CartForm />
          </>
        )}
      </div>
    </main>
  );
}

export default Cart;
