import React from 'react';
import logo from '../images/logo1.png'

function Footer() {

  return (
    <footer className='fade-in'>
      <img src={logo} className='' alt='LOAClima Logo'></img>
      <aside>
        <a href="/contato">Contato</a>
        <a href="/faq">FAQ</a>
        <a href="https://dados.ameciclo.org/observatorio">Observatório</a>
      </aside>
      <aside>
        <a href="https://dados.ameciclo.org/">Dados da Ameciclo</a>
        <a href="/contact">Notícias</a>
        <a href="/https://www.ameciclo.org">Site da Ameciclo</a>
      </aside>
    </footer>
  );
}

export default Footer;