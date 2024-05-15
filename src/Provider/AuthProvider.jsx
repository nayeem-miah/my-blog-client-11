/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setUser("");
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //  sign out
  const logout = () => {
    // setLoading(true)
    return signOut(auth);
  };

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUSer = { email: userEmail };
      // console.log(user)
      setLoading(false);
      setUser(currentUser);
      // token
      if (currentUser) {
       
        axios.post('https://my-blog-server-pi.vercel.app/jwt',loggedUSer, 
        { withCredentials: true })
        .then(res => {
          // console.log("token response ", res.data);
        });
      }
      else {
        axios.post('https://my-blog-server-pi.vercel.app/logout', loggedUSer, {
          withCredentials : true, 

        })
        .then(res=> {
          console.log(res.data);
        })
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //  auth info
  const authInfo = {
    user,
    loading,
    createUser,

    logout,
    githubLogin,
    googleLogin,
    logIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
