import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import React from "react";
import Header from "../header/header";
import Menu from "../menu/menu";
import Cart from "../cart/cart";
import Order from "../order/order";
import Footer from "../footer/footer";
import Modal from "../modal/modal";
import ScrollToTop from "../scroll-to-top/scroll-to-top";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const setClose = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 375);
  };
  const location = useLocation();
  return (
    <>
      <div id="app-modal" />
      <Header isOpen={() => setIsOpen(true)} />
      <ScrollToTop height={0} />
      <Routes>
        <Route exact path="*" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route
          path={!location === "/menu" || "/cart" || "/order"}
          element={<Navigate replace exact path="*" />}
        />
      </Routes>
      <Footer />
      <Modal isOpen={isOpen} onClose={setClose} />
    </>
  );
}

export default App;
