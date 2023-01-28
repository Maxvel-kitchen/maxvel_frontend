import PropTypes from "prop-types";
import style from "./button.module.css";

function Button({ text, submit, disabled }) {
  return (
    <button
      className={`${style.button} ${submit ? style.submit : ""}`}
      type={submit ? "submit" : "button"}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  submit: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
