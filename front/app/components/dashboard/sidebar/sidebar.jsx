import MenuLink from "./menuLink/MenuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";
import menuItems from "../../data/categoriaMenu";
import { MdLogout } from "react-icons/md";

const SideBar = () => {
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
          <span className={styles.username}>Vitale Tobias</span>
          <span className={styles.userTitle}>Administrator</span>
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
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default SideBar;
