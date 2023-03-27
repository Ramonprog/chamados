import {
  createContext,
  useState,
  useEffect,
  Children,
  ReactComponentElement,
} from 'react';

export const AuthContext = createContext({});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

type SignIn = {
  email?: string;
  password?: string;
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email: string, password: string): void => {
    alert(email);
    alert(password);
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
