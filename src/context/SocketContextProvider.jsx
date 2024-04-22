/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useSocket from "../hooks/Socket/useSocket";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useContextHook from "../hooks/useContextHook";

// socket context
export const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
  const { user } = useContextHook();

  // initialize pending orders state
  const [pendingOrders, setPendingOrders] = useState([]);

  // use socket hook
  const socket = useSocket();

  // use axiosSecure hook
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user) {
      axiosSecure.get("/users/profile").then((res) => {
        // console.log(res.data); //
        const userData = res.data;
        if (userData.role === "admin") {
          // console.log("inside useeffect");
          socket.connect();
          const { _id, username, email, role } = userData;
          socket.emit("loggedin", { userId: _id, username, email, role });
        }
      });
    } else {
      socket.disconnect();
    }
  }, [axiosSecure, socket, user]);
  //fetch all pending orders
  useEffect(() => {
    axiosSecure.get("/pendingorders").then((res) => {
      setPendingOrders(res.data);
    });
  }, [axiosSecure]);
  // context values
  const socketContextValue = { socket, pendingOrders };

  return (
    <SocketContext.Provider value={socketContextValue}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
