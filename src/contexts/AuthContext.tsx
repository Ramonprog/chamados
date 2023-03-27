import {
  createContext,
  useState,
  useEffect,
  Children,
  ReactComponentElement,
} from 'react';

import { db, auth } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext({});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<null | {}>({});
  const [loadingAuth, setLoadingAuth] = useState(false);

  const signIn = (email: string, password: string): void => {
    alert(email);
    alert(password);
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

      setLoadingAuth(false);
    } catch (error: any) {
      console.log(error.message);
      setLoadingAuth(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        loadingAuth,
        setLoadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
