/* eslint-disable import/no-relative-packages */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import PhoneInput from "react-phone-input-2";
import "../../../node_modules/react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";
import style from "./input-number.module.css";

function InputNumber({ styles, theme }) {
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
        inputClass={`${theme ? style.input_theme : ""} ${style.input}`}
        containerClass={`${
          theme ? style.container_theme : style.container
        }  ${styles} ${
          !touched && !theme
            ? style.container
            : !touched && theme
            ? style.container_theme
            : isValidPhone
            ? style.container_valid
            : style.container_invalid
        } `}
        buttonClass={`${style.button} ${theme ? style.button_theme : ""}`}
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
        <p
          className={`${style.invalid_number_message} ${
            theme ? style.theme_message : ""
          }`}
        >
          Введите номер телефона
        </p>
      )) ||
        (state && state.length < 11 && (
          <p
            className={`${style.invalid_number_message} ${
              theme ? style.theme_message : ""
            }`}
          >
            Номер введен неверно
          </p>
        ))}
    </div>
  );
}

export default InputNumber;
