import PropTypes from "prop-types";
import style from "./input.module.css";

function Input({ textarea, placeholder, type, minLength, required }) {
  return (
    <input
      className={textarea ? style.input__textarea : style.input}
      placeholder={placeholder}
      type={type}
      minLength={minLength}
      required={required}
    />
  );
}
Input.propTypes = {
  // eslint-disable-next-line react/no-typos
  textarea: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  minLength: PropTypes.number.isRequired,
  required: PropTypes.bool.isRequired,
};
export default Input;
