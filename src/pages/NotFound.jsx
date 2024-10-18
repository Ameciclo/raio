import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import video from '../video/home-bg.mp4'
import gif404 from '../images/404.gif'
import Footer from '../components/Footer';

function NotFoundPage() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [renderOthers, setRenderOthers] = useState(false);

  useEffect(() => {
    const  timeout = setTimeout(() => {
      setBackgroundLoaded(true);
      const timeout = setTimeout(() => { setRenderOthers(true) }, 1000)
      return () => clearTimeout(timeout);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <video autoPlay muted loop className='video-404'>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
      {
        backgroundLoaded && (
          <>
            <Header page='dev' />
            {
              renderOthers && (
                <>
                  <div className="notfound-container fade-in">
                    <img
                      src={gif404}
                      className='gif-404'
                      alt="Imagem 404 not found"
                    />
                    <div className='text-404'>
                      <h1>Error 404</h1>
                      <p>A página que você está procurando não foi encontrada.</p>
                      <br />
                      <a href='/' className="home-button">
                        Página de início  ➜
                      </a>
                    </div>
                  </div>
                </>
              )
            }
            <Footer />
          </>
        )
      }
    </>
  );
}

export default NotFoundPage;