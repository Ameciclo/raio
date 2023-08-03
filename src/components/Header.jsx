import React from 'react';
import NavBar from './NavBar';
import logo from '../images/logo1.png'
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header fade-in'>
      <div className='header-title'>
        <Link to="/" className='logo-link'>
          <img src={logo} alt="Logo do titulo" className='logo' />
          <div className='header-name'>
            <h1>LOAClima</h1><span>Monitoramento | Avaliação | Propóstas</span>
          </div>
        </Link>
      </div>
      <NavBar page={props.page} />
    </header>
  );
}

export default Header;