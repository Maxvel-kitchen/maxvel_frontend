import PropTypes from "prop-types";
import style from "./button.module.css";

function Button({
  text,
  styles,
  transparent,
  submit,
  small,
  footer,
  disabled,
  onClick,
}) {
  return (
    <button
      className={`${style.button} ${transparent ? style.transparent : ""} ${
        submit ? style.submit : ""
      } ${small ? style.small : ""} ${footer ? style.footer : ""} ${styles}`}
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
  small: PropTypes.bool,
  footer: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  styles: "",
  transparent: false,
  footer: false,
  small: false,
  submit: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
