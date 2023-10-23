import Title from "../../title/title";
import CardList from "../../card-list/card-list";
import style from "./platter.module.css";
import { platter } from "../../../utils/constants";

function Platter() {
  return (
    <div className={style.container}>
      <Title title="Платтеры" styles={style.title} />
      <CardList data={platter} />
    </div>
  );
}

export default Platter;
