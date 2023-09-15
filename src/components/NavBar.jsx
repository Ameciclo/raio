import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Navbar(props) {
  const { navBarListOn, setNavBarListOn } = useContext(AppContext)
  const navIsActive = (page, href) => {
    if (page === href) return true;
  }
  return (
    <>
      <nav className='navbar'>
        <a href='/' className={navIsActive(props.page, '/') && 'nav-active'}>INÍCIO</a>
        <a href='/contato' className={navIsActive(props.page, '/contato') && 'nav-active'}>CONTATO</a>
        <a href='/faq' className={navIsActive(props.page, '/dev') && 'nav-active'}>FAQ</a>
        <a href='/news' className={navIsActive(props.page, '/news') && 'nav-active'}>NOTÍCIAS</a>
      </nav>
      <button className='hamburger' onClick={() => setNavBarListOn(!navBarListOn)}>☰</button>
    </>
  );
}

export default Navbar;
