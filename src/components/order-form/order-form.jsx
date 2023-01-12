/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-return-assign */
import style from "./order-form.module.css";
import Input from "../input/input";
import ButtonSubmit from "../button-submit/button-submit";
import orderFormInputs from "../../utils/constants";

function OrderForm() {
  return (
    <div className={style.content}>
      <h2 className={style.header}>Оформить заказ</h2>
      <form className={style.form}>
        {orderFormInputs.map((input) => (
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
        <ButtonSubmit type="submit" text="Отправить" />
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
