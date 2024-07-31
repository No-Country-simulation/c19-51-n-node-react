"use client"

import React, { useEffect, useState } from "react";
import styles from "./sigle.user.module.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import axios from "axios";

axios.defaults.withCredentials = true;

const SingleUserPage = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/users/${id}`, {
        withCredentials: true,
      });
      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
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
        <form className={styles.form}>
          <label>Identification</label>
          <input type="text" name="identification" placeholder="Identification" value={userData?.identification || ''} readOnly />

          <label>Register Date</label>
          <input type="text" name="registerDate" placeholder="Register Date" value={new Date(userData?.registerDate).toLocaleDateString() || ''} readOnly />

          <label>First Name</label>
          <input type="text" name="firstName" placeholder="First Name" value={userData?.firstName || ''} readOnly />

          <label>Last Name</label>
          <input type="text" name="lastName" placeholder="Last Name" value={userData?.lastName || ''} readOnly />

          <label>Phone</label>
          <input type="text" name="phone" placeholder="Phone" value={userData?.phone || ''} readOnly />

          <label>E-Mail</label>
          <input type="email" name="email" placeholder="Email" value={userData?.email || ''} readOnly />


          <label>Role</label>
          <select name="role" id="role" value={userData?.role || ''} readOnly>
            <option value="administrator">Admin</option>
            <option value="seller">Seller</option>
          </select>

          <label>Status</label>
          <select name="status" id="status" value={userData?.status || ''} readOnly>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <label>Address</label>
          <textarea type="text" name="address" placeholder="Address" value={userData?.address || ''} readOnly />

        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
