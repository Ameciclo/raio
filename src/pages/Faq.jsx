import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import video from '../video/faq-bg.mp4';
import image from '../images/faq.png';
import AskReply from '../components/AskReply';
import FaqForm from '../components/FaqForm';
import Footer from '../components/Footer';

function Faq() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [faqAsk, setFaqAsk] = useState('');
  const data =
    [
      {
        ask: "O que é LDO, PPA e LOA?",
        reply: "A LDO (Lei de Diretrizes Orçamentárias), o PPA (Plano Plurianual) e a LOA (Lei Orçamentária Anual) são instrumentos importantes no processo de elaboração e execução do orçamento público em um país. Embora tenham objetivos distintos, eles estão interligados e compõem etapas do planejamento financeiro governamental."
      },
      {
        ask: "O que é LDO (Lei de Diretrizes Orçamentárias)?",
        reply: "A LDO estabelece as diretrizes, metas e prioridades para a elaboração do orçamento público. Ela define os princípios e as regras gerais que devem ser seguidos na formulação do orçamento anual, como as metas fiscais, as diretrizes para a gestão de pessoal, as disposições sobre alterações tributárias e os critérios para transferências de recursos. A LDO tem uma abrangência de médio prazo e orienta a elaboração do PPA e da LOA"
      },
      {
        ask: "O que é PPA (Plano Plurianual)?",
        reply: "O PPA é um plano de médio prazo que estabelece as diretrizes, objetivos e metas do governo para um período de quatro anos. Ele define as ações e os investimentos prioritários que serão realizados em diferentes áreas, como saúde, educação, infraestrutura, entre outras. O PPA visa garantir a continuidade das políticas públicas ao longo de um mandato governamental e serve como base para a elaboração da LOA."
      },
      {
        ask: "O que é LOA (Lei Orçamentária Anual)?",
        reply: "A LOA é uma lei que estabelece o orçamento público para um exercício financeiro específico, geralmente de um ano. Ela detalha as receitas estimadas e as despesas previstas do governo, indicando a alocação dos recursos para os diversos setores e programas governamentais. A LOA é elaborada com base nas diretrizes estabelecidas na LDO e considerando as metas e prioridades definidas no PPA."
      },
    ]

  useEffect(() => {
    const  timeout = setTimeout(() => {
      setBackgroundLoaded(true);
    }, 1000);
  }, []);

  const filteredData = data.filter((item) =>
    item.ask.toLowerCase().includes(faqAsk.toLowerCase()) || item.reply.toLowerCase().includes(faqAsk.toLowerCase())
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
            <Header page='faq' />
            <SideNavBar />

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
                  placeholder="Palavra chave"
                  autoComplete="off"
                  value={faqAsk}
                  onChange={(e) => setFaqAsk(e.target.value)}
                  required
                />
              </div>
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

            <Footer />
          </>
        )
      }
    </>
  );
}

export default Faq;