import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { singleNewsApi } from '../services/request';

function SingleNews() {
  const [dataNews, setDataNews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchSingleNewsData() {
      const { attributes } = await singleNewsApi(id)
      setDataNews(attributes)
    }

    return fetchSingleNewsData();
  }, [id]);

  useEffect(() => console.log(dataNews),[dataNews])
  return (
    <>
      <Header page='noticias' />
      <SideNavBar />
      {
        dataNews && (
          <>
            <div className='news-pg fade-in'>
              <div className="single-news-banner">
                <h1>{dataNews.title}</h1>
                <p>{dataNews.subtitle}</p>
              </div>

              <p className='news-text'>
                <div>
                  <img id='news-text-img' src={dataNews.featuredImage.data.attributes.url} alt={dataNews.featuredImage.data.attributes.alternativeText} />
                </div>
                {dataNews.body}
              </p>
            </div>
            < Footer />
          </>
        )
      }
    </>
  );
}

export default SingleNews;