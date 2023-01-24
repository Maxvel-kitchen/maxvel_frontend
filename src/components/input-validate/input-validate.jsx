/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import Input from "../input/input";

import style from "./input-validate.module.css";

function InputValidate({
  dirtyFields,
  placeholder,
  type,
  name,
  register,
  errors,
  emptyMessage,
  incorrectMessage,
}) {
  return (
    <div>
      <Input
        styles={
          !dirtyFields
            ? style.input
            : errors
            ? style.input_error
            : style.input_ok
        }
        placeholder={placeholder}
        type={type}
        name={name}
        register={register}
      />
      {(errors && errors.type === "required" && (
        <p className={style.error}>{emptyMessage}</p>
      )) ||
        (errors && (errors.type === "minLength" || "pattern") && (
          <p className={style.error}>{incorrectMessage}</p>
        ))}
    </div>
  );
}
InputValidate.propTypes = {
  dirtyFields: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  emptyMessage: PropTypes.string.isRequired,
  incorrectMessage: PropTypes.string.isRequired,
};
export default InputValidate;
