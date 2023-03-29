import { useState, useEffect } from 'react';

const useGetUserStorage = () => {
  type User = {
    avatarUrl: string | null;
    email: string;
    name: string;
    uid: string;
  };

  const [userStorage, setUserStorage] = useState<User | null>(null);

  useEffect(() => {
    const user: string | null = localStorage.getItem('@user');
    if (user) {
      const userObj = JSON.parse(user);

      setUserStorage(userObj);
    }
  }, []);

  return { userStorage };
};

export default useGetUserStorage;
