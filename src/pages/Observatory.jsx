import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';
import ActionCarousel from '../components/ActionsCarousel';
import { getObservatoryData } from '../services/request';
import LazyLoad from 'react-lazyload';
import Chart from 'react-google-charts';
import Loading from '../components/Loading';

function Observatory() {
  const [loading, setLoading] = useState(false);
  const [observatoryData, setObservatoryData] = useState([
    {
      "year": 2023,
      "allActionsTotalValueBudgeted": 0,
      "goodActionsTotalValueBudgeted": 0,
      "badActionsTotalValueBudgeted": 0,
      "goodActionsTotalValueExecuted": 0,
      "badActionsTotalValueExecuted": 0,
      "totalValueEmissions": 0,
    },
    {
      "year": 2022,
      "allActionsTotalValueBudgeted": 0,
      "goodActionsTotalValueBudgeted": 0,
      "badActionsTotalValueBudgeted": 0,
      "goodActionsTotalValueExecuted": 0,
      "badActionsTotalValueExecuted": 0,
      "totalValueEmissions": 0
    },
    {
      "year": 2021,
      "allActionsTotalValueBudgeted": 0,
      "goodActionsTotalValueBudgeted": 0,
      "badActionsTotalValueBudgeted": 0,
      "goodActionsTotalValueExecuted": 0,
      "badActionsTotalValueExecuted": 0,
      "totalValueEmissions": 0
    },
    {
      "year": 2020,
      "allActionsTotalValueBudgeted": 0,
      "goodActionsTotalValueBudgeted": 0,
      "badActionsTotalValueBudgeted": 0,
      "goodActionsTotalValueExecuted": 0,
      "badActionsTotalValueExecuted": 0,
      "totalValueEmissions": 0
    }
  ]);

  async function requestObservatoryData() {
    const data = await getObservatoryData()
    setObservatoryData(data)
  }

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      requestObservatoryData()
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  function AnimatedNumber({ initialValue, finalValue, duration }) {
    const [value, setValue] = useState(initialValue);

    const numParse = (numero) => numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    useEffect(() => {
      const increment = (finalValue - initialValue) / (duration / 10);

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

    return `${numParse(value)}`;
  }

  return (
    <>
      <Header page='dev' />
      <SideNavBar />
      <div className='observatory-pg'>
        <div className="observatory-banner">
          <h1>OBSERVATÓRIO</h1>
        </div>
        <div className='observatory-area'>
          {
            loading ? <Loading /> : (
              <>
                <h1 className='observatory-titles'>Quanto é investindo em ações que contribuem para o clima em Pernambuco</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center good-value">
                    <LazyLoad height={400} offset={0}>
                      <h1><AnimatedNumber initialValue={0} finalValue={(observatoryData[0].goodActionsTotalValueBudgeted / 1000000000).toFixed(1)} duration={500} /> Bi</h1>
                      <h3>Colaboração com o clima</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={
                        observatoryData[0].goodActionsTotalValueBudgeted} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                  <div className="value-card display-flex-center bad-value">
                    <LazyLoad height={400} offset={500}>
                      <h1><AnimatedNumber initialValue={0} finalValue={
                        (observatoryData[0].allActionsTotalValueBudgeted / 1000000000).toFixed(1)} duration={2000} /> Bi</h1>
                      <h3>Total investido em todas as ações</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={
                        observatoryData[0].allActionsTotalValueBudgeted} duration={2500} /></h3>
                    </LazyLoad>
                  </div>
                </div><br /><br />
                <h1 className='observatory-titles'>Quanto é gasto por emissão de CARBONO em nosso Estado</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center carbon-value">
                    <LazyLoad height={400} offset={0}>
                      <h1>R$ <AnimatedNumber initialValue={0} finalValue={((observatoryData[0].totalValueEmissions / 1000).toFixed(0))} duration={700} /> Mil / CO2e</h1>
                      <h3>Valor por emissão de carbono</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={(observatoryData[0].totalValueEmissions)} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                </div><br /><br />
                <h1 className='observatory-titles'>Qual valor total orçado e qual valor REAL executado em boas ações para o clima</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center">
                    <LazyLoad height={400} offset={0}>
                      <h1><AnimatedNumber initialValue={0} finalValue={(observatoryData[0].goodActionsTotalValueBudgeted / 1000000).toFixed(1)} duration={500} /> Mi</h1>
                      <h3>Valor Orçado</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={observatoryData[0].goodActionsTotalValueBudgeted} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                  <div className="value-card display-flex-center">
                    <LazyLoad height={400} offset={0}>
                      <h1><AnimatedNumber initialValue={0} finalValue={(observatoryData[0].goodActionsTotalValueExecuted / 1000000).toFixed(1)} duration={500} /> Mi</h1>
                      <h3>Valor Executado</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={observatoryData[0].goodActionsTotalValueExecuted} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                </div><br /><br /><br /><br />
                <h1 className='observatory-titles'>Valor orçado e executado em ações colaboradoras durante os anos</h1><br />
                <Chart
                  chartType="Bar"
                  data={
                    [
                      ["Ano", "Orçado (R$)", 'Executado (R$)'],
                      ['2020', observatoryData[3].goodActionsTotalValueBudgeted, observatoryData[3].goodActionsTotalValueExecuted],
                      ['2021', observatoryData[2].goodActionsTotalValueBudgeted, observatoryData[2].goodActionsTotalValueExecuted],
                      ['2022', observatoryData[1].goodActionsTotalValueBudgeted, observatoryData[1].goodActionsTotalValueExecuted],
                      ['2023', observatoryData[0].goodActionsTotalValueBudgeted, observatoryData[0].goodActionsTotalValueExecuted],
                    ]
                  }
                  width="100%"
                  height="400px"
                  options={{
                    chart: {
                      subtitle: "2020-2023",
                    },
                  }}
                  legendToggle
                /><br /><br /><br /><br />

                <h1 className='observatory-titles'>Valor total orçado para todas as ações durante os anos</h1><br />
                <Chart
                  chartType="Bar"
                  data={
                    [
                      ["Ano", "Total (R$)"],
                      ['2020', observatoryData[3].allActionsTotalValueBudgeted],
                      ['2021', observatoryData[2].allActionsTotalValueBudgeted],
                      ['2022', observatoryData[1].allActionsTotalValueBudgeted],
                      ['2023', observatoryData[0].allActionsTotalValueBudgeted],
                    ]
                  }
                  width="100%"
                  height="400px"
                  options={{
                    chart: {
                      subtitle: "2020-2023",
                    },
                  }}
                  legendToggle
                /><br /><br /><br /><br />

                <h1 className="observatory-titles">Ações COLABORATIVAS</h1>
                <LazyLoad height={400} offset={0}>
                  <ActionCarousel actions={observatoryData[0].goodActions} actionType='good-action' />
                </LazyLoad>
                <h1 className="observatory-titles">Ações DEGRADANTES</h1>
                <LazyLoad height={400} offset={0}>
                  <ActionCarousel
                    actionType='bad-action'
                    actions={observatoryData[0].badActions}
                  />
                </LazyLoad>
                <br />
                <nav className='observatory-docs'>
                  <div>
                    <h1>Documentos Orçamentários</h1><br />
                    <a href="https://dados.pe.gov.br/dataset/acoes-e-programas" target="_blank" rel="noopener noreferrer">Ações e programas - Portal de Dados Abertos de Pernambuco</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/despesas-gerais" target="_blank" rel="noopener noreferrer">Despesas gerais - Portal de Dados Abertos de Pernambuco</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/all-pagamentos" target="_blank" rel="noopener noreferrer">Pagamentos - Portal de Dados Abertos de Pernambuco</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/todas-despesas-detalhadas" target="_blank" rel="noopener noreferrer">Despesas detalhadas - Portal de Dados Abertos de Pernambuco</a><br /><br />
                  </div>
                  <div>
                    <h1>Documentos Climáticos</h1><br />
                    <a href="https://semas.pe.gov.br/wp-content/uploads/2022/03/2022_03_16_GIZ_plano_descarbonizacao_pernambuco-v6_reduzido.pdf">Plano de descarbonização de Pernambuco</a><br /><br />
                    <a href="https://www.gov.br/mma/pt-br/assuntos/climaozoniodesertificacao/clima/diretrizes-para-uma-estrategia-nacional-para-neutralidade-climatica_.pdf">Diretrizes para uma estratégia nacional para neutralidade climática</a><br /><br />
                    <a href="https://semas.pe.gov.br/grafico-inventario-gee/">Gráfico Dinâmico – Inventário de Gases de Efeito Estufa de Pernambuco</a><br /><br />
                  </div>
                  <div>
                    <h1>Baixe os Dados</h1><br />
                    <a href="https://dados.pe.gov.br/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/bd2f90f2-3cc1-4b46-ab8d-9b15a1b0d453/download/acoes_e_programas_json_2023_20231010.json">Ações e Programas - 10/10/2023</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/55784447-97e8-4fb0-b062-99c368bf6384/download/acoes_e_programas_json_2022_20221231.json">Ações e Programas - 2022</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/0a2e8fd7-7a65-46df-bd1b-15f2dfaaded7/download/acoes_e_programas_json_2021_20211231.json">Ações e Programas - 2021</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/5e5e1107-e1ed-4c2c-b258-e19a013f6caa/download/acoes_e_programas_json_2020_20201231.json">Ações e Programas - 2020</a><br /><br />
                  </div>
                  <div>
                    <h1>Outros Documentos</h1><br />
                    <a href="Projeto - 2023 - LOA CLIMA - Incidência política na legislação orçamentária do Estado de Pernambuco - Google Drive">Projeto - 2023 - LOA CLIMA - Incidência política na legislação orçamentária do Estado de Pernambuco - Google Drive</a><br /><br />
                  </div>
                </nav>
                <span id='att'>{`DADOS ATUALIZADOS DE ${(new Date()).getDate()}/${(new Date()).getDate()}/${(new Date()).getDate()}`}</span>
              </>
            )
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Observatory;