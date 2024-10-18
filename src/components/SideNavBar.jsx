import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SideNavBar(props) {
  const { navBarListOn, setNavBarListOn } = useContext(AppContext);
  const navIsActive = (page, href) => {
    if ('/' + page === href) return true;
  }

  return (
    <>
      <div onClick={()=>setNavBarListOn(false)} className={`navbar-list-out-section ${navBarListOn && 'show-sidebar-out'}`}/>
      <nav className={`navbar-list ${navBarListOn && 'show-sidebar'}`} onClick={() => setNavBarListOn(false)}>
        <a href='/' className={navIsActive(props.page, '/home') && 'nav-active'} onClick={() => setNavBarListOn(false)}>INÍCIO</a>
        <a href='/observatorio' className={navIsActive(props.page, '/observatorio') && 'nav-active'} onClick={() => setNavBarListOn(false)}>OBSERVATÓRIO</a>
        <a href='/propostas' className={navIsActive(props.page, '/propostas') && 'nav-active'} onClick={() => setNavBarListOn(false)}>PROPOSTAS</a>
        <a href='/noticias' className={navIsActive(props.page, '/noticias') && 'nav-active'} onClick={() => setNavBarListOn(false)}>NOTÍCIAS</a>
        <a href='/contato' className={navIsActive(props.page, '/contato') && 'nav-active'} onClick={() => setNavBarListOn(false)}>CONTATO</a>
        <a href='/faq' className={navIsActive(props.page, '/faq') && 'nav-active'} onClick={() => setNavBarListOn(false)}>FAQ</a>
      </nav>
    </>
  );
}

export default SideNavBar;
