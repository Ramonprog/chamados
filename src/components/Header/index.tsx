import { Container } from './styles';
import Avatar from '../../assets/avatar.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { FiHome, FiUser, FiSettings } from 'react-icons/fi';
import Cover from '../../assets/cover.png';

const Header = () => {
  type User = {
    avatarUrl: string | null;
    email: string;
    name: string;
    uid: string;
  };
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('@user');
    const userObj = JSON.parse(user);
    setUser(userObj);
  }, []);

  return (
    <Container>
      <div
        className="container-avatar"
        style={{ background: `url(${Cover})`, backgroundSize: 'cover' }}
      >
        {user !== null && (
          <img
            src={user.avatarUrl === null ? Avatar : user.avatarUrl}
            alt="Foto do usuário"
          />
        )}
      </div>
      <Link to={'/dashboard'}>
        <FiHome color="#fff" size={24} />
        Chamadas
      </Link>
      <Link to={'/customers'}>
        <FiUser color="#fff" size={24} />
        Clientes
      </Link>
      <Link to={'/profile'}>
        <FiUser color="#fff" size={24} />
        Perfil
      </Link>
    </Container>
  );
};

export default Header;
