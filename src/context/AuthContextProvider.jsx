/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  // Auth context values
  const authContextValues = {};
  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
