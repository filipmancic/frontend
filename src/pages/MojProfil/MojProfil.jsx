import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
import ClientDashboard from '../../components/ClientDashboard/ClientDashboard';
import './MojProfil.css';

export default function MojProfil() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['token']);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/auth/verify', {
          withCredentials: true,
        });
        setUserData(response.data.user);
      } catch (error) {
        removeCookie('token');
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie('token');
    navigate('/login');
  };

  if (loading) {
    return <div className='log'>
      <Link className='button log' to="/login">Uloguj se</Link>
      </div>
  }

  if (!cookies.token || !userData) {
    return <Navigate to="/login" />;
  }

  return (
    <div className='moj-profil'>
      {userData.isAdmin ? (
        <AdminDashboard userData={userData} handleLogout={handleLogout} /> 
      ) : (
        <ClientDashboard userData={userData} handleLogout={handleLogout} /> 
      )}
    </div>
  );
}
