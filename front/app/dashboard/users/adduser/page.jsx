"use client"
import styles from "./adduser.module.css"
import { useState } from "react";

  const addUser = () => {

    const [newUser, setNewUser] = ('');

    const updateDatos = () => {
      
    }

  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="E-Mail" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone" name="phone" />
        <input type="date" />
      
          <select name="role" id="role" value= '' placeholder="Role">
            <option value="seller">Seller</option>
            <option value="administrator">Admin</option>
          </select>

        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
        />
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address and specifications"
        ></textarea>
        <button type="submit" onClick={updateDatos}>Submit</button>
      </form>
    </div>
  );
};

export default addUser;