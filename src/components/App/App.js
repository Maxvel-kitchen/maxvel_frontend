import { Route, Routes } from "react-router-dom";
import './App.css';
import main from '../../images/main.jpg'
import Header from '../Header/Header.js'
import Menu from '../Menu/Menu.js'
import Cart from '../Cart/Cart.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Header />}></Route>
        <Route path='/cart' element={<Header />}></Route>
      </Routes>
      <Routes>
        <Route exact path='/' element={<Menu />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
