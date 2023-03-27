import { Container } from './styles';

import Logo from '../../assets/Logo_menor.png';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
const SignIn = () => {
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.email.trim() !== '' && form.password.trim() !== '') {
      await signIn(form.email, form.password);
    }
  };

  return (
    <Container>
      <div className="login">
        <div className="login-area">
          <img src={Logo} alt="logo do sistema de chamadas" />
        </div>

        <form onSubmit={(event) => handleSubmit(event)}>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="email@email.com"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
          />
          <input
            type="password"
            placeholder="********"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
          />

          <button type="submit">
            {loadingAuth ? 'Carregando...' : 'Acessar'}
          </button>
        </form>

        <Link to={'/register'}>Criar uma conta</Link>
      </div>
    </Container>
  );
};

export default SignIn;
