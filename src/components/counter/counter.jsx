/* eslint-disable react/require-default-props */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./counter.module.css";

function Counter({ showItem }) {
  const [counter, setCounter] = useState(1);

  function increaseCounter() {
    setCounter((prevValue) => prevValue + 1);
  }

  function decreaseCounter() {
    setCounter((prevValue) => prevValue - 1);
  }

  useEffect(() => {
    if (counter === 0) {
      showItem();
    }
  }, [counter, showItem]);

  return (
    <div className={style.container}>
      <button onClick={decreaseCounter} className={style.button} type="button">
        -
      </button>
      <input
        onChange={(e) => setCounter(Number(e.target.value))}
        className={style.input}
        type="text"
        value={counter}
      />
      <button onClick={increaseCounter} className={style.button} type="button">
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  showItem: PropTypes.func,
};

export default Counter;
