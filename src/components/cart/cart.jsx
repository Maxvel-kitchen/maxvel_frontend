/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartForm from "../cart-form/cart-form";
import CartList from "../cart-list/cart-list";
import Title from "../title/title";
import Button from "../button/button";
import style from "./cart.module.css";
import { getCartTotal } from "../../services/redux/cart-slice";

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
          <div className={style.empty}>
            <Title title="Ваша корзина пока пуста" />
            <p className={style.text}>Перейдите в меню, чтобы выбрать блюдо</p>
            <Link to="/menu">
              <Button text="В меню" styles={style.button} />
            </Link>
          </div>
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
