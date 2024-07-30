"use client"
import Search from "../../components/dashboard/search/search";
import styles from "./users.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../../components/dashboard/pagination/Pagination"
import initialUsers from "../../components/data/usersData.js"


const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user.." />
        <Link href="/dashboard/users/adduser">
          <button className={styles.addButon}> Add New User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.cat}>
            <td>Name Complete</td>
            <td>E-Mail</td>
            <td>Direction</td>
            <td>Phone</td>
            <td>Password</td>
            <td>Created at </td>
            <td>Role</td>
            <td>Action</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {initialUsers.map((user, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt="Img User"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.direction}</td>
              <td>{user.phone}</td>
              <td>{user.password}</td>
              <td>{user.createdAt}</td>
              <td>{user.role}</td>
              <div>
                <Link href={"/dashboard/users/test"}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
              </div>
              <td>
                <span
                  className={`${styles[user.status.toLowerCase()]} ${
                    styles.status
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
