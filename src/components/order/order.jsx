import style from "./order.module.css";

function Order() {
  return (
    <div className={style.content}>
      <h2 className={style.header}>Заказ</h2>
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
              <p>Кол-во</p>
              <button
                className={style.button}
                aria-label="Добавить"
                type="button"
              >
                +
              </button>
            </div>
            <p>Цена</p>
          </div>
        </div>
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
              <p>Кол-во</p>
              <button
                className={style.button}
                aria-label="Добавить"
                type="button"
              >
                +
              </button>
            </div>
            <p>Цена</p>
          </div>
        </div>
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
              <p>Кол-во</p>
              <button
                className={style.button}
                aria-label="Добавить"
                type="button"
              >
                +
              </button>
            </div>
            <p>Цена</p>
          </div>
        </div>
      </div>
      <p>Итого: Цена</p>
    </div>
  );
}

export default Order;
