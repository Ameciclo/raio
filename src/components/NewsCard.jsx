import React from 'react';

function NewsCard(props) {
  const news = props.data
  return (
    <a href={`/noticias/${news.id}`} className='news-card'>
      <img src={`https://test.cms.ameciclo.org${news.attributes.img.data.attributes.formats.small.url}`} alt={news.attributes.imgDescription} />
      <div className='news-card-text'>
        <div className='news-card-text-gradient'></div>
        <span>{news.attributes.newsDate}</span>
        <div className='news-card-title'>
          <h1>{news.attributes.title}</h1>
        </div>
        <p>{news.attributes.text}</p>
      </div>
    </a>
  );
}

export default NewsCard;
