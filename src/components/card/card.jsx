/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import style from "./card.module.css";
import Counter from "../counter/counter";
import { getCartTotal } from "../../services/reducers/cart-slice";

function Card({ id, title, price, newer, amount }) {
  const { items, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);
  return (
    <li className={style.card}>
      {newer && <p className={style.tag}>New</p>}
      <div className={style.image}></div>
      <p className={style.title}>{title}</p>
      <div className={style.container}>
        <p className={style.price}>{`${price} €`}</p>
        <Counter amount={amount} id={id} />
      </div>
    </li>
  );
}
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  newer: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Card;
