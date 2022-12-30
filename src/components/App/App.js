import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from '../Header/Header.js'
import Menu from '../Menu/Menu.js'
import Cart from '../Cart/Cart.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Menu />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/order'></Route>
      </Routes>
    </div>
  );
}

export default App;
