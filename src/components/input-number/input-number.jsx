/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import style from "./input-number.module.css";

function InputNumber() {
  const [state, setState] = useState();
  return (
    <div>
      <PhoneInput
        inputClass={style.input}
        buttonClass={style.button}
        dropdownClass={style.dropdown}
        country={"cy"}
        value={state}
        onChange={() => setState()}
      />
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
