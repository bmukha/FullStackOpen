import axios from 'axios';
const baseUrl = '/api/blogs';

// eslint-disable-next-line no-unused-vars
let token = null;

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addBlog = async (blog, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(baseUrl, blog, config);
  return response.data;
};

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const updateBlog = async (id, blog, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.put(`${baseUrl}/${id}`, blog, config);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, setToken, addBlog, updateBlog };
