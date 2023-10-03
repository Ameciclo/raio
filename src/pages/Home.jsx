import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar';
import video from '../video/home-bg.mp4';
import logo from '../images/LOGO-LOACLIMA-fundo-transparente.png';
import simpleLogo from '../images/LOGO-LOACLIMA-SIMBOLO-fundo-transparente.png';
import Footer from '../components/Footer';
import CardPartner from '../components/CardPartner';
import { homeContentAPI, newsApi } from '../services/request';
import NewsCard from '../components/NewsCard';

function Home() {
  const [dataLoa, setDataLoa] = useState({});
  const [dataNews, setDataNews] = useState([]);


  useEffect(() => {
    async function fetchHomeContent() {
      const dataLOAClima = await homeContentAPI()
      setDataLoa(dataLOAClima);
    }

    return fetchHomeContent();
  }, []);

  useEffect(() => {
    async function fetchNews() {
      const data = await newsApi()
      setDataNews(data.slice().sort((a, b) => b.id - a.id))
    }

    return fetchNews();
  }, []);

  return (
    <>
      <video autoPlay muted loop className='home-video fade-in'>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
      <Header page='home' />
      <SideNavBar />
      <div className='fade-in home-cover'>
        <div className='home-text-cover'>
          <div className='stack-loop'>
            <span>Monitoramento | Avaliação | Propóstas</span>
          </div>
          <p>{dataLoa.goal}</p><br />
          <a href='/contato' className="glow-on-hover">
            CONTATO  ➜
          </a>
        </div>
        <img src={logo} className='home-cover-logo' alt='LOAClima Logo'></img>
      </div>
      <div className='home-text-about'>
        <img src={simpleLogo} alt="loaclima logo simplificada" />
        <aside>
          <h1>O que é o LOAClima?</h1>
          <p>{dataLoa.description}</p>
        </aside>
      </div>
      <div className="home-proposals">
        <h1>Nossas Propostas</h1>
        <div className="proposals-card">
          <h2>Destinar pelo menos 85% dos recursos de Mobilidade para a Mobilidade Sustentável</h2>
          <br />
          <h2>Plano Diretor Cicloviário da Região Metropolitana do Recife implementado nos próximos 4 anos</h2>
        </div>
      </div>
      <div className="home-last-news">
        <h1>Últimas Notícias</h1>
        {
          dataNews.map(
            (singleNews) => <NewsCard data={singleNews} />
          )
        }
      </div>
      <div className='home-faq'>
        <h2>Dúvidas Frequentes</h2>
        <div className='card-container'>
          <a className='faq-card' href='/faq'>
            <h3>O que é LOA?</h3>
          </a>
          <a className='faq-card' href='/faq'>
            <h3>O que é PPA?</h3>
          </a>
          <a className='faq-card' href='/faq'>
            <h3>O que é LDO?</h3>
          </a>
        </div>
        <a href='/contato' className='contact-link-btn'>Faça uma pergunta!</a>
      </div>
      <div >
      </div>
      <div className='home-partners'>
        <h2>Parcerias</h2>
        {
          dataLoa.partners && dataLoa.partners.map((partner) => <CardPartner partner={partner} />)
        }
        <a href='/contato' className='contact-link-btn'>Quero fazer parceria!</a>
      </div>
      <Footer />
    </>
  );
}

export default Home;