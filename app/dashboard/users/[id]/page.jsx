import React from "react";
import styles from "./sigle.user.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="ImgUser" fill />
        </div>
        User Example
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />

          <label>Phone</label>
          <input type="text" name="Phone" placeholder="1165152620" />

          <label>Password</label>
          <input type="password" name="password"/>

          <label>E-Mail</label>
          <input type="email" name="email" placeholder="jhondoe@gmail.com" />

          <label>Created at</label>
          <input type="text" name="created" placeholder="25/03/2003" />

          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label>Is Seller?</label>
          <select name="isSeller" id="isSeller">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label>Status</label>
          <input type="text" name="status" placeholder="Active" />

          <label>Adress</label>
          <textarea type="text" name="adress" placeholder="London" />

           <button>Update</button> 
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
