import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { singleNewsApi } from '../services/request';

function SingleNews() {
  const [dataNews, setDataNews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchSingleNewsData() {
      const data = await singleNewsApi(id)
      setDataNews(data)
      console.log(data)
    }

    return fetchSingleNewsData();
  }, []);

  return (
    <>
      <Header page='noticias' />
      <SideNavBar />
      <div className='news-pg fade-in'>
        <div className="single-news-banner">
          <h1>{dataNews.attributes.title}</h1>
          <p>{dataNews.attributes.subtitle}</p>
        </div>

        <p className='news-text'><div><img id='news-text-img' src={`https://test.cms.ameciclo.org${dataNews.attributes.img.data.attributes.formats.large.url}`} alt={dataNews.alt} />
          <span>{dataNews.attributes.imgDescription}</span></div>{dataNews.attributes.text}</p>
      </div>
      <Footer />
    </>
  );
}

export default SingleNews;