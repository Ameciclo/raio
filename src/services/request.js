import axios from "axios";

async function newsApi() {
  try {
    const response = await axios.get('https://test.cms.ameciclo.org/api/posts?populate=*');
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error)
    alert(error);
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
    alert(error);
    return [];
  }
};

export { newsApi, singleNewsApi };