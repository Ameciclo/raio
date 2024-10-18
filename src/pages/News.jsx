import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import { newsApi } from '../services/request';
import Loading from '../components/Loading';

function News() {
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await newsApi();
      setDataNews(data.slice().sort((a, b) => b.id - a.id));
    }

    fetchData();
  }, []);

  return (
    <>
      <Header page='noticias' />
      <div className='page'>
        <div className="page-banner news-banner">
          <h1>NOTÍCIAS</h1>
        </div>
        <div className='page-area'>
          <h1>Todas as Notícias</h1>
          <br /><br />
          {dataNews.length > 0 ? (
            dataNews.map((singleNews) => (
              <NewsCard key={singleNews.id} data={singleNews} />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
