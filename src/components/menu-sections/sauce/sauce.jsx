import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./sauce.module.css";

function Sauce() {
  return (
    <div className={style.container}>
      <Title title="Соусы" styles={style.title} />
      <CardList />
    </div>
  );
}

export default Sauce;
