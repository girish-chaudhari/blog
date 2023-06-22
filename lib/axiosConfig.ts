import axiosIntance from 'axios';

export let baseURL = process.env.NODE_ENV === 'production' ? "https://dev-blog-girish-girishvisaero.vercel.app/api": "http://localhost:8080/api"

const axios = axiosIntance.create({
  baseURL
});

export default axios;
