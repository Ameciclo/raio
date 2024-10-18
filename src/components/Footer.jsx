import React, { useEffect, useState } from 'react';
import logo from '../images/logo2.png'
import CardPartner from './CardPartner';
import { homeContentAPI } from '../services/request';

function Footer() {
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
          <h2>Patrocinadores</h2>
          <div className='partner-card-container'>
            {
              partnersData && partnersData.map((partner) => partner.sponsor && <CardPartner partner={partner} />)
            }
          </div>
          <a href='/contato' className='contact-link-btn'>Quero patrocinar!</a>
        </div>
        <div className='footer-partners'>
          <h2>Parceiros</h2>
          <div className='partner-card-container'>
            {
              partnersData && partnersData.map((partner) => !partner.sponsor && <CardPartner partner={partner} />)
            }
          </div>
          <a href='/contato' className='contact-link-btn'>Quero ser parceiro!</a>
        </div>
        <div className='footer-links'>
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
        </div>
      </footer>
    </>
  );
}

export default Footer;