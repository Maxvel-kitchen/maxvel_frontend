/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ScrollButtons from "../../scroll-buttons/scroll-buttons";
import { getPositions } from "../../../services/api/position-list";
import style from "./category-button.module.css";
import { getMenu, setTitle } from "../../../services/redux/main-menu-reducer";

function CategoryButton({ category }) {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const title = category.name;

  function handleClick() {
    setIsActive(!isActive);
    dispatch(setTitle({ payload: title }));
    getPositions(category.slug)
      .then((positionsData) => {
        dispatch(
          getMenu({
            payload: positionsData,
          })
        );
      })
      .catch((err) => console.log("error in PromiseAll: ", err));
  }

  return (
    <>
      <button
        className={`${style.link} ${isActive ? style.link_active : ""}`}
        onClick={handleClick}
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
