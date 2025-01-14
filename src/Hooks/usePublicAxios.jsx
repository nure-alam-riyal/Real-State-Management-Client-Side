import axios from "axios";


const usePublicAxios = () => {
    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
      });
    return instance;
};

export default usePublicAxios;