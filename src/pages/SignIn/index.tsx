import { Container } from './styles';

import Logo from '../../assets/Logo_menor.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <Container>
      <div className="login">
        <div className="login-area">
          <img src={Logo} alt="logo do sistema de chamadas" />
        </div>

        <form>
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
            type="text"
            placeholder="********"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
          />

          <button type="submit">Acessar</button>
        </form>

        <Link to={'/register'}>Criar uma conta</Link>
      </div>
    </Container>
  );
};

export default SignIn;
