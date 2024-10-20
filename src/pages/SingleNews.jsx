import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
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

  useEffect(() => console.log(dataNews), [dataNews])
  return (
    <>
      <Header page='noticias' />
      {
        dataNews && (
          <>
            <div className="page-banner news-banner">
              <h1>Notícias</h1>
            </div>

            <div className='news-text'>
              <h1>{dataNews.title}</h1>
              <br />
              <p>{dataNews.subtitle}</p>
              <br /><br />
              {dataNews.body}
              <img id='news-text-img' src={dataNews.featuredImage.data.attributes.url} alt={dataNews.featuredImage.data.attributes.alternativeText} />
            </div>
            < Footer />
          </>
        )
      }
    </>
  );
}

export default SingleNews;