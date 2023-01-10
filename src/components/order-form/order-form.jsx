/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-return-assign */
import style from "./order-form.module.css";
import Input from "../input/input";
import ButtonSubmit from "../button-submit/button-submit";

const inputs = [
  {
    id: "name",
    textarea: false,
    placeholder: "Ваше имя",
    type: "text",
    minLength: 3,
  },
  {
    id: "tel",
    textarea: false,
    placeholder: "Ваш номер телефона",
    type: "tel",
    minLength: 3,
  },
  {
    id: "email",
    textarea: false,
    placeholder: "Ваша почта",
    type: "email",
    minLength: 3,
  },
  {
    id: "date",
    textarea: false,
    placeholder: "Дата мероприятия",
    type: "date",
    minLength: 3,
  },
  {
    id: "adress",
    textarea: true,
    placeholder: "Адрес мероприятия",
    type: "text",
    minLength: 3,
  },
  {
    id: "comment",
    textarea: true,
    placeholder: "Комментарий",
    type: "text",
    minLength: 1,
  },
];

function OrderForm() {
  return (
    <div className={style.content}>
      <h2 className={style.header}>Оформить заказ</h2>
      <form className={style.form}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            id={input.id}
            textarea={input.textarea}
            placeholder={input.placeholder}
            type={input.type === "date" ? "text" : input.type}
            onFocus={(e) =>
              input.type === "date" ? (e.target.type = "date") : ""
            }
            onBlur={(e) =>
              input.type === "date" ? (e.target.type = "text") : ""
            }
            minLength={input.minLength}
          />
        ))}
        <ButtonSubmit />
        <div className={style.confirmation}>
          <div className={style.confirmation__box}>
            <input
              className={style.confirmation__checkbox}
              type="checkbox"
              id="check"
              required
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
