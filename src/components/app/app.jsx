import { Route, Routes } from "react-router-dom";
import style from "./app.module.css";
import Header from "../header/header";
import Menu from "../menu/menu";
import Cart from "../cart/cart";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" />
      </Routes>
    </div>
  );
}

export default App;
