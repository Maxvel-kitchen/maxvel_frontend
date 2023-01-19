import { Route, Routes } from "react-router-dom";
import React from "react";
// eslint-disable-next-line no-unused-vars
import style from "./app.module.css";
import Header from "../header/header";
import Menu from "../menu/menu";
import Cart from "../cart/cart";
import Footer from "../footer/footer";
import Modal from "../modal/modal";
import ScrollToTop from "../scroll-to-top/scroll-to-top";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const setClose = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, "375");
  };
  return (
    <>
      <div id="app-modal" />
      <Header isOpen={() => setIsOpen(true)} />
      <ScrollToTop height={0} />
      <Routes>
        <Route exact path="*" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" />
      </Routes>
      <Footer />
      <Modal isOpen={isOpen} onClose={setClose} />
    </>
  );
}

export default App;
