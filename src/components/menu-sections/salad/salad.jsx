import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./salad.module.css";
import { salad } from "../../../utils/constants";

function Salad() {
  return (
    <div className={style.container}>
      <Title title="Салаты" styles={style.title} />
      <CardList data={salad} />
    </div>
  );
}

export default Salad;
