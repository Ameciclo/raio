import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import video from '../video/faq-bg.mp4';
import image from '../images/faq.png';
import AskReply from '../components/AskReply';
import FaqForm from '../components/FaqForm';

function Faq() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [renderOthers, setRenderOthers] = useState(false);
  const [faqAsk, setFaqAsk] = useState('');
  const data =
    [
      {
        ask: "O que é LDO?",
        reply: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi doloribus dolor sit libero et tempore aliquam atque asperiores itaque nulla dolorum dolorem vero iure, nam blanditiis ea ipsa non mollitia!"
      },
      {
        ask: "Sobre tal coisa",
        reply: "Lng elit. Compsa non mollitia!"
      },
      {
        ask: "O que é PPA?",
        reply: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi doloribus dolor sit libero et tempore aliquam atque asperiores itaque nulla dolorum dolorem vero iure, nam blanditiis ea ipsa non mollitia!"
      },
      {
        ask: "Sobre tal coisa",
        reply: "Lng elit. Commodi doloribus dolor sit libero et tempore aliquam atque asperiores itaque nulla dolorum dolorem vero iure, nam blanditiis ea ipsa non mollitia!"
      },
      {
        ask: "O que é LOA?",
        reply: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi doloribus dolor sit libero et tempore aliquam atque asperiores itaque nulla dolorum dolorem vero iure, nam blanditiis ea ipsa non mollitia!"
      },
      {
        ask: "Sobre tal coisa",
        reply: "Lng elit. Commodi doloribus dolor sit libero et tempore aliquam atque asperiores itaque nulla dolorum dolorem vero iure, nam blanditiis ea ipsa non mollitia!"
      },
      {
        ask: "O que é LDO?",
        reply: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi doloribus dolor sit libero et tempore aliquam atque asperiores itaque nulla dolorum dolorem vero iure, nam blanditiis ea ipsa non mollitia!"
      },
      {
        ask: "Sobre tal coisa",
        reply: "Lng elit. Commodi doloribus dolor sit libero et tempore aliquam atque asperiores itaque nulla dolorum dolorem vero iure, nam blanditiis ea ipsa non mollitia!"
      },
    ]

  useEffect(() => {
    setTimeout(() => {
      setBackgroundLoaded(true);
      const timeout = setTimeout(() => { setRenderOthers(true) }, 1000)
      return () => clearTimeout(timeout);
    }, 1000);
  }, []);

  const filteredData = data.filter((item) =>
    item.ask.toLowerCase().includes(faqAsk.toLowerCase())
  );

  return (
    <>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
      {
        backgroundLoaded && (
          <>
            <Header page='/faq' />
            <SideNavBar />
            {
              renderOthers && (
                <div className='faq-main fade-in'>
                  <div className='faq-image-container'>
                    <img className='faq-image' src={image} alt="capa da pagina" />
                  </div>
                  <div className='faq-search'>
                    <label htmlFor="faqAsk">O que você está procurando?</label>
                    <input
                      type="text"
                      id="faqAsk"
                      name="faqAsk"
                      placeholder="Procure aqui"
                      autoComplete="off"
                      value={faqAsk}
                      onChange={(e) => setFaqAsk(e.target.value)}
                      required
                    />
                  </div>
                  <span>Dica: use palavras chave</span>
                  <div className='ask-container'>
                    {

                      filteredData.map((elem, index) => (
                        <AskReply key={index} data={elem} />
                      ))
                    }
                    {
                      !filteredData[0] && (
                        <div className='faq-not-found'>
                          <h1>Não está encontrando o que procura?</h1>
                          <h1>Mande sua dúvida:</h1>
                          <FaqForm />
                        </div>
                      )
                    }
                  </div>
                </div>
              )
            }
          </>
        )
      }
    </>
  );
}

export default Faq;