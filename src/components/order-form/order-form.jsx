/* eslint-disable import/no-unresolved */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

// import "react-phone-input-2/lib/style.css";
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "./date-picker.css";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import style from "./order-form.module.css";
import phoneStyle from "./input-phone.module.css";
import Input from "../input/input";
import InputValidate from "../input-validate/input-validate";
import Title from "../title/title";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";

function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    clearErrors,
  } = useForm({ mode: "onChange" });
  const onSubmit = () => {
    clearErrors(["tel", "email"]);
  };
  const [startDate, setStartDate] = React.useState(null);
  registerLocale("ru", ru);
  const [state, setState] = useState();

  return (
    <div className={style.content}>
      <Title title="Оформить заказ" styles={style.title} />
      <form
        className={style.form}
        onSubmit={handleSubmit(onSubmit)}
        formNoValidate
      >
        <Input
          styles={style.input}
          placeholder="Ваше имя"
          type="text"
          name="name"
          register={register("name")}
        />

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeCaption="время"
          withPortal
          timeFormat="HH:mm"
          dateFormat="d MMMM yyyy HH:mm"
          minDate={new Date()}
          placeholderText="Дата мероприятия"
          className={style.date}
          locale="ru"
        />

        <PhoneInput
          inputClass={phoneStyle.phone_input}
          buttonClass={phoneStyle.phone_button}
          dropdownClass={phoneStyle.phone_dropdown}
          country="cy"
          value={state}
          onChange={() => setState()}
        />
        <InputValidate
          dirtyFields={dirtyFields.email}
          placeholder="Ваша почта"
          type="email"
          name="email"
          register={register("email", {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            minLength: 8,
          })}
          errors={errors.email}
          emptyMessage="Введите почту"
          incorrectMessage="Почта введена неверно"
        />

        <div className={style.textarea}>
          <Input
            styles={style.input}
            placeholder="Адрес мероприятия"
            type="text"
            name="adress"
            register={register("adress")}
          />
        </div>

        <div className={style.textarea}>
          <Input
            styles={style.input}
            placeholder="Комментарий"
            type="text"
            name="comment"
            register={register("comment")}
          />
        </div>
        <Checkbox
          register={register("checkbox", {
            required: true,
          })}
          id="cart-check"
        />
        <Button text="Отправить" submit disabled={!isValid} />
      </form>
    </div>
  );
}

export default OrderForm;
