import style from "./button-submit.module.css";

function ButtonSubmit() {
  return (
    <button className={style.button} type="submit">
      Отправить
    </button>
  );
}

export default ButtonSubmit;
