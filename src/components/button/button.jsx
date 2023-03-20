/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types";
import style from "./button.module.css";

function Button({
  text,
  styles,
  transparent,
  submit,
  footer,
  disabled,
  onClick,
}) {
  return (
    <button
      className={`${style.button} ${transparent ? style.transparent : ""} ${
        submit && footer ? style.footer : submit ? style.submit : ""
      } ${styles}`}
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
  styles: PropTypes.string,
  transparent: PropTypes.bool,
  submit: PropTypes.bool,
  footer: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  styles: "",
  transparent: false,
  footer: false,
  submit: false,
  disabled: false,
};

export default Button;
