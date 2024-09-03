import React, { useEffect, useState } from 'react';
import AskReply from '../components/AskReply';
import FaqForm from '../components/FaqForm';
import { faqApi } from '../services/request';
import { useParams } from 'react-router-dom';

function Faq() {
  const [faqAsk, setFaqAsk] = useState('');
  const [dataFaqs, setDataFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  const { keyword } = useParams();
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
    setLoading(false)
    
    return fetchData();
  }, [keyword]);


  const filteredData = dataFaqs.filter((faq) =>
    faq.title.toLowerCase().includes(faqAsk.toLowerCase()) || faq.answer.toLowerCase().includes(faqAsk.toLowerCase())
  );

  return (
    <div className='faq-main fade-in'>
      {loading && <h1>Carregando...</h1>}
      {!loading && (<><div className='faq-search'>
        <br />
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
        </div></>)}
    </div>
  );
}

export default Faq;