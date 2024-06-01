import axios from "axios";
// import { useNavigate } from "react-router-dom";
export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});

const useAxiosSecure = () => {
  // get auth token from local storage if it exists
  const token = localStorage.getItem("auth-token");
  // use navigate to redirect user on unauthorized access
  // const navigate = useNavigate();

  // write code for intercept request and response
  axiosSecure.interceptors.request.use((config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      // config.headers["Accept"] = "allow-"
      // config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      // if (error.response && error.response.status === 401) {
      //   navigate("/login");
      // }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
