import axios from 'axios';
const baseUrl = '/api/blogs';

// eslint-disable-next-line no-unused-vars
let token = null;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addBlog = (blog, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const request = axios.post(baseUrl, blog, config);
  return request.then((response) => response.data);
};

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, setToken, addBlog };
