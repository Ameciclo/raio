import React from 'react';
import logo from '../images/logo1.png'

function Footer() {

  return (
    <footer className='fade-in'>
      <img src={logo} className='' alt='LOAClima Logo'></img>
      <aside>
        <a href="https://dados.ameciclo.org/" target='_blank' rel="noreferrer">Dados da Ameciclo</a>
        <a href="https://dados.ameciclo.org/observatorio" target='_blank' rel="noreferrer">Observatório Cicloviário</a>
        <a href="https://www.ameciclo.org" target='_blank' rel="noreferrer">Site da Ameciclo</a>
      </aside>
      <aside>
        <a href="/observatorio">Observatório</a>
        <a href="/contato">Contato</a>
        <a href="/faq">FAQ</a>
        <a href="/noticias">Notícias</a>
      </aside>
    </footer>
  );
}

export default Footer;