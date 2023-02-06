/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-irregular-whitespace */
import cn from "classnames";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Counter from "../counter/counter";
import { remove } from "../../services/reducers/cart-slice";
import style from "./order-item.module.css";
import img from "../../images/demo6.png";

function OrderItem({ id, title, price, amount }) {
  const dispatch = useDispatch();

  function countPrice(itemPrice, itemAmount) {
    return itemPrice * itemAmount;
  }

  return (
    <li className={style.item}>
      <img src={img} alt={title} className={style.image} />
      <div className={style.description}>
        <p className={style.title}>{title}</p>
        <p className={cn(style.price, style.price_size_small)}>
          {`${price} € / шт`}
        </p>
      </div>
      <div className={style.counter}>
        <Counter amount={amount} id={id} />
      </div>
      <p className={cn(style.price, style.price_size_big)}>
        {countPrice(price, amount)}&nbsp;€
      </p>
      <button
        className={style.button}
        type="button"
        onClick={() => dispatch(remove(id))}
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
