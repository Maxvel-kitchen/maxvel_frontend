import style from "./card-button.module.css";

function CardButton() {
  return (
    <div className={style.container}>
      <button className={style.button} type="button">
        -
      </button>
      <input className={style.input} type="text" value={1}/>
      <button className={style.button} type="button">
        +
      </button>
    </div>
  );
}

export default CardButton;
