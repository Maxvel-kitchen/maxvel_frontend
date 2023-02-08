import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./service.module.css";

function Service() {
  return (
    <div className={style.container}>
      <Title title="Услуги" styles={style.title} />
      <CardList />
    </div>
  );
}

export default Service;
