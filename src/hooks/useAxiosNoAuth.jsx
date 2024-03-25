import axios from "axios";

export const axiosNoAuth = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
const useAxiosNoAuth = () => {
  return axiosNoAuth;
};

export default useAxiosNoAuth;
