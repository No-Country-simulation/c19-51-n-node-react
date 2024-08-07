"use client";

import React, { useState } from "react";
import styles from "./adduser.module.css"; // Asegúrate de que esta ruta sea correcta
import { useRouter } from "next/navigation";
import axios from "axios";

axios.defaults.withCredentials = true;

const AddUserPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    identification: '',
    phone: '',
    photo: '', // URL de la foto
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users', formData, {
        withCredentials: true,
      });
      console.log(response.data);
      router.push('/dashboard/users');  
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="identification"
          placeholder="Identification"
          value={formData.identification}
          onChange={handleChange}
        />

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserPage;
