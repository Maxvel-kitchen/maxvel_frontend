/* eslint-disable react/self-closing-comp */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import style from "./card.module.css";
import Counter from "../counter/counter";
import { increment } from "../../services/actions/counter-actions";
import { getCartTotal } from "../../services/reducers/cart-slice";

function Card({ id, title, price, newer, amount }) {
  const [button, setButton] = useState();

  const counter = useSelector((state = 1) => state.counter);
  useEffect(() => {
    if (counter < 1) {
      setButton(true);
    }
    if (counter > 0) {
      setButton(false);
    }
  }, [counter, setButton]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, []);
  return (
    <li className={style.card}>
      {newer && <p className={style.tag}>New</p>}
      <div className={style.image}></div>
      <p className={style.title}>{title}</p>
      <div className={style.container}>
        <p className={style.price}>{`${price} €`}</p>
        {button ? (
          <button
            onClick={() => dispatch(increment())}
            className={style.button}
            type="button"
          >
            Добавить
          </button>
        ) : (
          <Counter counter={counter} />
        )}
      </div>
    </li>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  newer: PropTypes.bool.isRequired,
};
export default Card;
