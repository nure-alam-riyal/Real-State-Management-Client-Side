
import axios from "axios";
const axiosPrivate = axios.create({
    baseURL: 'http://localhost:1506',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
const usePrivetAxios = () => {
    return axiosPrivate
};

export default usePrivetAxios;