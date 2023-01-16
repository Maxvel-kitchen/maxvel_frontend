import { Route, Routes } from "react-router-dom";
import React from "react";
// eslint-disable-next-line no-unused-vars
import style from "./app.module.css";
import Header from "../header/header";
import Menu from "../menu/menu";
import Cart from "../cart/cart";
import Footer from "../footer/footer";
import Modal from "../modal/modal";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div id="app-modal" />
      <Header isOpen={() => setIsOpen(true)} />
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" />
      </Routes>
      <Footer />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default App;
