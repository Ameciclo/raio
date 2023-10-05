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
    window.location.reload()
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
    const response = await axios.get('https://loaclima.ameciclo.org:8010/proxy/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/bd2f90f2-3cc1-4b46-ab8d-9b15a1b0d453/download/acoes_e_programas_json_2023_20231004.json');
    return response.data.campos;
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