import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import logo from '../images/logo1.png'
import { Link } from 'react-router-dom';

function Header(props) {
  const [headerBackground, setHeaderBackground] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderBackground('scroll-efect');
      } else {
        setHeaderBackground('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${headerBackground} fade-in header-${props.page}`}>
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