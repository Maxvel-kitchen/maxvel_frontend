import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./drink.module.css";

function Drink() {
  return (
    <div className={style.container}>
      <Title title="Напитки" styles={style.title} />
      <CardList />
    </div>
  );
}

export default Drink;
