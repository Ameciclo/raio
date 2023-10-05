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
  const [totalValueGoodActions, setTotalValueGoodActions] = useState(0)
  const [totalValueBadActions, setTotalValueBadActions] = useState(0)
  const [totalValueEmissions, setTotalValueEmissions] = useState(0)
  const [totalValueBudgeted, setTotalValueBudgeted] = useState(0)
  const [totalValueExecuted, setTotalValueExecuted] = useState(0)
  const [totalGoodActions, setTotalGoodActions] = useState([])
  const [totalBadActions, setTotalBadActions] = useState([])

  const goodActionsTags = [
    'MEIO AMBIENTE',
    'AMBIENTE',
    'AMBIENTAL',
    'SUSTENTABILIDADE',
    'CARBONO',
  ]

  const numParse = (numero) => numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderOthers(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    async function fetchActionsData() {
      const data = await getActionsData();
      setActions(data.filter((action) => {
        return true
        // return goodActionsTags.some((tag) => action.cd_nm_subfuncao.includes(tag))
        // return action.vlrdotatualizada < action.vlrtotalpago & action.vlrtotalpago > 100000000
      }));
    }

    return fetchActionsData();
  }, []);

  useEffect(() => {

    function sumValueBudgeted() {
      const total = actions.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueBudgeted(total);
    }

    function sumValueExecuted() {
      const total = actions.reduce((acc, action) => acc + action.vlrtotalpago, 0);
      setTotalValueExecuted(total);
    }

    function filterAndSetTotalGoodActions() {
      const filteredActions = actions.filter((action) =>
        goodActionsTags.some((tag) => action.cd_nm_acao.includes(tag))
      );
      setTotalGoodActions(filteredActions);
    }

    function filterAndSetTotalBadActions() {
      const filteredActions = actions.filter((action) =>
        goodActionsTags.every((tag) => !action.cd_nm_acao.includes(tag))
      );
      setTotalBadActions(filteredActions);
    }

    filterAndSetTotalGoodActions();
    filterAndSetTotalBadActions();
    sumValueExecuted()
    sumValueBudgeted();
    // console.log('todas acoes', actions)
  }, [actions]);

  useEffect(() => {
    function calculateTotalGoodActions() {
      const total = totalGoodActions.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueGoodActions(total);
    }

    function calculateTotalBadActions() {
      const total = totalBadActions.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueBadActions(total);
    }

    calculateTotalGoodActions();
    calculateTotalBadActions();
  }, [totalGoodActions, totalBadActions])


  function AnimatedNumber({ initialValue, finalValue, duration }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      const increment = (finalValue - initialValue) / (duration / 10); // Intervalo de atualização de 10ms

      const interval = setInterval(() => {
        setValue((prevValue) => {
          const newValue = prevValue + increment;
          return newValue >= finalValue ? finalValue : newValue;
        });
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }, [initialValue, finalValue, duration]);

    return `R$ ${numParse(value)}`;
  }

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
                <h1 className='observatory-titles'>Quanto é investindo em ações que contribuem pro clima em Pernambuco:</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center good-value">
                    <LazyLoad height={400} offset={0}>
                      <h3>Colaboração com o clima</h3>
                      <h1><AnimatedNumber initialValue={0} finalValue={totalValueGoodActions} duration={1000} /></h1>
                    </LazyLoad>
                  </div>
                  <div className="value-card display-flex-center bad-value">
                    <LazyLoad height={400} offset={0}>
                      <h3>Degradação do clima</h3>
                      <h1><AnimatedNumber initialValue={0} finalValue={totalValueBadActions} duration={4000} /></h1>
                    </LazyLoad>
                  </div>
                </div><br /><br />
                <h1 className='observatory-titles'>Quanto é gasto por emissão de CARBONO em nosso estado:</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center carbon-value">
                    <LazyLoad height={400} offset={0}>
                      <h3>Valor por emissão carbono</h3>
                      <h1><AnimatedNumber initialValue={0} finalValue={totalValueEmissions} duration={1000} /> / 1kg CO2</h1>
                    </LazyLoad>
                  </div>
                </div><br /><br />
                <h1 className='observatory-titles'>Qual valor total orçado e qual valor REAL executado em boas ações pro clima:</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center">
                    <LazyLoad height={400} offset={0}>
                      <h3>Valor Orçado</h3>
                      <h1><AnimatedNumber initialValue={0} finalValue={totalValueBudgeted} duration={1000} /></h1>
                    </LazyLoad>
                  </div>
                  <div className="value-card display-flex-center">
                    <LazyLoad height={400} offset={0}>
                      <h3>Valor Executado</h3>
                      <h1><AnimatedNumber initialValue={0} finalValue={totalValueExecuted} duration={1000} /></h1>
                    </LazyLoad>
                  </div>
                </div><br /><br /><br /><br />
                <LazyLoad height={400} offset={50}>
                  <ActionCarousel actions={totalGoodActions.slice(0, 15)} goodAction={true} />
                </LazyLoad>
                <LazyLoad height={400} offset={0}>
                  <ActionCarousel actions={totalBadActions.slice(0, 15)} />
                </LazyLoad>
                <br />
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