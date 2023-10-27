# LOAClima

O LOA Clima é um projeto de Incidência Política nas Leis Orçamentárias do Governo do Estado de Pernambuco.

## Visão Geral

O projeto abarca a análise da aplicação de recursos do último Plano Plurianual do Governo do Estado de Pernambuco, bem como a proposição de um arcabouço orçamentário que promova justiça climática. Serão realizadas atividades de formação e alinhamento de propostas com a sociedade civil organizada, de articulação com secretarias estaduais para proposição de itens orçamentários e de articulação com a Assembleia Legislativa Estadual para a proposição de emendas.

## Instalação
⚠️ O projeto utiliza Node.js versão 16.

1. Clone o repositório do projeto para o seu ambiente local:

```bash
git clone https://github.com/Ameciclo/raio.git
```

2. Navegue até o diretório do projeto:

```bash
cd raio
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. inicie o projeto localmente:

```bash
npm start
```

## Backend do Projeto
O projeto utiliza o backend do [repositório quadro](https://github.com/Ameciclo/quadro). Abaixo estão listados os endpoints correspondentes:

<sub>🔸pré-existente 🔹criado neste projeto </sub>

- **Página inicial**:

  🔸 [cms.ameciclo.org/api/projects?name=LOAClima](http://cms.ameciclo.org/api/projects?name=LOAClima)
- **Parceiros**:

  🔸 [cms.ameciclo.org/api/projects?name=LOAClima](http://cms.ameciclo.org/api/projects?name=LOAClima)
- **Propostas**: 

  🔹 [test.cms.ameciclo.org/api/proposals](http://test.cms.ameciclo.org/api/proposals)
- **Notícias**:

  🔹 [test.cms.ameciclo.org/api/post](http://test.cms.ameciclo.org/api/post)
- **Observatório**:
  - **Dados do observatório**:
  
    🔹 [test.cms.ameciclo.org/api/loaclima/observatory](http://test.cms.ameciclo.org/api/loaclima/observatory)
  - **API que fornece o código das ações e programas para a API de dados do observatório**:

    🔹 [test.cms.ameciclo.org/api/loaclimaobservatoryupdatedatas](http://test.cms.ameciclo.org/api/loaclimaobservatoryupdatedatas)

## Tecnologias
- **React (17.0.2)**: Biblioteca JavaScript para criar interfaces de usuário.
- **React DOM (17.0.2)**: Responsável pela manipulação do DOM em aplicativos React.
- **React Router DOM (^6.11.2)**: Para roteamento e navegação em aplicativos React.
- **React Scripts (4.0.3)**: Conjunto de scripts para criar, testar e executar aplicativos React.
- **Axios (^0.24.0)**: Biblioteca para fazer requisições HTTP.
- **Mailgun JS (^0.22.0)**: Biblioteca para interagir com o serviço de envio de e-mails do Mailgun.
- **React Google Charts (^4.0.1)**: Para renderizar gráficos do Google Charts em aplicativos React.
- **React Lazyload (^3.2.0)**: Usado para carregar imagens de forma preguiçosa (lazy loading).
- **Testing Library Jest Dom (5.15.0)**: Utilizado para testar componentes React no ambiente de teste Jest.
- **Testing Library React (11.2.7)**: Biblioteca de testes para facilitar a escrita de testes para componentes React.
- **Testing Library User Event (12.8.3)**: Biblioteca para simular eventos de usuário em testes de componentes React.
- **ESLint Config Trybe Frontend (1.2.1)**: Configuração de ESLint específica para projetos Trybe Frontend.
- **Web Vitals (1.1.2)**: Biblioteca para medir métricas de desempenho na web.

Além disso, você tem dependências de desenvolvimento:

- **ESLint Plugin SonarJS (0.10.0)**: Plugin ESLint para regras específicas do SonarJS.
- **Jest (26.6.0)**: Framework de teste JavaScript.
- **Stylelint (13.8.0)**: Linter para folhas de estilo (CSS, SCSS, etc.).
- **Stylelint Order (4.1.0)**: Plugin Stylelint para ordenar propriedades CSS.
