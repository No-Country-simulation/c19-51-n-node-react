"use client";

import React, { useEffect, useState } from "react";
import styles from "./sigle.user.module.css";
import Image from "next/image";
import { useParams, useRouter  } from "next/navigation";
import axios from "axios";

axios.defaults.withCredentials = true;

const SingleUserPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    identification: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: '',
    status: '',
    address: ''
  });

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/users/${id}`, {
        withCredentials: true,
      });
      setUserData(response.data);
      setFormData({
        identification: response.data.identification,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        phone: response.data.phone,
        email: response.data.email,
        role: response.data.role,
        status: response.data.status,
        address: response.data.address,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

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
      const response = await axios.put(`http://localhost:8000/api/users/${id}`, formData, {
        withCredentials: true,
      });
      console.log(response.data);
      // Actualizar el estado con los datos actualizados del usuario
      setUserData(response.data.user);
      router.push('/dashboard/users');  
  } catch (error) {
    console.error(error.message);
  }
  };

 


  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={userData?.photo || "/noavatar.png"} alt="ImgUser" layout="fill" objectFit="cover" />
        </div>
        {userData?.firstName} {userData?.lastName}
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Identification</label>
          <input type="text" name="identification" placeholder="Identification" value={formData.identification} onChange={handleChange} />

          <label>Register Date</label>
          <input type="text" name="registerDate" placeholder="Register Date" value={new Date(userData?.registerDate).toLocaleDateString()} readOnly />

          <label>First Name</label>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />

          <label>Last Name</label>
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />

          <label>Phone</label>
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />

          <label>E-Mail</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="administrator">Admin</option>
            <option value="seller">Seller</option>
          </select>

          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <label>Address</label>
          <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} />

          <button type="submit" onClick={handleSubmit}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
