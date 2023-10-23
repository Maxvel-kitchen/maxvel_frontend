import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./asia.module.css";
import { asia } from "../../../utils/constants";

function Asia() {
  return (
    <div className={style.container}>
      <Title title="Азия" styles={style.title} />
      <CardList data={asia} />
    </div>
  );
}

export default Asia;
