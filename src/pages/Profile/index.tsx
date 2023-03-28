import Header from '../../components/Header';
import { Container } from './styles';
import Title from '../../components/Title';
import { FiSettings, FiUpload } from 'react-icons/fi';
import Avatar from '../../assets/avatar.png';
import useGetUserStorage from '../../hooks/useGetUserStorage';
const Profile = () => {
  const { user } = useGetUserStorage();
  return (
    <Container>
      <Header />
      <div className="content">
        <Title name={'Minha Conta'} icon={<FiSettings />} />
      </div>
      <div className="container-profile">
        <form className="form-profile">
          <label className="label-avatar">
            <span>
              <FiUpload color="#000" size={35} />
            </span>
            <input className="content" type="file" accept="image/*" /> <br />
            <img
              className="content"
              src={user?.avatarUrl === null ? Avatar : user?.avatarUrl}
              alt="Foto de perfil"
              width={250}
              height={250}
            />
          </label>
          <div className="inputs content">
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input type="text" placeholder="Seu nome" />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="teste@teste.com" disabled />
            </div>
          </div>
          <button type="submit" className="content">
            {' '}
            Salvar{' '}
          </button>
        </form>
        <div>
          <button className="logout-btn content">Sair</button>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
