/* eslint-disable react/prop-types */
import style from "./input.module.css";

function Input({ textarea, placeholder, type, minLength, onFocus, onBlur }) {
  return (
    <input
      className={textarea ? style.input__textarea : style.input}
      placeholder={placeholder}
      type={type}
      minLength={minLength}
      onFocus={onFocus}
      onBlur={onBlur}
      required
    />
  );
}

export default Input;
