import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../header/header";
import Menu from "../menu/menu";
import Cart from "../cart/cart";
import Order from "../order/order";
import Footer from "../footer/footer";
import { getCartTotal } from "../../services/reducers/cart-slice";
import Modal from "../modal/modal";
import ScrollToTop from "../scroll-to-top/scroll-to-top";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const setClose = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 375);
  };

  const { items, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  const location = useLocation();
  return (
    <>
      <div id="app-modal" />
      <Header isOpen={() => setIsOpen(true)} totalCount={totalCount} />
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
