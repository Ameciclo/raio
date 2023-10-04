import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';
import ActionCarousel from '../components/ActionsCarousel';
import LazyLoad from 'react-lazyload';

function Observatory() {
  const [renderOthers, setRenderOthers] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderOthers(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const actions = [
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0095 - ATUAÇÃO PARLAMENTAR",
      "vlrdotatualizada": 0.00,
      "vlrtotalpago": 47310.95,
      "cd_nm_acao": "3539 - PAGAMENTO DE VERBA INDENIZATÓRIA AOS DEPUTADOS",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 0.00,
      "vlrliquidado": 0.00,
      "cd_nm_subfuncao": "031 - AÇÃO LEGISLATIVA"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0937 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DA ASSEMBLÉIA LEGISLATIVA DO ESTADO DE PERNAMBUCO - ALEPE",
      "vlrdotatualizada": 22422900.00,
      "vlrtotalpago": 21282702.54,
      "cd_nm_acao": "2521 - PAGAMENTO DE VERBA INDENIZATÓRIA AOS SERVIDORES DA ASSEMBLEIA LEGISLATIVA DO ESTADO DE PERNAMBUCO  - ALEPE",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 21462000.00,
      "vlrliquidado": 21282702.54,
      "cd_nm_subfuncao": "031 - AÇÃO LEGISLATIVA"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0256 - CONTROLE EXTERNO DA ADMINISTRAÇÃO PÚBLICA ESTADUAL E MUNICIPAL",
      "vlrdotatualizada": 278575800.00,
      "vlrtotalpago": 275409042.54,
      "cd_nm_acao": "1111 - CONTROLE EXTERNO DA APLICAÇÃO DOS RECURSOS PÚBLICOS DO ESTADO E DOS MUNICÍPIOS DE PERNAMBUCO",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 278122773.33,
      "vlrliquidado": 275272496.08,
      "cd_nm_subfuncao": "032 - CONTROLE EXTERNO"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0248 - CAPACITAÇÃO PARA O APRIMORAMENTO DA ADMINISTRAÇÃO PÚBLICA",
      "vlrdotatualizada": 10000.00,
      "vlrtotalpago": 0.00,
      "cd_nm_acao": "3685 - CONSERVAÇÃO DO PATRIMÔNIO PÚBLICO NA ESCOLA DE CONTAS PÚBLICAS PROFESSOR BARRETO GUIMARÃES",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 0.00,
      "vlrliquidado": 0.00,
      "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0937 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DA ASSEMBLÉIA LEGISLATIVA DO ESTADO DE PERNAMBUCO - ALEPE",
      "vlrdotatualizada": 6020000.00,
      "vlrtotalpago": 0.00,
      "cd_nm_acao": "3426 - IMPLEMENTAÇÃO DE POLÍTICA DE CONTENÇÃO DE DESPESAS E RESPONSABILIDADE AMBIENTAL",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 0.00,
      "vlrliquidado": 0.00,
      "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0937 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DA ASSEMBLÉIA LEGISLATIVA DO ESTADO DE PERNAMBUCO - ALEPE",
      "vlrdotatualizada": 32820700.00,
      "vlrtotalpago": 546200.33,
      "cd_nm_acao": "4012 - ADEQUAÇÃO DAS INSTALAÇÕES FÍSICAS DA ASSEMBLEIA LEGISLATIVA DO ESTADO DE PERNAMBUCO - ALEPE",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 533662.54,
      "vlrliquidado": 424168.36,
      "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0937 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DA ASSEMBLÉIA LEGISLATIVA DO ESTADO DE PERNAMBUCO - ALEPE",
      "vlrdotatualizada": 504220700.00,
      "vlrtotalpago": 427291665.32,
      "cd_nm_acao": "4353 - GESTÃO DAS ATIVIDADES DA ASSEMBLEIA LEGISLATIVA DO ESTADO DE PERNAMBUCO - ALEPE",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 469075574.08,
      "vlrliquidado": 428951267.10,
      "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0991 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "vlrdotatualizada": 8759300.00,
      "vlrtotalpago": 1704995.15,
      "cd_nm_acao": "4034 - CONSERVAÇÃO PATRIMONIAL DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 2697757.12,
      "vlrliquidado": 1504392.70,
      "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0991 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "vlrdotatualizada": 77926712.06,
      "vlrtotalpago": 72848911.78,
      "cd_nm_acao": "4411 - GESTÃO DAS ATIVIDADES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO  - TCE-PE",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 76099382.76,
      "vlrliquidado": 70861095.84,
      "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0991 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "vlrdotatualizada": 8571800.00,
      "vlrtotalpago": 7684804.98,
      "cd_nm_acao": "4411 - GESTÃO DAS ATIVIDADES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO  - TCE-PE",
      "cd_nm_subacao": "1980 - CAPACITAÇÃO E VALORIZAÇÃO DE GESTORES E SERVIDORES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "vlrempenhado": 7939225.21,
      "vlrliquidado": 7719375.12,
      "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0991 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "vlrdotatualizada": 800600.00,
      "vlrtotalpago": 707061.02,
      "cd_nm_acao": "4411 - GESTÃO DAS ATIVIDADES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO  - TCE-PE",
      "cd_nm_subacao": "1981 - ESTABELECIMENTO DE PARCERIAS PARA REALIZAÇÃO DE PESQUISAS E ASSISTÊNCIA TÉCNICA",
      "vlrempenhado": 707061.02,
      "vlrliquidado": 707061.02,
      "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0937 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DA ASSEMBLÉIA LEGISLATIVA DO ESTADO DE PERNAMBUCO - ALEPE",
      "vlrdotatualizada": 15483700.00,
      "vlrtotalpago": 3467350.20,
      "cd_nm_acao": "4249 - MANUTENÇÃO DA TECNOLOGIA DE INFORMAÇÃO E COMUNICAÇÃO DA ALEPE",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 4225838.20,
      "vlrliquidado": 3493750.20,
      "cd_nm_subfuncao": "126 - TECNOLOGIA DA INFORMAÇÃO"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0991 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "vlrdotatualizada": 30409200.00,
      "vlrtotalpago": 26094873.08,
      "cd_nm_acao": "2799 - MANUTENÇÃO DA TECNOLOGIA DE INFORMAÇÃO E COMUNICAÇÃO DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 28060975.93,
      "vlrliquidado": 24979161.87,
      "cd_nm_subfuncao": "126 - TECNOLOGIA DA INFORMAÇÃO"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0991 - APOIO GERENCIAL E TECNOLÓGICO ÀS AÇÕES DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "vlrdotatualizada": 507200.00,
      "vlrtotalpago": 330608.13,
      "cd_nm_acao": "2799 - MANUTENÇÃO DA TECNOLOGIA DE INFORMAÇÃO E COMUNICAÇÃO DO TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "cd_nm_subacao": "0185 - MANUTENÇÃO DA REDE DIGITAL CORPORATIVA DE GOVERNO - TRIBUNAL DE CONTAS DO ESTADO DE PERNAMBUCO - TCE-PE",
      "vlrempenhado": 440278.75,
      "vlrliquidado": 302882.37,
      "cd_nm_subfuncao": "126 - TECNOLOGIA DA INFORMAÇÃO"
    },
    {
      "cd_nm_funcao": "01 - LEGISLATIVA",
      "cd_nm_prog": "0050 - EDUCAÇÃO PARA CIDADANIA NA ESCOLA DO LEGISLATIVO",
      "vlrdotatualizada": 2717600.00,
      "vlrtotalpago": 833152.98,
      "cd_nm_acao": "0891 - REALIZAÇÃO DE CAPACITAÇÕES PARA GESTORES, SERVIDORES PÚBLICOS E CIDADÃOS",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 885248.99,
      "vlrliquidado": 833152.98,
      "cd_nm_subfuncao": "128 - FORMAÇÃO DE RECURSOS HUMANOS"
    },
  ];

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