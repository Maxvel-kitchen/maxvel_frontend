/* eslint-disable jsx-a11y/no-static-element-interactions */
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import style from "./modal.module.css";
import MenuList from "../menu-list/menu-list";

function Modal({ isOpen, onClose }) {
  return isOpen
    ? createPortal(
        <div className={style.modal}>
          <div className={style.background} />
          <div className={style.container}>
            <button
              className={style.button}
              type="button"
              aria-label="Закрыть"
              onClick={onClose}
            />
            <MenuList />
          </div>
        </div>,
        document.getElementById("app-modal")
      )
    : null;
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
