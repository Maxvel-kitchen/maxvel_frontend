/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./card.module.css";
import Counter from "../counter/counter";
import { addToCart, getCartTotal } from "../../services/reducers/cart-slice";

function Card({ item, id, title, price, newer, amount }) {
  const dispatch = useDispatch();

  return (
    <li className={style.card}>
      {newer && <p className={style.tag}>New</p>}
      <div className={style.image}></div>
      <p className={style.title}>{title}</p>
      <div className={style.container}>
        <p className={style.price}>{`${price} €`}</p>
        {amount === 0 ? (
          <button
            onClick={() => {
              dispatch(addToCart(item));
            }}
            className={style.button}
            type="button"
          >
            Добавить
          </button>
        ) : (
          <Counter amount={amount} id={id} />
        )}
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
