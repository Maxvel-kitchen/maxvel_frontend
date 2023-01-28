import style from "./order.module.css";
import Title from "../title/title";

function Order() {
  return (
    <div className={style.content}>
      <div className={style.banner}>
        <Title title="Заказ оформлен успешно!" styles={style.title} />
        <p className={style.text}>
          Скоро вам позвонит менеджер для дальнейшего обсуждения
        </p>
      </div>
    </div>
  );
}

export default Order;
