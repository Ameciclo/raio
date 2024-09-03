import React, { useEffect, useState } from 'react';
import header_image from "../images/carta_compromisso.png"
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

  useEffect(() => console.log(dataNews), [dataNews])

  return (
    <main>
      <div className="home-last-news">
        <h1>Últimas Notícias</h1>
        <a href={`/noticias/0`} className='news-card'>
          <img src={header_image} alt="" />
          <div className='news-card-text'>
            <span>01/09/24</span>
            <div className='news-card-title'>
              <h1>Lançamento da Carta de Compromisso 2024</h1>
            </div>
            <p>No último sábado lançamos a Carta Compromisso 2024, e ainda estamos abertos a novas assinaturas. Se você deseja contribuir para a mobilidade sustentável, esperamos por você na Ameciclo.

              Sua participação é essencial!

              Atenciosamente,
              Equipe Ameciclo</p>
          </div>
        </a>
      </div>
    </main>
  );
}

export default News;