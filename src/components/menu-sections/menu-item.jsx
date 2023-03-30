/* eslint-disable no-unused-vars */
import Title from "../title/title";
import CardList from "../card-list/card-list";
import style from "./menu-item.css";

// eslint-disable-next-line react/prop-types
function MenuItem({ title }) {
  return (
    <div className={style.container}>
      <Title title={title} styles={style.title} />
      <CardList />
    </div>
  );
}
// MenuItem.propTypes = {
//   title: MenuItem.string.isRequired,
// };

export default MenuItem;
