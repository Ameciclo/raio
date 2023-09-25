import React from 'react';

function NewsCard(props) {
  const news = props.data
  return (
    <a href={`/noticias/${news.id}`} className='news-card'>
      <img src={news.img} alt={news.img} />
      <div className='news-card-text'>
        <div className='news-card-text-gradient'></div>
        <span>{news.date}</span>
        <div className='news-card-title'>
          <h1>{news.title}</h1>
        </div>
        <p>{news.text}</p>
      </div>
    </a>
  );
}

export default NewsCard;
