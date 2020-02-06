import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://chore-tracker1.herokuapp.com',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
