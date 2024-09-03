import React from 'react';
import header_image from "../images/carta_compromisso.png";

function Home(props) {
  const proposalsData = [
    { title: "Investir no mínimo 85% dos recursos destinados à mobilidade nos modos ativos e coletivos de transporte, bem como na segurança no trânsito, os próximos 4 (quatro) anos." },
    { title: "Cumprir o estabelecido na Política de Mobilidade Urbana do Recife, lei municipal número 18.887/2021 , em seu artigo 34, que estabelece como velocidade máxima nas vias arteriais como 50km/h e ampliar a fiscalização desses limites nesses pontos e reestabelecer a fiscalização eletrônica 24h por dia no primeiro mês de 2025." },
    { title: "Implementar pelo menos 70 km de ciclovias nas 10 avenidas mais perigosas da cidade nos primeiros 2 anos de gestão, finalizar os demais 180 km e converter as ciclofaixas existentes em ciclovias até o fim de 2028." },
    { title: "Colocar em regime de urgência a elaboração dos cadernos técnicos, planos de metas e implementação da Política Municipal de Mobilidade Urbana e suas Políticas Setoriais para o primeiro trimestre de 2025, da forma como foram aprovadas na Câmara Municipal da Cidade do Recife." },
    { title: "Fazer ampliação e manutenção dos passeios públicos, bem como, dobrar as metas do Projeto Calçada Legal, de maneira progressiva ao longo do próximo mandato, priorizando a execução nas vias por onde passam o transporte coletivo." },
    { title: "Em todas as vias por onde passam pelo menos 40 ônibus por hora, em algum momento do dia, devem conter faixa exclusiva de ônibus até 2028." },
  ];

  return (
    <main>
      <div className='home-text-about'>
        <h1>O que temos aqui?</h1>
        <p>O Diagnóstico Orçamentário Municipal é uma iniciativa que visa integrar práticas de mobilidade sustentável nas políticas públicas por meio da análise do orçamento público. Com foco na promoção de sistemas de transporte eficientes e ecológicos, o plano busca incorporar diretrizes que fomentar a utilização de bicicletas e outros meios de transporte sustentável nas cidades.
          Além de estudar a alocação de recursos, o projeto propõe estratégias que envolvam a participação da sociedade civil e do poder público para a melhoria da mobilidade sustentável.
          Assim, o plano não apenas mapeia as necessidades atuais, mas também projeta um futuro mais sustentável e acessível, contribuindo para a melhoria da qualidade da vida urbana.</p>
        <a href="/observatorio">
          <button type="button">Observatório</button>
        </a>
      </div>
      <div className="home-proposals">
        <h1>Nossas Propostas</h1>
        <div className="proposals-card">
          {proposalsData.map((proposal, index) => (
            <h4 key={index}>
              <a href={`./propostas/${index}`}>{proposal.title}</a>
            </h4>
          ))}
        </div>
        <br />
        <a href='/propostas'>Todas as propostas</a>
      </div>
      <div className="home-last-news">
        <h1>Últimas Notícias</h1>
        <a href={`/noticias/0`} className='news-card'>
          <img src={header_image} alt="" />
          <div className='news-card-text'>
            <span>01/09/24</span>
            <div className='news-card-title'>
              <h1>Lançamento da Carta de Compromisso 2024</h1>
            </div>
            <p>No último sábado lançamos a Carta Compromisso 2024, e ainda estamos abertos a novas assinaturas. Se você deseja contribuir para a mobilidade sustentável, esperamos por você na Ameciclo.

              Sua participação é essencial!

              Atenciosamente,
              Equipe Ameciclo</p>
          </div>
        </a>
        <a href='/noticias'>Todas as notícias</a>
      </div>
    </main>
  );
}

export default Home;
