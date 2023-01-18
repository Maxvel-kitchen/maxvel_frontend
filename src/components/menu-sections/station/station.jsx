import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./station.module.css";

function Station() {
  return (
    <div className={style.container}>
      <Title title="Станция" styles={style.title} />
      <CardList />
    </div>
  );
}

export default Station;
