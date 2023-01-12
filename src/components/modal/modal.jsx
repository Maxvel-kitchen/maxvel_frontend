/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from "prop-types";
import style from "./modal.module.css";
import MenuList from "../menu-list/menu-list";

function Modal({ isOpen, onClose }) {
  return (
    <div className={isOpen ? style.modal : style.hidden}>
      <div className={style.container}>
        <button
          className={style.button}
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <MenuList />
      </div>
    </div>
  );
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
