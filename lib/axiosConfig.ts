import axiosIntance from 'axios';

const axios = axiosIntance.create({
  baseURL: 'http://localhost:3000/api'
});

export default axios;
