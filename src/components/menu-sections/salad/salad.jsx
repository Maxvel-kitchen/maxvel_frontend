import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./salad.module.css";

function Salad() {
  return (
    <div className={style.container}>
      <Title title="Салаты" styles={style.title} />
      <CardList />
    </div>
  );
}

export default Salad;
