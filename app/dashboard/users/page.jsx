"use client"
import Search from "../../components/dashboard/search/search";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./users.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../../components/dashboard/pagination/Pagination"


const UsersPage = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/users');
          setUsers(response.data)
          console.log(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, []);

   

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(users.length / itemsPerPage);
  
    
  
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
            <td>Created at </td>
            <td>Role</td>
            <td>Action</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user?.photo || "/noavatar.png"}
                    alt="Img User"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.firstName} {" "}
                  {user.lastName}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{new Date(user.registerDate).toLocaleDateString()}</td>
              <td>{user.role}</td>
              <div>
              <Link href={`/dashboard/users/${user._id}`} >
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
      <Pagination
       currentPage={currentPage}
       totalPages={totalPages}
       onPageChange={handlePageChange}/>
    </div>
  );
};

export default UsersPage;
