/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import style from "./checkbox.module.css";

function Checkbox({ register, styles, id }) {
  return (
    <label className={style.confirmation} htmlFor={id}>
      <div className={style.confirmation__box}>
        <input
          className={`${style.confirmation__checkbox} ${styles}`}
          type="checkbox"
          id={id}
          {...register}
          formNoValidate
        />
        <label htmlFor={id} />
      </div>
      <p className={`${style.confirmation__text} ${styles}`}>
        Нажимая на кнопку, вы соглашаетесь с{" "}
        <a
          className={`${style.confirmation__link} ${styles}`}
          href="/consent"
          target="_blank"
          rel="noopener noreferrer"
        >
          обработкой своих персональных данных
        </a>
      </p>
    </label>
  );
}

Checkbox.propTypes = {
  styles: PropTypes.string,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  styles: "",
};

export default Checkbox;
