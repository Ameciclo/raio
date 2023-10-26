import React, { useEffect, useState } from 'react';
import logo from '../images/logo1.png'
import CardPartner from './CardPartner';
import { homeContentAPI } from '../services/request';

function Footer() {
  const [dataLoa, setDataLoa] = useState([]);

  useEffect(() => {
    async function fetchPartnerContent() {
      const { partners } = await homeContentAPI()
      setDataLoa(partners);
    }

    return fetchPartnerContent();
  }, []);

  return (
    <>
      <div className='home-partners'>
        <h2>Parcerias</h2>
        <div className="parners-container">
          {
            dataLoa && dataLoa.map((partner) => <CardPartner partner={partner} />)
          }
        </div>
        <a href='/contato' className='contact-link-btn'>Quero fazer parceria!</a>
      </div>
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
    </>
  );
}

export default Footer;