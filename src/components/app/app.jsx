import { Route, Routes } from "react-router-dom";
import style from "./app.module.css";
import Header from "../Header/header";
import Menu from "../Menu/menu";
import Cart from "../Cart/cart";

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
