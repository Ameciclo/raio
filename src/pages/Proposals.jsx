import React from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';
import ProposalsCard from '../components/ProposalsCard';

function Proposals() {
  const dataProposals = [
    { id: 1, title: 'Plano Diretor Cicloviário da Região Metropolitana do Recife implementado nos próximos 4 anos!!', text: 'Implementar, nos próximos 4 anos, o Plano Diretor Cicloviário da Região Metropolitana do Recife. Lançado em 2014, foi construído pelo Governo do Estado, em parceria com as prefeituras e conta com o apoio da sociedade civil. É uma forma de diminuir mortes no trânsito, custos nos hospitais, os engarrafamentos e os efeitos das mudanças climáticas. São 600km de ciclovias, das quais apenas 100km foram implementada, e 20 mil vagas bicicletários, um investimento de R$700 mi a valores de hoje.' },
    { id: 2, title: 'Destinar pelomenos 85% dos recursos de mobildiade para caminhar, pedalar e pegar busão!', text: 'Pessoas que caminham, pedalam e usam o transporte coletivo (a mobilidade sustentável) correspondem a cerca de 85% dos deslocamentos para o trabalho e escola, conforme pesquisa da Origem e Destino da RMR. Historicamente, a maior parte dos recursos são destinados à obras para carro e moto, que causam mortes e poluição. A mobilidade sustentável é 85% do trânsito, queremos NO MÍNIMO 85% dos recursos de mobilidade para calçadas, ciclovias, faixas exclusivas, segurança viária e redução das tarifas!' },
  ]

  return (
    <>
      <Header page='propostas' />
      <SideNavBar />
      <div class="page-banner proposals-banner">
        <h1>PROPOSTAS</h1>
      </div>
      <div className='page-area'>
        <h1>Todas as Propostas</h1>
        <br />
        {
          dataProposals.map(
            (proposal) => <ProposalsCard data={proposal} />
          )
        }
      </div>
      <Footer />
    </>
  );
}

export default Proposals;