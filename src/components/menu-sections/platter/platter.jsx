import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./platter.module.css";

function Platter() {
  return (
    <div className={style.container}>
      <Title title="Платтеры" styles={style.title} />
      <CardList />
    </div>
  );
}

export default Platter;
