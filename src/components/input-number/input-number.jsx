/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import style from "./input.module.css";

function InputNumber() {
  const [state, setState] = useState();
  return (
    <div>
      <PhoneInput
        inputClass={style.input}
        buttonClass={style.button}
        dropdownClass={style.dropdown}
        country={"tr"}
        value={state}
        onChange={() => setState()}
      />

      {/* {(errors && errors.type === "required" && (
        <p className={style.error}>{emptyMessage}</p>
      )) ||
        (errors && (errors.type === "minLength" || "pattern") && (
          <p className={style.error}>{incorrectMessage}</p>
        ))} */}
    </div>
  );
}
// InputNumber.propTypes = {
//     dirtyFields: PropTypes.bool.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   register: PropTypes.func.isRequired,
//   errors: PropTypes.string.isRequired,
//   emptyMessage: PropTypes.string.isRequired,
//   incorrectMessage: PropTypes.string.isRequired,
// };
export default InputNumber;
