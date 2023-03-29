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

function InputNumber({ styles }) {
  const [state, setState] = useState();
  const [touched, setTouched] = useState();
  const [isValidPhone, setIsValidPhone] = useState();
  useEffect(() => {
    if (state && touched) {
      if (touched && (state.length < 11 || !state)) {
        setIsValidPhone(false);
      } else setIsValidPhone(true);
    }
  }, [state, touched]);

  return (
    <div>
      <PhoneInput
        inputClass={`${style.input} ${styles} ${
          !touched
            ? style.input
            : isValidPhone
            ? style.input_valid
            : style.input_invalid
        } `}
        buttonClass={`${style.button} ${styles}`}
        dropdownClass={`${style.dropdown} ${styles}`}
        country={"cy"}
        value={state}
        onChange={(value) => setState(value)}
        onBlur={() => setTouched(true)}
        isValid={(value) => {
          if (!value) {
            return false;
          }
          return true;
        }}
      />
      {(touched && !state && (
        <p className={style.invalid_number_message}>Введите номер телефона</p>
      )) ||
        (state && state.length < 11 && (
          <p className={style.invalid_number_message}>Номер введен неверно</p>
        ))}
    </div>
  );
}

export default InputNumber;
