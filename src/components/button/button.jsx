import PropTypes from "prop-types";
import style from "./button.module.css";

function Button({ text, styles, submit, disabled, onClick }) {
  return (
    <button
      className={`${style.button} ${submit ? style.submit : ""} ${styles}`}
      type={submit ? "submit" : "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  submit: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
