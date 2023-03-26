import { Container } from './styles';

import Logo from '../../assets/Logo_menor.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
  });

  return (
    <Container>
      <div className="login">
        <div className="login-area">
          <img src={Logo} alt="logo do sistema de chamadas" />
        </div>

        <form>
          <h1>Cadastrar nova conta</h1>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
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

          <button type="submit">Acessar</button>
        </form>

        <Link to={'/'}>Já possui uma conta? Faça login</Link>
      </div>
    </Container>
  );
};

export default SignUp;
