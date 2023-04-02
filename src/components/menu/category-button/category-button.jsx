/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import ScrollButtons from "../../scroll-buttons/scroll-buttons";
import style from "./category-button.module.css";

function CategoryButton({ category }) {
  //   console.log("subcategory:", category.sub_categories);
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button
        className={`${style.link} ${isActive ? style.link_active : ""}`}
        onClick={() => setIsActive(!isActive)}
        type="button"
      >
        {category.name}
      </button>
      {isActive === true &&
      category.sub_categories !== [] &&
      window.innerWidth > 768 ? (
        <ScrollButtons subCategories={category.sub_categories} />
      ) : (
        <div className={style.none} />
      )}
    </>
  );
}

CategoryButton.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};

export default CategoryButton;
