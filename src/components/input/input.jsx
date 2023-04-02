/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
// import PropTypes from "prop-types";
import cn from "classnames";
import style from "./input.module.css";

function Input({ styles, placeholder, type, name, register }) {
  return (
    <input
      className={cn(style.input, styles)}
      placeholder={placeholder}
      type={type}
      name={name}
      {...register}
      formNoValidate
    />
  );
}
// Input.propTypes = {
//   styles: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   register: PropTypes.func.isRequired,
// };
export default Input;
