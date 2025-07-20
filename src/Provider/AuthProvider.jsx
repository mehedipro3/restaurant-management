import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase/Firebase.config'
import useAxiosPublic from '../hooks/useAxiosPublic';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const SingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
        //get token and store client site
        const userinfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userinfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('Access-Token', res.data.token);
            }
          })
      }
      else {
        // remove token
        localStorage.removeItem('Access-Token');
      }
      setLoading(false);

      return () => {
        return unsubscribe();
      }
    })
  }, [axiosPublic])



  const authInfo = {
    user,
    loading,
    CreateUser,
    SingIn,
    logOut,
    updateUserProfile,
    googleSingIn

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>


  );
};

export default AuthProvider;