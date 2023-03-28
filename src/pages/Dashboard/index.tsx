import { Container } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Header from '../../components/Header';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };
  return (
    <Container>
      <Header />
      <h1>dashboard</h1>
      <button onClick={handleLogout}>sair</button>
    </Container>
  );
};

export default Dashboard;
