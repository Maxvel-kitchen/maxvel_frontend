/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from "prop-types";
import cn from "classnames";
import style from "./input.module.css";

function Input({
  styles,
  placeholder,
  type,
  name,
  errors,
  emptyMessage,
  incorrectMessage,
  register,
  textarea,
  validate,
}) {
  return !textarea ? (
    <div>
      <input
        className={cn(
          style.input,
          styles,
          // eslint-disable-next-line no-nested-ternary
          validate && errors
            ? style.input_error
            : validate && !errors
            ? style.input_ok
            : ""
        )}
        placeholder={placeholder}
        type={type}
        name={name}
        {...register}
        formNoValidate
      />
      {(errors && errors.type === "required" && (
        <p className={style.error}>{emptyMessage}</p>
      )) ||
        (errors && (errors.type === "minLength" || "pattern") && (
          <p className={style.error}>{incorrectMessage}</p>
        ))}
    </div>
  ) : (
    <textarea
      className={cn(style.input, styles)}
      placeholder={placeholder}
      type={type}
      name={name}
      maxLength="150"
      {...register}
      formNoValidate
    />
  );
}
Input.propTypes = {
  styles: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string,
  emptyMessage: PropTypes.string,
  incorrectMessage: PropTypes.string,
  register: PropTypes.func.isRequired,
  textarea: PropTypes.bool,
  validate: PropTypes.bool,
};

Input.defaultProps = {
  textarea: false,
  validate: false,
  errors: "",
  emptyMessage: "",
  incorrectMessage: "",
};
export default Input;
