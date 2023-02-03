/* eslint-disable import/order */

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { set } from "../../services/actions/counter-actions";
import { increase, decrease } from "../../services/reducers/cart-slice";
import style from "./counter.module.css";

function Counter({ id, amount }) {
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <button
        onClick={() => dispatch(decrease(id))}
        className={style.button}
        type="button"
      >
        -
      </button>
      <input
        onChange={(e) => dispatch(set(e.target.value))}
        className={style.input}
        type="number"
        value={amount}
        max="999"
        min="0"
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
