import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Navbar(props) {
  const { navBarListOn, setNavBarListOn } = useContext(AppContext)
  const navIsActive = (page, href) => {
    if ('/' + page === href) return true;
  }
  return (
    <>
      <nav className='navbar'>
        <a href='/' className={navIsActive(props.page, '/home') && 'nav-active'}>INÍCIO</a>
        <a href='/observatorio' className={navIsActive(props.page, '/dev') && 'nav-active'}>OBSERVATÓRIO
          <div className='nav-dev'>Em breve!</div>
        </a>
        <a href='/noticias' className={navIsActive(props.page, '/noticias') && 'nav-active'}>NOTÍCIAS</a>
        <a href='/contato' className={navIsActive(props.page, '/contato') && 'nav-active'}>CONTATO</a>
        <a href='/faq' className={navIsActive(props.page, '/faq') && 'nav-active'}>FAQ</a>
      </nav>
      <button className="hamburger" onClick={() => setNavBarListOn(!navBarListOn)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </>
  );
}

export default Navbar;
