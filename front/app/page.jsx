"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import styles from "./login.module.css";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Resetear el error antes de enviar
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', userData, { withCredentials: true });
      console.log('Login successful:', response.data);

      // Obtén los detalles del usuario de la respuesta
      const { user } = response.data;

      // Guarda el nombre del usuario y otros detalles en localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // Redirige al dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your email and password and try again.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login with your user</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
