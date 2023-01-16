import PropTypes from "prop-types";
import style from "./button.module.css";

function Button({ text, styles, submit }) {
  return (
    <button
      className={`${style.button} ${styles}`}
      type={submit ? "submit" : "button"}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  submit: PropTypes.bool.isRequired,
};

export default Button;
