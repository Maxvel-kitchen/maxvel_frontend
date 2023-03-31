/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./modal.module.css";
import MenuList from "../menu/menu-list/menu-list";

function Modal({ isOpen, onClose }) {
  const modal = useRef();
  function modalClose() {
    modal.current.className = style.closed;
    onClose();
  }
  return isOpen
    ? createPortal(
        <div className={style.modal__background}>
          <div className={style.background} onClick={modalClose} />
          <div
            ref={modal}
            className={isOpen ? cn(style.opened) : cn(style.closed)}
          >
            <button
              className={style.button}
              type="button"
              aria-label="Закрыть"
              onClick={modalClose}
            />
            <MenuList onClose={modalClose} />
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
