/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  increase,
  decrease,
  type,
  returnItem,
  removeItem,
} from "../../services/reducers/cart-slice";
import style from "./counter.module.css";

function Counter({ id, amount, styles, handleDelete }) {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className={`${style.container} ${styles}`}>
      <button
        onClick={() => {
          dispatch(decrease(id));
          if (amount === 1 && location.pathname === "/cart") {
            handleDelete();
          } else {
            dispatch(removeItem(id));
          }
        }}
        className={`${style.button} ${style.button_left}`}
        type="button"
      />
      <input
        className={style.input}
        type="number"
        value={amount}
        onChange={(e) => {
          if (e.target.value > 999) {
            e.target.value = 999;
          }
          dispatch(type([id, Number(e.target.value)]));
        }}
        onBlur={() => {
          if (amount === (null || "")) {
            dispatch(returnItem(id));
          }
        }}
      />
      <button
        onClick={() => {
          if (amount < 999) {
            dispatch(increase(id));
          }
        }}
        className={`${style.button} ${style.button_right}`}
        type="button"
      />
    </div>
  );
}
Counter.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Counter;
