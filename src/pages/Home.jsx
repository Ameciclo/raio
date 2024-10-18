import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';
import { homeContentAPI, newsApi } from '../services/request';
import NewsCard from '../components/NewsCard';
import Loading from '../components/Loading';

function Home() {
  const [loadingDesc, setLoadingDesc] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);
  const [dataLoa, setDataLoa] = useState({});
  const [dataNews, setDataNews] = useState([]);


  useEffect(() => {
    async function fetchHomeContent() {
      const dataLOAClima = await homeContentAPI()
      setDataLoa(dataLOAClima);
      setLoadingDesc(false)
    }

    return fetchHomeContent();
  }, []);

  useEffect(() => {
    async function fetchNews() {
      const data = await newsApi()
      setDataNews(data.slice().sort((a, b) => b.id - a.id))
      setLoadingNews(false)
    }

    return fetchNews();
  }, []);

  return (
    <>
      <Header page='home' />
      <div className='fade-in home-cover' />
      <div className='home-text-about effect'>
        <h1>O que é o LOAClima?</h1>
        <br /><br />
        {loadingDesc ? <Loading /> : (<p>{dataLoa.description}</p>)}
      </div>
      <div className="home-proposals">
        <h1>Nossas Propostas</h1>
        <br />
        <br />
        <div>
          <h2 className="proposals-card"><a href="/propostas/2">Destinar pelo menos 85% dos recursos de Mobilidade para a Mobilidade Sustentável!</a></h2>
          <br />
          <h2 className="proposals-card"><a href="/propostas/1">Plano Diretor Cicloviário da Região Metropolitana do Recife implementado nos próximos 4 anos!</a></h2>
        </div>
        <br />
        <a href='/propostas' className=''>Todas as propostas</a>
      </div>
      <div className="home-last-news">
        <h1>Últimas Notícias</h1>
        <br /><br />
        {
          loadingNews ?
            (<Loading />)
            :
            (
              dataNews.slice(0, 3).map(
                (singleNews) => <NewsCard data={singleNews} />
              )
            )
        }
        <a href='/noticias'>Todas as notícias</a>
      </div>
      <div className='home-faq'>
        <h2>Dúvidas Frequentes</h2>
        <div className='card-container'>
          <a className='faq-card' href='/faq/O que é LOA (Lei Orçamentária Anual)?'>
            <h3>O que é LOA?</h3>
          </a>
          <a className='faq-card' href='/faq/O que é PPA (Plano Plurianual)?'>
            <h3>O que é PPA?</h3>
          </a>
          <a className='faq-card' href='/faq/O que é LDO (Lei de Diretrizes Orçamentárias)?'>
            <h3>O que é LDO?</h3>
          </a>
        </div>
        <a href='/contato' className='contact-link-btn'>Sugerir Dúvida</a>
      </div>
      <div >
      </div>
      <Footer />
    </>
  );
}

export default Home;