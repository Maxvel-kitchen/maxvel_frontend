import style from "./order.module.css";
import Title from "../title/title";

function Order() {
  return (
    <div className={style.content}>
      <Title title="Заказ" styles={style.title} />
      <div className={style.items}>
        <div className={style.item}>
          <img className={style.image} alt="Pic" />
          <div className={style.info}>
            <div className={style.description}>
              <p>Описание блюда длинное</p>
              <p>Цена блюда / шт</p>
            </div>
            <div className={style.counter}>
              <button
                className={style.button}
                aria-label="Убавить"
                type="button"
              >
                -
              </button>
              <p>1</p>
              <button
                className={style.button}
                aria-label="Добавить"
                type="button"
              >
                +
              </button>
            </div>
            <p>1000</p>
          </div>
        </div>
      </div>
      <Title>Итого</Title>
    </div>
  );
}

export default Order;
