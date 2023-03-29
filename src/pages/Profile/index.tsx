import { FiSettings, FiUpload } from 'react-icons/fi';
import Avatar from '../../assets/avatar.png';
import Header from '../../components/Header';
import Title from '../../components/Title';
import useGetUserStorage from '../../hooks/useGetUserStorage';
import { Container } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { updateDoc, doc } from 'firebase/firestore';
import { auth, db, storage } from '../../services/firebaseConnection';

const Profile = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const { userStorage } = useGetUserStorage();

  const [avatarUrlProfile, setAvatarUrlProfile] = useState(
    user && user.avatarUrl
  );
  const [nameProfile, SetNameProfile] = useState(user && user.name);
  const [emailProfile, setemailProfile] = useState(user && user.email);
  const [imageAvatar, setImageAvatar] = useState<string | null>(null);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target && target.files) {
      const image = target.files[0];
      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        setImageAvatar(URL.createObjectURL(image));
        setAvatarUrlProfile(URL.createObjectURL(image));
      } else {
        toast.error('Envie uma imagem do tipo PNG ou JPEG');
        setImageAvatar(null);
        return;
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (avatarUrlProfile === null && nameProfile !== '') {
      try {
        const docRef = doc(db, 'users', user.uid);
        await updateDoc(docRef, {
          nome: nameProfile,
        });
        alert('entrou');
        let data = {
          ...user,
          name: nameProfile,
        };
        setUser(data);
        localStorage.setItem('@user', JSON.stringify(data));
        toast.success('Atualizado com Sucesso');
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  return (
    <Container>
      <Header />
      <div className="content">
        <Title name={'Minha Conta'} icon={<FiSettings />} />
      </div>
      <div className="container-profile">
        <form
          className="form-profile"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label className="label-avatar">
            <span>
              <FiUpload color="#000" size={35} />
            </span>
            <img
              className="content"
              src={user?.avatarUrl === null ? Avatar : avatarUrlProfile}
              alt="Foto de perfil"
              width={250}
              height={250}
            />
          </label>
          <div className="file">
            <input
              type="file"
              accept="image/*"
              style={{ cursor: 'pointer' }}
              onChange={(event) => handleFile(event)}
            />
          </div>

          <div className="inputs content">
            <div className="field">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={nameProfile}
                onChange={(event) => SetNameProfile(event.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email:</label>
              <input type="text" disabled value={emailProfile} />
            </div>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
      <div className="container-profile">
        <button className="logout-btn content" onClick={logout}>
          Sair
        </button>
      </div>
    </Container>
  );
};

export default Profile;
