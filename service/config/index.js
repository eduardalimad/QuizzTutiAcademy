import axios from "axios";

export const http = axios.create({
    baseURL: 'http://185.209.179.96:3100/',
    headers:{
        Accept: '*/*',
        'Content-Type': 'application/json'
        
    }
})
http.interceptors.request.use(function (config) {
    const token = Cookies.get('auth._token.local')
      if (!token) {
        token = "";
      }
      config.headers.Authorization = `  ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );