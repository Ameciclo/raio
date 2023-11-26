import React from 'react';

function NewsCard(props) {
  const newsdata = props.data
  const newsImageData = newsdata.attributes.featuredImage.data.attributes
  const newsDate = new Date(newsdata.attributes.createdAt)
  return (
    <a href={`/noticias/${newsdata.id}`} className='news-card'>
      <img src={newsImageData.url} alt={newsImageData.alternativeText} />
      <div className='news-card-text'>
        <div className='news-card-text-gradient'></div>
        <span>{newsDate.getDate()}/{newsDate.getMonth()+1}/{newsDate.getFullYear()}</span>
        <div className='news-card-title'>
          <h1>{newsdata.attributes.title}</h1>
        </div>
        <p>{newsdata.attributes.body}</p>
      </div>
    </a>
  );
}

export default NewsCard;
