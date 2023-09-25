import React from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';


function News() {
  const dataNews = [
    {
      id: 1,
      date: "2023-09-18",
      title: "Pernambuco Investe em Energia Solar",
      subtitle: "Expansão da energia solar no estado reduz emissões de carbono",
      img: "https://d3csixunm0sjcw.cloudfront.net/wp-content/uploads/2021/03/02115252/vantagens-e-desvantagens-energia-solar-fotovoltaica.jpg",
      alt: "Usinas de energia solar",
      text: "Pernambuco está investindo fortemente em energia solar para reduzir sua pegada de carbono. Nos últimos anos, várias usinas de energia solar foram construídas em todo o estado, gerando eletricidade limpa e sustentável para milhares de residências e empresas."
    },
    {
      id: 2,
      date: "2023-09-19",
      title: "Desafios da Agricultura Sustentável",
      subtitle: "Agricultores enfrentam desafios para adotar práticas sustentáveis",
      img: "https://opresenterural.com.br/wp-content/uploads/2022/06/agricultura-familiar.jpeg",
      alt: "Agricultura sustentável",
      text: "A agricultura sustentável é fundamental para a preservação do meio ambiente em Pernambuco. No entanto, os agricultores enfrentam desafios, como a gestão eficiente da água e a transição para métodos de cultivo mais ecológicos. O governo local está trabalhando em parceria com organizações para apoiar essas mudanças."
    },
    {
      id: 3,
      date: "2023-09-20",
      title: "Impacto das Mudanças Climáticas no Litoral",
      subtitle: "Erosão costeira e aumento do nível do mar ameaçam comunidades costeiras",
      img: "https://t.ctcdn.com.br/W38cDRvRFTuQY684ZIj4umn6rWE=/640x360/smart/i469492.jpeg",
      alt: "Mudanças climáticas",
      text: "O litoral de Pernambuco está enfrentando os impactos das mudanças climáticas. A erosão costeira e o aumento do nível do mar estão ameaçando comunidades costeiras e infraestrutura. As autoridades estão buscando soluções para proteger a costa e suas populações."
    },
    {
      id: 4,
      date: "2023-09-21",
      title: "Transporte Sustentável em Recife Minimiza Problemas Climáticos",
      subtitle: "Expansão de ciclovias e transporte público sustentável",
      img: "https://www.sepac.com.br/blog/wp-content/uploads/2018/10/Meio-de-transporte-sustenta%CC%81vel.jpg",
      alt: "Ciclovias em Recife",
      text: "Recife está investindo em transporte sustentável para reduzir a poluição do ar e o congestionamento. A cidade está expandindo suas ciclovias e promovendo o uso do transporte público e veículos elétricos. Essas iniciativas visam melhorar a qualidade de vida e a sustentabilidade urbana."
    },
    {
      id: 5,
      date: "2023-09-22",
      title: "Proteção da Biodiversidade em Pernambuco",
      subtitle: "Conservação de habitats naturais e espécies ameaçadas",
      img: "https://www2.cprh.pe.gov.br/wp-content/uploads/2022/01/Design-sem-nome-1.png",
      alt: "Biodiversidade em Pernambuco",
      text: "Pernambuco abriga uma rica biodiversidade, mas muitas espécies estão ameaçadas de extinção devido à perda de habitat. O estado está intensificando os esforços de conservação, estabelecendo áreas protegidas e promovendo a educação ambiental para preservar sua riqueza natural."
    }
  ];

  const orderNews = dataNews.slice().sort((a, b) => b.id - a.id);
  
  return (
    <>
      <Header page='noticias' />
      <SideNavBar />
      <div className='news-pg'>
        <div class="news-banner">
          <h1>NOTÍCIAS</h1>
        </div>
        <div className='news-area'>
          {
            orderNews.map(
              (singleNews) => <NewsCard data={singleNews} />
            )
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;