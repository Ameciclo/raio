import React from 'react';

function NewsCard(props) {
  const news = props.data
  const date = new Date();
  return (
    <a href={`/noticias/${news.id}`} className='news-card'>
      <img src={`${news.attributes.url}`} alt={news.attributes.imgDescription} />
      <div className='news-card-text'>
        <div className='news-card-text-gradient'></div>
        <span>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</span>
        <div className='news-card-title'>
          <h1>Manutenção....</h1>
        </div>
        <p>O serviço de notícias LOAClima está temporariamente em manutenção... Voltaremos em logo breve!</p>
      </div>
    </a>
  );
}

export default NewsCard;
