import { NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../images/logo.svg'
import main from '../../images/main.jpg'
import cart from '../../images/cart.svg'

function Header() {
    return (
        <header className="header">
            <button className="hamburger__menu">
            <svg viewBox="0 0 100 80" width="28" height="28">
                <rect width="100" height="8"></rect>
                <rect y="30" width="100" height="8"></rect>
                <rect y="60" width="100" height="8"></rect>
            </svg>
            </button>
            <NavLink className='navigation__link' to='/'><img className="logo__image" alt='Логотип' src={logo}/></NavLink>
            <div className="navigation__links">
                <NavLink className='navigation__link menu__link' to='/'>Меню</NavLink>
                <NavLink className='navigation__link' to=''>Контакты</NavLink>
                <NavLink className='navigation__link cart__link' to='/cart'><img className="cart__image" alt='Кнопка корзины' src={cart} /></NavLink>
            </div>
        </header>
    );
  }
  
  export default Header;
  