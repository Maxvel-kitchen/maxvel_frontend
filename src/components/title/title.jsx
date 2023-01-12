import PropTypes from "prop-types";
import style from "./title.module.css";

function Title({ children }) {
  return <p className={style.title}>{children}</p>;
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
