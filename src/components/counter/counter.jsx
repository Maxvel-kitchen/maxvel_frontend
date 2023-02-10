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
        className={style.button}
        type="button"
      >
        -
      </button>
      <input
        className={style.input}
        type="number"
        value={amount}
        onChange={(e) => {
          dispatch(type([id, Number(e.target.value)]));
        }}
        onBlur={() => {
          if (amount === (null || "")) {
            dispatch(returnItem(id));
          }
        }}
      />
      <button
        onClick={() => dispatch(increase(id))}
        className={style.button}
        type="button"
      >
        +
      </button>
    </div>
  );
}
Counter.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Counter;
