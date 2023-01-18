import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./kids.module.css";

function Kids() {
  return (
    <div className={style.container}>
      <Title title="Детское" styles={style.title} />
      <CardList />
    </div>
  );
}

export default Kids;
