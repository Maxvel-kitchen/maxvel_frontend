import PropTypes from "prop-types";
import cn from "classnames";
import style from "./title.module.css";

function Title({ title, styles }) {
  return <h2 className={cn(style.title, styles)}>{title}</h2>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};

export default Title;
