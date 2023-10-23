import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./dessert.module.css";
import { dessert } from "../../../utils/constants";

function Dessert() {
  return (
    <div className={style.container}>
      <Title title="Десерты" styles={style.title} />
      <CardList data={dessert} />
    </div>
  );
}

export default Dessert;
