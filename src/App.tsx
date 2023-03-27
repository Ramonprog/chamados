import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
