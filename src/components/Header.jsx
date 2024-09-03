import React, { useState, useEffect } from 'react';
import logo from '../images/header-logo.png'
import menu_icon from '../images/hamburger.png'
import no_menu_icon from '../images/x.png'
import { Link } from 'react-router-dom';

function Header(props) {

  const [navBarListOn, setNavBarListOn] = useState(false);

  const isLocalPageNavButton = (page_name) => {
    if (page_name === props.page) return "nav-active"
  }

  console.log(navBarListOn);

  const navIsActive = (page, href) => {
    if (page === href) return "nav-active";
  }
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
    <>
      <header className={`header ${headerBackground}`}>
      {
          navBarListOn ? (
          <div onClick={() => setNavBarListOn(false)} className="nav-mobile">
            <a href='/' className={isLocalPageNavButton("/")} >INÍCIO</a>
            <a href='/observatorio' className={isLocalPageNavButton("/observatorio")} >OBSERVATÓRIO</a>
            <a href='/propostas' className={isLocalPageNavButton("/propostas")} >PROPOSTAS</a>
            <a href='/noticias' className={isLocalPageNavButton("/noticias")} >NOTÍCIAS</a>
            <a href='/contato' className={isLocalPageNavButton("/contato")} >CONTATO</a>
            <a href='/faq' className={isLocalPageNavButton("/faq")} >FAQ</a>
          </div>)
          : 
          (<div onClick={() => setNavBarListOn(true)} className="nav-mobile nav-mobile-off">
          </div>)
        }
        <div className='header-title'>
          <Link to="/" className='logo-link'>
            <img src={logo} alt="Logo do titulo" className='logo' />
          </Link>
        </div>
        <nav className='navbar'>
          <a href='/' className={navIsActive(props.page, '/')}>INICIAL</a>
          <a href='/observatorio' className={navIsActive(props.page, '/dev')}>OBSERVATÓRIO</a>
          <a href='/propostas' className={navIsActive(props.page, '/propostas')}>PROPOSTAS</a>
          <a href='/noticias' className={navIsActive(props.page, '/noticias')}>NOTÍCIAS</a>
          <a href='/contato' className={navIsActive(props.page, '/contato')}>CONTATO</a>
          <a href='/faq' className={navIsActive(props.page, '/faq')}>FAQ</a>
        </nav>
        {
          navBarListOn ? (<div onClick={() => setNavBarListOn(false)} className='icon-menu-mobile-x'>
            <img src={no_menu_icon} alt="Logo do titulo" className='logo' />
          </div>
          )
            :
            (<div onClick={() => setNavBarListOn(true)} className='icon-menu-mobile-hamburger'>
              <img src={menu_icon} alt="Logo do titulo" className='logo' />
            </div>)
        }
        
      </header>
      <div className={`fade-in cover ${props.page !== "/" ? props.page.replace("/", "") : "inicial"}-cover`}></div>
    </>
  );
}

export default Header;