import axios from "axios";

async function homeContentAPI() {
  try {
    const response = await axios.get('https://cms.ameciclo.org/projects');
    const LOAClimaContent = response.data.find(function (project) {
      return project.name === 'LOAClima';
    });
    return LOAClimaContent;
  } catch (error) {
    console.log('Dados 2020 Rodando em modo estático!');
  }
}

async function newsApi() {
  try {
    const response = await axios.get('https://test.cms.ameciclo.org/api/posts?populate=*');
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log('Dados 2020 Rodando em modo estático!')
    window.location.reload()
    return [];
  }
};

async function singleNewsApi(id) {
  try {
    const response = await axios.get(`https://test.cms.ameciclo.org/api/posts/${id}?populate=*`);
    const { data } = response.data;
    return data;
  } catch (error) {
    window.location.reload()
    return [];
  }
};

async function faqApi() {
  try {
    const response = await axios.get('https://cms.ameciclo.org/faqs');
    return response.data;
  } catch (error) {
    console.log('Dados 2020 Rodando em modo estático!')
    alert(`
    Erro em pegar os dados de dúvidas frequentes: ${error}
    Recarregue a página!
    Se esse erro persistir entre em contato!
    `);
    return [];
  }
};

async function getObservatoryData() {
  try {
    const request = await axios.get('https://test.cms.ameciclo.org/api/loaclima/observatory');
    if (request.status === 200) {
      return request.data;
    } else {
      return { status: request.status, error: 'Request failed with status code ' + request.status };
    }
  } catch (error) {
    throw new Error(error);
  }
};

export {
  newsApi,
  singleNewsApi,
  faqApi,
  homeContentAPI,
  getObservatoryData
};