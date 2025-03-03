import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      const { token, user } = response.data;
      setCookie('token', token, { path: '/', maxAge: 3600*24*30 });
      navigate('/moj-profil');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Neuspešno logovanje. Pokušajte ponovo.');
    }
  };

  return (
    <div className='d-flex login'>
      <div className="login-card">
      <h1>ULOGUJ SE</h1>
      <p>Da biste nastavili dalje, ulogujte se na nalog.</p>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Lozinka"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button' onClick={handleLogin}>Login</button>
      <a className="make-account" href='https://docs.google.com/forms/d/e/1FAIpQLSeA7qFp6rLGwjlZvM_6bfYveCD-0XC2asQzdV7WTkXwOYo2wQ/viewform'><p>Nemate nalog? Prijavite se!</p></a>
      </div>
    </div>
  );
}
