import axios from "axios";

async function homeContentAPI() {
  try {
    const response = await axios.get('https://cms.ameciclo.org/projects');
    const LOAClimaContent = response.data.find(function (project) {
      return project.name === 'LOAClima';
    });
    return LOAClimaContent;
  } catch (error) {
    console.log(error);
  }
}

async function newsApi() {
  try {
    const response = await axios.get('https://test.cms.ameciclo.org/api/posts?populate=*');
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error)
    alert(`
    Erro em pegar os dados de notícias: ${error}
    Recarregue a página!
    Se esse erro persistir entre em contato!
    `);
    return [];
  }
};

async function singleNewsApi(id) {
  try {
    const response = await axios.get(`https://test.cms.ameciclo.org/api/posts/${id}?populate=*`);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error)
    alert(`
    Erro em pegar os dados da notícia: ${error}
    Recarregue a página!
    Se esse erro persistir entre em contato!
    `);
    return [];
  }
};

async function faqApi() {
  try {
    const response = await axios.get('https://cms.ameciclo.org/faqs');
    return response.data;
  } catch (error) {
    console.log(error)
    alert(`
    Erro em pegar os dados de dúvidas frequentes: ${error}
    Recarregue a página!
    Se esse erro persistir entre em contato!
    `);
    return [];
  }
};

async function getActionsData() {
  try {
    const response = await axios.get('https://dados.pe.gov.br/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/0a2e8fd7-7a65-46df-bd1b-15f2dfaaded7/download/acoes_e_programas_json_2021_20211231.json');
    console.log(response)
    return response.campos;
  } catch (error) {
    console.log(error)
    alert(`
    Erro em pegar os dados abertos de Pernambuco: ${error}
    Recarregue a página!
    Se esse erro persistir entre em contato!
    `);
    return [];
  }
};

export {
  newsApi,
  singleNewsApi,
  faqApi,
  homeContentAPI,
  getActionsData,
};