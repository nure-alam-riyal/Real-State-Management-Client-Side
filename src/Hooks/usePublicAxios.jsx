import axios from "axios";
const axiosPublic = axios.create({
    baseURL: 'http://localhost:1506',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
const usePublicAxios = () => {
  
    return   axiosPublic ;
};
export default usePublicAxios;