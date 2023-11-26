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
    let response = await axios.get('https://test.cms.ameciclo.org/api/posts?populate=*');
    while (response.status === 403) {
      response = await axios.get('https://test.cms.ameciclo.org/api/posts?populate=*')
    }
    const { data } = response.data;
    return data;
  } catch (error) {
    return [];
  }
};

async function singleNewsApi(id) {
  try {
    let response = await axios.get(`https://test.cms.ameciclo.org/api/posts/${id}?populate=*`);
    while (response.status === 403) {
      response = await axios.get(`https://test.cms.ameciclo.org/api/posts/${id}?populate=*`)
    }
    const data = response.data.data;
    return data;
  } catch (error) {
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

async function getActionsData2020() {
  try {
    const response = await axios.get('https://loaclima.ameciclo.org:8010/proxy/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/5e5e1107-e1ed-4c2c-b258-e19a013f6caa/download/acoes_e_programas_json_2020_20201231.json');
    return response.data.campos;
  } catch (error) {
    console.log('Dados 2020 Rodando em modo estático!')
    // alert(`
    // Erro em pegar os dados abertos de Pernambuco: ${error}
    // Recarregue a página!
    // Se esse erro persistir entre em contato!
    // `);
    return [];
  }
};

async function getActionsData2021() {
  try {
    const response = await axios.get('https://loaclima.ameciclo.org:8010/proxy/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/0a2e8fd7-7a65-46df-bd1b-15f2dfaaded7/download/acoes_e_programas_json_2021_20211231.json');
    return response.data.campos;
  } catch (error) {
    console.log('Dados 2021 Rodando em modo estático!')
    // alert(`
    // Erro em pegar os dados abertos de Pernambuco: ${error}
    // Recarregue a página!
    // Se esse erro persistir entre em contato!
    // `);
    return [];
  }
};

async function getActionsData2022() {
  try {
    const response = await axios.get('https://loaclima.ameciclo.org:8010/proxy/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/55784447-97e8-4fb0-b062-99c368bf6384/download/acoes_e_programas_json_2022_20221231.json');
    return response.data.campos;
  } catch (error) {
    console.log('Dados 2022 Rodando em modo estático!')
    // alert(`
    // Erro em pegar os dados abertos de Pernambuco: ${error}
    // Recarregue a página!
    // Se esse erro persistir entre em contato!
    // `);
    return [];
  }
};

async function getActionsData2023() {
  try {
    const response = await axios.get('https://loaclima.ameciclo.org:8010/proxy/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/bd2f90f2-3cc1-4b46-ab8d-9b15a1b0d453/download/acoes_e_programas_json_2023_20231004.json');
    return response.data.campos;
  } catch (error) {
    console.log('Dados 2023 Rodando em modo estático!')
    // alert(`
    // Erro em pegar os dados abertos de Pernambuco: ${error}
    // Recarregue a página!
    // Se esse erro persistir entre em contato!
    // `);
    return [];
  }
};

export {
  newsApi,
  singleNewsApi,
  faqApi,
  homeContentAPI,
  getActionsData2020,
  getActionsData2021,
  getActionsData2022,
  getActionsData2023,
};