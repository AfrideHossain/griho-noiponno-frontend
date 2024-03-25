/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";
// import useAxiosNoAuth from "../hooks/useAxiosNoAuth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // firebase getAuth
  const auth = getAuth(app);
  // auth providers
  const providerGoogle = new GoogleAuthProvider();

  // Context states
  const [user, setUser] = useState();
  // set role state
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true);

  // use axisSecure
  const axiosSecure = useAxiosSecure();
  // use axiosNoAuth
  // const axiosNoAuth = useAxiosNoAuth

  /****************************
   ** Auth related functions **
   ****************************/

  // Create user
  const signUpWithEmailAndPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login user
  const signInWithEmailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Log out user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  /****************************************/

  // Auth state change observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUserData) => {
      setUser(currentUserData);
      axiosSecure
        .get(`/user/role/${currentUserData?.email}`)
        .then((res) => {
          setUserRole(res.data.role);
        })
        .catch((err) => console.log(err.message));
      if (currentUserData && currentUserData.email) {
        axiosSecure
          .post(
            "/jwtSign",
            {
              username: currentUserData.displayName,
              email: currentUserData.email,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            localStorage.setItem("auth-token", res.data.token);
          });
      } else {
        setUserRole("");
        localStorage.removeItem("auth-token");
      }

      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth, axiosSecure]);

  //auth context values
  const authContextValues = {
    user,
    userRole,
    loading,
    signUpWithEmailAndPass,
    signInWithEmailAndPass,
    logOutUser,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
