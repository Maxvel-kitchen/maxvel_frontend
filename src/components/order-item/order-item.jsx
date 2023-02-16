/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useEffect } from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Counter from "../counter/counter";
import Button from "../button/button";
import { remove, returnItem } from "../../services/reducers/cart-slice";
import style from "./order-item.module.css";

function OrderItem({ id, image, title, price, amount }) {
  const dispatch = useDispatch();

  function countPrice(itemPrice, itemAmount) {
    return itemPrice * itemAmount;
  }

  const [deleted, setDeleted] = React.useState(false);

  useEffect(() => {
    if (deleted) {
      const timerId = setTimeout(() => dispatch(remove(id)), 4000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [deleted]);

  function handleDelete() {
    if (deleted) {
      setDeleted(false);
      dispatch(returnItem(id));
    } else {
      setDeleted(true);
    }
  }

  return (
    <li className={cn(style.item, deleted ? style.item_deleted : "")}>
      <img src={image} alt={title} className={style.image} />
      <div className={style.description}>
        <p className={style.title}>{title}</p>
        <p className={cn(style.price, style.price_size_small)}>
          {`${price} € / шт`}
        </p>
      </div>
      <div className={style.counter}>
        {deleted ? (
          <Button
            text="Вернуть"
            styles={style.button_return}
            onClick={() => handleDelete()}
          />
        ) : (
          <Counter amount={amount} id={id} handleDelete={handleDelete} />
        )}
      </div>
      <p className={cn(style.price, style.price_size_big)}>
        {countPrice(price, amount)}&nbsp;€
      </p>
      <button
        className={style.button_delete}
        type="button"
        onClick={() => handleDelete()}
      />
    </li>
  );
}
OrderItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};
export default OrderItem;
