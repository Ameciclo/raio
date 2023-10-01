import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import { newsApi } from '../services/request';


function News() {
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await newsApi()
      setDataNews(data.slice().sort((a, b) => b.id - a.id))
    }

    return fetchData();
  }, []);

  return (
    <>
      <Header page='noticias' />
      <SideNavBar />
      <div className='news-pg'>
        <div class="news-banner">
          <h1>NOTÍCIAS</h1>
        </div>
        <div className='news-area'>
          {
            dataNews.map(
              (singleNews) => <NewsCard data={singleNews} />
            )
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;