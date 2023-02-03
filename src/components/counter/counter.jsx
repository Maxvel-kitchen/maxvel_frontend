/* eslint-disable import/order */

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  decrement,
  increment,
  set,
} from "../../services/actions/counter-actions";

import style from "./counter.module.css";

function Counter({ counter }) {
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <button
        onClick={() => dispatch(decrement())}
        className={style.button}
        type="button"
      >
        -
      </button>
      <input
        onChange={(e) => dispatch(set(e.target.value))}
        className={style.input}
        type="number"
        value={counter}
        max="999"
        min="0"
      />
      <button
        onClick={() => dispatch(increment())}
        className={style.button}
        type="button"
      >
        +
      </button>
    </div>
  );
}
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};
export default Counter;
