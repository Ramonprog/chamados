import { Container } from './styles';
import Logo from '../../assets/Logo_menor.png';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const SignUp = () => {
  const { signUp, loadingAuth } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      form.email.trim() !== '' &&
      form.name.trim() !== '' &&
      form.password.trim() !== ''
    ) {
      await signUp(form.email, form.name, form.password);
    }
  };

  return (
    <Container>
      <div className="login">
        <div className="login-area">
          <img src={Logo} alt="logo do sistema de chamadas" />
        </div>

        <form onSubmit={(event) => handleSubmit(event)}>
          <h1>Cadastrar nova conta</h1>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <input
            type="email"
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
            {loadingAuth ? 'Carregando ...' : 'Cadastrar'}
          </button>
        </form>

        <Link to={'/'}>Já possui uma conta? Faça login</Link>
      </div>
    </Container>
  );
};

export default SignUp;
