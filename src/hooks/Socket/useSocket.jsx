import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_BASEURL);

const useSocket = () => {
  return socket;
};

export default useSocket;
