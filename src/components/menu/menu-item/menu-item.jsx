import { useSelector } from "react-redux";
import Title from "../../title/title";
import CardList from "../card-list/card-list";
import style from "./menu-item.css";

function MenuItem() {
  const { title } = useSelector((state) => state.menu);

  return (
    <div className={style.container}>
      <Title title={title.payload} styles={style.title} />
      <CardList />
    </div>
  );
}

export default MenuItem;
