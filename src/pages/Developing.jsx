import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import gifDev from '../images/developing.gif'
import Footer from '../components/Footer';

function DevelopingPage() {
  const [renderOthers, setRenderOthers] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderOthers(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header page='dev'/>
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
                <a href='/observatorio' className="home-button">
                  Veja como está ficando  ➜
                </a>
                <a href='/' className="home-button">
                  Página de início  ➜
                </a>
              </div>
            </div>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default DevelopingPage;