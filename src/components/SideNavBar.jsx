import React, {  useState } from 'react';
import { useLocation } from 'react-router-dom';

function SideNavBar(props) {
  const location = useLocation();
  const [ navBarListOn, setNavBarListOn ] = useState();

  const isLocalPageNavButton = (page_name) => {
    if (page_name === location.pathname) return "nav-active"
  }

  return (
    <div onClick={() => setNavBarListOn(false)} className={navBarListOn ? "navbar-list-on" : "navbar-list-off"}>
      <a href='/' className={isLocalPageNavButton("/")} >INÍCIO</a>
      <a href='/observatorio' className={isLocalPageNavButton("/observatorio")} >OBSERVATÓRIO</a>
      <a href='/propostas' className={isLocalPageNavButton("/propostas")} >PROPOSTAS</a>
      <a href='/noticias' className={isLocalPageNavButton("/noticias")} >NOTÍCIAS</a>
      <a href='/contato' className={isLocalPageNavButton("/contato")} >CONTATO</a>
      <a href='/faq' className={isLocalPageNavButton("/faq")} >FAQ</a>
    </div>
  );
}

export default SideNavBar;
