import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar';
import video from '../video/home-bg.mp4';
import logo from '../images/logo1.png';
import Footer from '../components/Footer';
import CardPartner from '../components/CardPartner';
const axios = require('axios');

function Home() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [renderOthers, setRenderOthers] = useState(false);
  const [dataLoa, setDataLoa] = useState({});

  useEffect(() => {
    axios.get('https://cms.ameciclo.org/projects')
    .then(function (response) {
      const data = response.data.find(function (project) {
        return project.name === 'LOACLIMA';
      });
      console.log(data);
      setDataLoa(data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    const  timeout = setTimeout(() => {
      setBackgroundLoaded(true);
      const timeout = setTimeout(() => { setRenderOthers(true) }, 1000)
      return () => clearTimeout(timeout);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <video autoPlay muted loop className='home-video fade-in'>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
      {
        backgroundLoaded && (
          <>
            <Header page='' />
            {
              renderOthers && (
                <>
                  <SideNavBar />
                  <div className='fade-in home-cover'>
                    <div className='home-text-cover'>
                      <div className='home-title'>
                        <h1 className='LOA-title'>LOA</h1><h1 className='Clima-title'>Clima</h1>
                      </div>
                      <div className='stack-loop'>
                        <span>Monitoramento | Avaliação | Propóstas</span>
                      </div>
                      <p>{dataLoa.goal}</p><br />
                      <a href='/contato' className="glow-on-hover">
                        CONTATO  ➜
                      </a>
                    </div>
                    <img src={logo} className='home-cover-logo' alt='LOAClima Logo'></img>
                  </div>
                  <div className='home-text-about'>
                    <h2>O que é o LOAClima?</h2><br />
                    <p>{dataLoa.description}</p>
                  </div>
                  <div className='home-faq'>
                    <h2>Perguntas Frequêntes</h2>
                    <div className='card-container'>
                      <a className='faq-card' href='/faq'>
                        <h3>O que é LOA?</h3>
                      </a>
                      <a className='faq-card' href='/faq'>
                        <h3>O que é PPA?</h3>
                      </a>
                      <a className='faq-card' href='/faq'>
                        <h3>O que é LDO?</h3>
                      </a>
                    </div>
                    <a href='/contato' className='contact-link-btn'>Faça uma pergunta!</a>
                  </div>
                  <div className='home-partners'>
                    <h2>Parcerias</h2>
                    {
                      dataLoa.partners && dataLoa.partners.map((partner) => <CardPartner partner={partner} />)
                    }
                    <a href='/contato' className='contact-link-btn'>Quero fazer parceria!</a>
                  </div>
                  <Footer />
                </>
              )
            }
          </>
        )
      }
    </>
  );
}

export default Home;