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
    Recarregue a pagina, se esse erro persistir entre em contato!
     erro:${error}
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
    Recarregue a pagina, se esse erro persistir entre em contato!
     erro:${error}
    `);
    return [];
  }
};

async function faqApi(id) {
  try {
    const response = await axios.get('https://cms.ameciclo.org/faqs');
    return response.data;
  } catch (error) {
    console.log(error)
    alert(`
    Recarregue a pagina, se esse erro persistir entre em contato!
     erro:${error}
    `);
    return [];
  }
};

export { newsApi, singleNewsApi, faqApi, homeContentAPI };