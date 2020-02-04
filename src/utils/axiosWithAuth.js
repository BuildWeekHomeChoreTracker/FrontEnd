import axios from 'axios';

export default axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://chore-tracker1.herokuapp.com',
    headers: {
        Authorization = localStorage.getItem('token')
    }
  });
};
