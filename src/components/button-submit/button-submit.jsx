/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import style from "./button-submit.module.css";

function ButtonSubmit({ type, text }) {
  return (
    <button className={style.button} type={type}>
      {text}
    </button>
  );
}

export default ButtonSubmit;
