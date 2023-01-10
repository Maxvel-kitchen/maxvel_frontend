import style from "./order-form.module.css";

function OrderForm() {
  return (
    <div className={style.content}>
      <h2 className={style.header}>Оформить заказ</h2>
      <form className={style.form}>
        <input
          className={style.input}
          id="name"
          placeholder="Ваше имя"
          type="text"
          minLength="3"
          required
        />
        <input
          className={style.input}
          id="tel"
          placeholder="Ваш номер телефона"
          type="tel"
          required
        />
        <input
          className={style.input}
          id="email"
          placeholder="Ваша почта"
          type="email"
          required
        />
        <input
          className={style.input}
          id="date"
          placeholder="Дата мероприятия"
          type="date"
          required
        />
        <input
          className={style.input__adress}
          id="adress"
          placeholder="Адрес мероприятия"
          type="text"
          required
        />
        <input
          className={style.input__comment}
          id="comment"
          placeholder="Комментарий"
          type="text"
        />
        <button className={style.button} type="submit">
          Отправить
        </button>
        <div className="input__confirmation">
          <input id="confirm" type="checkbox" />
          <p>
            Нажимая на кнопку, вы соглашаетесь с обработкой своих персональных
            данных
          </p>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
