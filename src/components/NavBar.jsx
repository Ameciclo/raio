import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Navbar(props) {
  const { navBarListOn, setNavBarListOn } = useContext(AppContext)
  const navIsActive = (page, href) => {
    if ('/' + page === href) return "nav-active";
  }
  return (
    <>
      <nav className='navbar'>
        <a href='/' className={navIsActive(props.page, '/home')}>INICIAL</a>
        <a href='/observatorio' className={navIsActive(props.page, '/dev')}>OBSERVATÓRIO</a>
        <a href='/propostas' className={navIsActive(props.page, '/propostas')}>PROPOSTAS</a>
        <a href='/noticias' className={navIsActive(props.page, '/noticias')}>NOTÍCIAS</a>
        <a href='/contato' className={navIsActive(props.page, '/contato')}>CONTATO</a>
        <a href='/faq' className={navIsActive(props.page, '/faq')}>FAQ</a>
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
