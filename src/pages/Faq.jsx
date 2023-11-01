import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import video from '../video/faq-bg.mp4';
import image from '../images/faq.png';
import AskReply from '../components/AskReply';
import FaqForm from '../components/FaqForm';
import Footer from '../components/Footer';
import { faqApi } from '../services/request';
import { useParams } from 'react-router-dom';

function Faq() {
  const [faqAsk, setFaqAsk] = useState('');
  const [dataFaqs, setDataFaqs] = useState([]);
  const { keyword } = useParams();
  console.log(keyword)
  useEffect(() => {
    async function fetchData() {
      const data = await faqApi();
      setDataFaqs(
        data
          .filter((faq) => faq.faq_tags
            .some((tag) => tag.title.toLowerCase().includes('loaclima')
            )
          )
      );
    }
    keyword && setFaqAsk(keyword)

    return fetchData();
  }, [keyword]);


  const filteredData = dataFaqs.filter((faq) =>
    faq.title.toLowerCase().includes(faqAsk.toLowerCase()) || faq.answer.toLowerCase().includes(faqAsk.toLowerCase())
  );

  return (
    <>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
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
            onChange={(e) => {
              setFaqAsk(e.target.value)
            }}
            required
          />
        </div>
        <div className='ask-container'>
          {

            filteredData.map((elem, index) => (
              <AskReply key={index} data={elem} keyword={faqAsk} />
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
  );
}

export default Faq;