/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import PhoneInput from "react-phone-input-2";
import { useState, useEffect } from "react";
import style from "./input-number.module.css";

function InputNumber() {
  const [state, setState] = useState();
  const [isValidPhone, setIsValidPhone] = useState(false);
  useEffect(() => {
    if (state) {
      if (state.length < 11) {
        setIsValidPhone(false);
      } else setIsValidPhone(true);
    } else setIsValidPhone(false);
    console.log(isValidPhone);
  }, [state]);

  return (
    <div>
      <PhoneInput
        inputClass={style.input}
        buttonClass={style.button}
        dropdownClass={style.dropdown}
        country={"cy"}
        value={state}
        onChange={(value) => setState(value)}
        isValid={(value) => {
          if (!value) {
            return false;
          }
          return true;
        }}
      />
      {(!state && (
        <p className={style.invalid_number_message}>Введите номер телефона</p>
      )) ||
        (state && state.length < 11 && (
          <p className={style.invalid_number_message}>Номер введен невнрно</p>
        ))}
    </div>
  );
}

export default InputNumber;
