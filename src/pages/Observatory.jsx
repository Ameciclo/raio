import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';
import ActionCarousel from '../components/ActionsCarousel';
import LazyLoad from 'react-lazyload';
import { getActionsData } from '../services/request';

function Observatory() {
  const [renderOthers, setRenderOthers] = useState(false);
  const [actions, setActions] = useState([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderOthers(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await getActionsData();
      console.log(data)
      setActions(data);
    }

    return fetchData();
  }, []);

  return (
    <>
      <Header page='dev' />
      {
        renderOthers && (
          <>
            <SideNavBar />
            <div className='observatory-pg'>
              <div class="observatory-banner">
                <h1>OBSERVATÓRIO</h1>
              </div>
              <div className='observatory-area'>
                <div className="data-cards fade-in">
                  <div className="collaboration-card display-flex-center"><h3>Colaboração com o clima</h3>
                    <h1>R$ 125.987.654,23</h1></div>
                  <div className="degradation-card display-flex-center"><h3>Degradação do clima</h3>
                    <h1>R$ 125.987.654,23</h1></div>
                </div><br /><br />
                <div className="data-cards fade-in">
                  <div className="emissions-card display-flex-center"><h3>Valor por emissão de CO2</h3>
                    <h1>R$ 125.987.654,23</h1></div>
                </div><br /><br />
                <div className="data-cards fade-in">
                  <div className="budgeted-card display-flex-center"><h3>Valor Orçado</h3>
                    <h1>R$ 125.987.654,23</h1></div>
                  <div className="executed-card display-flex-center"><h3>Valor Executado</h3>
                    <h1>R$ 125.987.654,23</h1></div>
                </div><br />
                <br />
                <LazyLoad height={400} offset={0}>
                  <ActionCarousel actions={actions} />
                </LazyLoad>
              </div>
            </div>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default Observatory;