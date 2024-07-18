import Search from "../../components/dashboard/search/search";
import styles from "./users.module.css"
import Image from "next/image";
import Link from "next/link";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user.." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButon}> Add New User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name Complete</td>
            <td>E-Mail</td>
            <td>Direction</td>
            <td>Phone</td>
            <td>Password</td>
            <td>Created at </td>
            <td>Role</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Img User" width={40} height={40} className={styles.userImage}/>
                User Example
              </div>
            </td>

            <td>vitaletobias1@gmail.com</td>
            <td>Avenida siempre viva 123</td>
            <td>1165152620</td>
            <td>Admin123</td>
            <td>16.07.24</td>
            <td>Admin</td>
            <td>
              <span className={`${styles.active} ${styles.status}`}> Active</span>
              </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Img User" width={40} height={40} className={styles.userImage}/>
                User Example
              </div>
            </td>

            <td>fulano123@gmail.com</td>
            <td>Avenida siempre viva 123</td>
            <td>1163862620</td>
            <td>Admin123</td>
            <td>16.07.24</td>
            <td>Seller</td>
            <td>
              <span className={`${styles.inactive} ${styles.status}`}> Inactive</span>
              </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Img User" width={40} height={40} className={styles.userImage}/>
                User Example
              </div>
            </td>

            <td>fulano123@gmail.com</td>
            <td>Avenida siempre viva 123</td>
            <td>1163862620</td>
            <td>Admin123</td>
            <td>16.07.24</td>
            <td>Seller</td>
            <td>
              <span className={`${styles.low} ${styles.status}`}> Low</span>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
