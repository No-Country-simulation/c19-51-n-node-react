import styles from "@/app/components/dashboard/users/users.module.css";
import Search from "@/app/components/dashboard/search/page";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/components/dashboard/pagination/page";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Buscar un Usuario..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Agregar Usuario</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Email</td>
            <td>Creado</td>
            <td>Roll</td>
            <td>Estado</td>
            <td>Accion</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
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
    </div>
  );
};

export default UsersPage;
