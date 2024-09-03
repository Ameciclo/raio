import React, { useEffect, useState } from 'react';
import logo from '../images/header-logo.png'
import CardPartner from './CardPartner';
import { homeContentAPI } from '../services/request';

function Footer(props) {
  const [partnersData, setPartnersData] = useState([]);

  useEffect(() => {
    async function fetchPartnerContent() {
      const { partners } = await homeContentAPI()
      setPartnersData(partners);
    }

    return fetchPartnerContent();
  }, []);

  return (
    <>
      <footer className='fade-in'>
        <div className='footer-partners'>
          <h2 key={props.id}>Apoio</h2>
          <div className='partner-card-container'>
            {
              partnersData && partnersData.map((partner) => partner.sponsor && <CardPartner partner={partner} />)
            }
          </div>
          <a href='/contato' className='contact-link-btn'>Quero patrocinar!</a>
        </div>
        <div className='footer-links'>
          <img src={logo} className='' alt='DOM Logo'></img>
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
        </div>
      </footer>
    </>
  );
}

export default Footer;