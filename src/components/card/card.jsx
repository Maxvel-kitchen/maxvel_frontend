/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import style from "./card.module.css";
import Counter from "../counter/counter";
import Button from "../button/button";
import { addToCart } from "../../services/reducers/cart-slice";

function Card({ item, id, title, price, image, newer, amount }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const thisItem = items.find((item) => item.id === id);

  return (
    <li className={style.card}>
      {newer && <p className={style.tag}>New</p>}
      <img className={style.image} src={image} alt={title} />
      <p className={style.title}>{title}</p>
      <div className={style.container}>
        <p className={style.price}>{`${price} €`}</p>
        {thisItem && thisItem.amount > -1 ? (
          <Counter
            amount={thisItem ? thisItem.amount : amount}
            id={id}
            styles={style.counter}
          />
        ) : (
          <Button
            text="Добавить"
            onClick={() => dispatch(addToCart(item))}
            styles={style.button}
            type="button"
          />
        )}
      </div>
    </li>
  );
}
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  newer: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Card;
