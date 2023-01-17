import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./dessert.module.css";

function Dessert() {
  return (
    <div className={style.container}>
      <Title title="Десерты" styles={style.title} />
      <CardList />
    </div>
  );
}

export default Dessert;
