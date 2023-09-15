import React from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';

function News() {
  return (
    <>
      <Header page='/news' />
      <SideNavBar />
      <div className='single-news-banner'>
        <img></img>
        <h1>Notícias</h1>
      </div>
      <div className='news-text-area'>
        <div className='news-cards'>
          <p>{`
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia, ipsa inventore nemo error blanditiis atque aperiam voluptatem? Sit est quibusdam recusandae! Quas officiis officia maiores quibusdam animi, quis atque.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum, nulla laudantium beatae ab deleniti iste eligendi esse vel optio a totam dignissimos consequuntur eveniet tenetur incidunt. Fugit, enim pariatur! 
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia, ipsa inventore nemo error blanditiis atque aperiam voluptatem? Sit est quibusdam recusandae! Quas officiis officia maiores quibusdam animi, quis atque.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum, nulla laudantium beatae ab deleniti iste eligendi esse vel optio a totam dignissimos consequuntur eveniet tenetur incidunt. Fugit, enim pariatur! `}
          </p>
        </div>
      </div>

    </>
  );
}

export default News;