import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();


  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('Access-Token')
    //console.log('request stopped by interceptors', token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  })

  //401 & 403 error
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    
    //console.log('interceptors error function', status);

    if (status === 401 || status === 403) {
      await logOut();
      navigate('/login')
    }
    return Promise.reject(error);
  })

  return axiosSecure;
};

export default useAxiosSecure;