import React from 'react';

function NewsCardMaintenance() {
  const date = new Date();
  return (
  <a href='/noticias/' className='news-card'>
      <img src={"https://www.saofranciscodogloria.mg.leg.br/imagens/imagem_neutra_noticias.jpg"} alt="{news.attributes.imgDescription}" />
      <div className='news-card-text'>
        <div className='news-card-text-gradient'></div>
        <span>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</span>
        <div className='news-card-title'>
          <h1>Manutenção....</h1>
        </div>
        <p>O serviço de notícias LOAClima está em manutenção agora... Voltaremos em breve!</p>
      </div>
    </a>
  );
}

export default NewsCardMaintenance;
