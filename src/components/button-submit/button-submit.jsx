import PropTypes from "prop-types";
import style from "./button-submit.module.css";

function ButtonSubmit({ text }) {
  return (
    <button className={style.button} type="submit">
      {text}
    </button>
  );
}
ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonSubmit;
