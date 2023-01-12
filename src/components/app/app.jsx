import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import style from "./app.module.css";
import Header from "../header/header";
import Menu from "../menu/menu";
import Cart from "../cart/cart";
import Footer from "../footer/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
