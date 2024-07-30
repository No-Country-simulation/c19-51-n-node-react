"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import MenuLink from "./menuLink/MenuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";
import menuItems from "../../data/categoriaMenu";
import { MdLogout } from "react-icons/md";

const SideBar = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '', role: '' });
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/auth/logout', {}, { withCredentials: true });
      localStorage.removeItem('user');
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
      // Manejar el error si es necesario
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt="User"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>{user.firstName} {user.lastName}</span>
          <span className={styles.userTitle}>{user.role}</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout} onClick={handleLogout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default SideBar;
