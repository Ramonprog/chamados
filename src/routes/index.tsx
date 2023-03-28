import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Private from './Private';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />
    </Routes>
  );
};

export default MyRoutes;
