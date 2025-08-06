import axios from "axios";

const axiosPublic = axios.create({
  baseURL : 'https://restaurant-management-server-7ne1m155w.vercel.app'
})
const useAxiosPublic = () => {
  return axiosPublic ;
};

export default useAxiosPublic;