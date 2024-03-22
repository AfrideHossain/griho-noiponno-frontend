import axios from "axios";
export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
