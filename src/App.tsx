import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
import { AuthContextProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <MyRoutes />
        <ToastContainer autoClose={2000} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
