import apisauce from 'apisauce';

const create = (baseURL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
  });

  const fetchData = () => api.get('/data');

  return {
    fetchData,
  };
}

export default {
  create,
};