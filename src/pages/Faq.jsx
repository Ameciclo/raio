import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import AskReply from '../components/AskReply';
import FaqForm from '../components/FaqForm';
import Footer from '../components/Footer';
import { faqApi } from '../services/request';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

function Faq() {
  const [faqAsk, setFaqAsk] = useState('');
  const [dataFaqs, setDataFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setLoading(false)
    }
    keyword && setFaqAsk(keyword)

    return fetchData();
  }, [keyword]);


  const filteredData = dataFaqs.filter((faq) =>
    faq.title.toLowerCase().includes(faqAsk.toLowerCase()) || faq.answer.toLowerCase().includes(faqAsk.toLowerCase())
  );

  return (
    <>
      <Header page='faq' />
      <div className='page-banner faq-banner'>
        <h1>O que você está procurando?</h1>
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
      {
        !loading ? (
          <div className='ask-container'>
            {
              filteredData.map((elem, index) => (
                <AskReply key={index} data={elem} keyword={faqAsk} />
              ))
            }
            {
              !filteredData[0] & !loading && (
                <div className='faq-not-found'>
                  <h1>Não está encontrando o que procura?</h1>
                  <h1>Mande sua dúvida:</h1>
                  <FaqForm />
                </div>
              )
            }
          </div>
        ) : (<Loading />)
      }
      <Footer />
    </>
  );
}

export default Faq;