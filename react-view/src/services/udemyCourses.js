import axios from 'axios';

const baseUrl = 'https://boiling-taiga-70590.herokuapp.com/api/courses';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAll };
