/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import style from "./order-form.module.css";
import Input from "../input/input";
import InputValidate from "../input-validate/input-validate";
import Title from "../title/title";
import Button from "../button/button";

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
          withPortal
          timeFormat="HH:mm"
          dateFormat="d MMMM yyyy HH:mm"
          minDate={new Date()}
          placeholderText="Дата мероприятия"
          className={style.date}
          calendarClassName={style.calendar}
          locale="ru"
        />
        <InputValidate
          dirtyFields={dirtyFields.tel}
          placeholder="Ваш номер телефона"
          type="tel"
          name="tel"
          register={register("tel", {
            required: true,
            minLength: 10,
          })}
          errors={errors.tel}
          emptyMessage="Введите номер телефона"
          incorrectMessage="Номер введён неверно"
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
        <Button text="Отправить" submit disabled={!isValid} />
        <div className={style.confirmation}>
          <div className={style.confirmation__box}>
            <input
              className={style.confirmation__checkbox}
              type="checkbox"
              id="check"
              {...register("checkbox", {
                required: true,
              })}
              formNoValidate
            />
            <label htmlFor="check" />
          </div>
          <p className={style.confirmation__text}>
            Нажимая на кнопку, вы соглашаетесь с обработкой своих персональных
            данных
          </p>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
