import { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { db, auth } from '../services/firebaseConnection';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<null | {}>({});
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    setLoadingAuth(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      let uid = response.user.uid;
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);

      let data = {
        uid,
        name: docSnap.data()?.nome,
        email: response.user.email,
        avatarUrl: docSnap.data()?.avatarUrl,
      };

      setUser(data);

      localStorage.setItem('@user', JSON.stringify(data));

      setLoadingAuth(false);

      toast.success('Bem-vindo(a) de volta');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error('Oops algo deu errado!');
      console.log(error);
      setLoadingAuth(false);
    }
  };

  const signUp = async (email: string, name: string, password: string) => {
    setLoadingAuth(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = response.user.uid;

      await setDoc(doc(db, 'users', uid), {
        nome: name,
        avatarUrl: null,
      });

      let data = {
        uid,
        name,
        email: response.user.email,
        avatarUrl: null,
      };

      setUser(data);
      localStorage.setItem('@user', JSON.stringify(data));
      setLoadingAuth(false);
      toast.success('Seja bem vindo ao sistema');
      navigate('/dashboard');
    } catch (error: any) {
      console.log(error.message);
      setLoadingAuth(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem('@user');
    setUser({});
    navigate('/');
  };

  const contextValue = useMemo(
    () => ({
      signed: !!user,
      user,
      signIn,
      signUp,
      loadingAuth,
      logout,
    }),
    [user, signIn, signUp, loadingAuth, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
