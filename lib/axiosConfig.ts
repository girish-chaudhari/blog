import axiosIntance from 'axios';

export let baseURL = process.env.NODE_ENV === 'production' ? "https://dev-blog-girish-girishvisaero.vercel.app/": "http://localhost:3000/api"

const axios = axiosIntance.create({
  baseURL
});

export default axios;
