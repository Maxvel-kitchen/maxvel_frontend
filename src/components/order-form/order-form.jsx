/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-return-assign */
import style from "./order-form.module.css";
import Input from "../input/input";
import Title from "../title/title";
import Button from "../button/button";

function OrderForm() {
  return (
    <div className={style.content}>
      <Title title="Оформить заказ" styles={style.title} />
      <form className={style.form}>
        <Input
          textarea={false}
          placeholder="Ваше имя"
          type="text"
          minLength={3}
          required={false}
        />
        <Input
          textarea={false}
          placeholder="Ваш номер телефона"
          type="tel"
          minLength={3}
          required
        />
        <Input
          textarea={false}
          placeholder="Ваша почта"
          type="email"
          minLength={3}
          required
        />
        <Input
          textarea={false}
          placeholder="Дата мероприятия"
          type="date"
          minLength={3}
          required={false}
        />
        <Input
          textarea
          placeholder="Адрес мероприятия"
          type="text"
          minLength={3}
          required={false}
        />
        <Input
          textarea
          placeholder="Комментарий"
          type="text"
          minLength={0}
          required={false}
        />
        <Button text="Отправить" styles={style.submit} submit />
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
