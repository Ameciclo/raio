import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar';
import video from '../video/home-bg.mp4';
import logo from '../images/logo1.png';
import Footer from '../components/Footer';

function Home() {
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
      <video autoPlay muted loop className='home-video fade-in'>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
      {
        backgroundLoaded && (
          <>
            <Header page='/home' />
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
                      <p>Faça parte do projeto LOAClima e contribua com um futuro sustentável para Pernambuco!</p><br />
                      <a href='/contato' className="glow-on-hover">
                        CONTATO  ➜
                      </a>
                    </div>
                    <img src={logo} className='home-cover-logo' alt='LOAClima Logo'></img>
                  </div>
                  <div className='home-text-about'>
                    <h2>O que é o LOAClima?</h2><br />
                    <p>O LOAClima é um projeto de incidência política nas leis orçamentárias do Governo do Estado de Pernambuco, com foco no monitoramento, avaliação e propostas na aplicação de recursos financeiros. </p><br />
                    <p>O projeto trabalha a alocação de recursos para mitigação e adaptação às <mark>mudanças climáticas</mark>, no que concerne à <mark>mobilidade urbana sustentável</mark>, buscando alinhamento com as diretrizes da <a href='https://antigo.mdr.gov.br/images/stories/ArquivosSEMOB/cartilha_lei_12587.pdf'>Política Nacional de Mobilidade Urbana</a>, bem como as ações previstas no <a href="https://legis.alepe.pe.gov.br/texto.aspx?tiponorma=1&numero=14090&complemento=0&ano=2010&tipo=&url=">Plano Estadual de Mudanças Climáticas</a> e no <a href='https://semas.pe.gov.br/wp-content/uploads/2022/03/2022_03_16_GIZ_plano_descarbonizacao_pernambuco-v6_reduzido.pdf'>Plano de Descarbonização de Pernambuco</a>.</p>
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
                    <div className='card-container'>
                      <a className='partner-card' href="https://gestos.org.br/">
                        <img src={"https://res.cloudinary.com/plpbs/image/upload/v1689873101/thumbnail_Logomarca_da_Gestos_6267e342ab.png"} className='' alt='Logo da Gestos'></img>
                      </a>
                    </div>
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