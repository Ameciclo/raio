import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import arrow from '../images/double-arrow.png'

function SideNavBar() {
  const { navBarListOn, setNavBarListOn } = useContext(AppContext);

  return (
    <>
      <div onClick={() => setNavBarListOn(false)} className={`slide-out-btn fade-in ${!navBarListOn && 'slide-out-btn-off'}`} >
        <img id='arrow-side-bar-btn' src={arrow} alt="seta para minimizar side bar" />
      </div>
      <nav className={`navbar-list ${!navBarListOn && 'show-sidebar'}`} onClick={() => setNavBarListOn(false)}>
        <a href='/' onClick={() => setNavBarListOn(false)}>INÍCIO</a>
        <a href='/contato' onClick={() => setNavBarListOn(false)}>CONTATO</a>
        <a href='/faq' onClick={() => setNavBarListOn(false)}>FAQ</a>
      </nav>
    </>
  );
}

export default SideNavBar;
