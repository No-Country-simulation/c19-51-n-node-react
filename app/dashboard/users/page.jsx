<<<<<<< HEAD
import Search from "../../components/dashboard/search/search";
import styles from "./users.module.css"
import Image from "next/image";
import Link from "next/link";
=======
import styles from "@/app/components/dashboard/users/users.module.css";
import Search from "@/app/components/dashboard/search/page";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/components/dashboard/pagination/page";
>>>>>>> 1ed36fcf8b27ab3bfdcdcdff174348e421a3eb38

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
<<<<<<< HEAD
        <Search placeholder="Search for a user.." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButon}> Add New User</button>
=======
        <Search placeholder="Buscar un Usuario..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Agregar Usuario</button>
>>>>>>> 1ed36fcf8b27ab3bfdcdcdff174348e421a3eb38
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
<<<<<<< HEAD
            <td>Name Complete</td>
            <td>E-Mail</td>
            <td>Direction</td>
            <td>Phone</td>
            <td>Password</td>
            <td>Created at </td>
            <td>Role</td>
            <td>Status</td>
=======
            <td>Nombre</td>
            <td>Email</td>
            <td>Creado</td>
            <td>Roll</td>
            <td>Estado</td>
            <td>Accion</td>
>>>>>>> 1ed36fcf8b27ab3bfdcdcdff174348e421a3eb38
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
<<<<<<< HEAD
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
=======
              <div className={styles.users}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Johansen Picado
              </div>
            </td>
            <td>Johamaster@gmail.com</td>
            <td>14.07.24</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    Info
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Borrar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
>>>>>>> 1ed36fcf8b27ab3bfdcdcdff174348e421a3eb38
    </div>
  );
};

export default UsersPage;
