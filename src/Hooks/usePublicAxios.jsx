import axios from "axios";
const axiosPublic = axios.create({
    baseURL: 'https://real-state-server-side-fawn.vercel.app',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
const usePublicAxios = () => {
  
    return   axiosPublic ;
};
export default usePublicAxios;