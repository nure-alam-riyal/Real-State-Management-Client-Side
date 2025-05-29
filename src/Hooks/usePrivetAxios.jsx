
import axios from "axios";
const axiosPrivate = axios.create({
    baseURL: 'https://real-state-server-side-fawn.vercel.app',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
const usePrivetAxios = () => {
  axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token')
    // //console.log('request stopped by interceptors', token)
    config.headers.authorization = `Bearer ${token}`;
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

    return axiosPrivate
};

export default usePrivetAxios;
// https://server-side-blue-three.vercel.app