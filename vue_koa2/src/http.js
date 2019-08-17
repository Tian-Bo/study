import axios from 'axios';

let instance = axios.create({
    baseURL: 'http://localhost:3000',
  });

// instance.defaults.headers.common['Authorization'] = 'Token'
// instance.defaults.headers.post['Content-type'] = 'application/urlencode'
// instance.defaults.headers.get['Accepts'] = 'application/json'

// 请求拦截器
instance.interceptors.request.use(config => {

  let token = localStorage.token;
  if (token) {
    config.headers.Authorization = `token ${token}`;
  }
  return config;
}, error => {

  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
  
  console.log(response);
  return response.data;
}, error => {

  return Promise.reject(error);
});

export default instance;


