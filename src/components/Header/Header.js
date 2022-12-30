import { NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../images/logo.svg'

function Header() {
    return (
        <header className="header">
            <button className="hamburger__menu"></button>
            <NavLink className='navigation__link' to='/'><img className="logo__image" alt='Логотип Максвел' src={logo}/></NavLink>
            <div className="navigation__links">
                <NavLink className='navigation__link menu__link' to='/'>Меню</NavLink>
                <NavLink className='navigation__link' to=''>Контакты</NavLink>
                <NavLink className='navigation__link cart__link' to='/cart'></NavLink>
            </div>
        </header>
    );
  }
  
  export default Header;
  