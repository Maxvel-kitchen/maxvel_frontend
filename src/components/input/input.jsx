/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from "prop-types";
import cn from "classnames";
import style from "./input.module.css";

function Input({
  styles,
  theme,
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
          theme ? style.input_theme : "",
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
      className={cn(
        style.input,
        style.textarea,
        theme ? style.input_theme : "",
        styles
      )}
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
  styles: PropTypes.string,
  theme: PropTypes.string,
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
  styles: "",
  theme: "",
  textarea: false,
  validate: false,
  errors: "",
  emptyMessage: "",
  incorrectMessage: "",
};
export default Input;
