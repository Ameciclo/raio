import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import video from '../video/developing-bg.mp4'
import gifDev from '../images/developing.gif'

function DevelopingPage() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [renderOthers, setRenderOthers] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBackgroundLoaded(true);
      const timeout = setTimeout(() => { setRenderOthers(true) }, 1000)
      return () => clearTimeout(timeout);
    }, 1000);
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
            <Header />
            {
              renderOthers && (
                <>
                  <SideNavBar />
                  <div className="gif-dev-container fade-in">
                    <img
                      src={gifDev}
                      className='gif-dev'
                      alt="Imagem de um bule entornando cafe em um computador"
                    />
                    <div className='text-dev'>
                      <h1>Em breve estará disponível!</h1>
                      <p>A página que você está procurando está em desenvolvimento agora...</p><br />
                      <br />
                      <a href='/' className="home-button">
                        Página de início  ➜
                      </a>
                    </div>
                  </div>
                </>
              )
            }
          </>
        )
      }
    </>
  );
}

export default DevelopingPage;