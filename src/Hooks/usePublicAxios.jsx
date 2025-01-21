import axios from "axios";
const axiosPublic = axios.create({
    baseURL: 'https://server-side-blue-three.vercel.app',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
const usePublicAxios = () => {
  
    return   axiosPublic ;
};
export default usePublicAxios;