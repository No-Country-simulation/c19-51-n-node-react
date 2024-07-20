import Image from "next/image";
import styles from "./transactions.module.css";
import Link from "next/link";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Ventas</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Details</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.done}`}>Accepted</span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Accepted
              </span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.inProcess}`}>
                In Process
              </span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Accepted
              </span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.inProcess}`}>
                In Process
              </span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Accepted
              </span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.inProcess}`}>
                In Process
              </span>
            </td>

            <td>14.02.24</td>

            <td>$3.200</td>

            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </Link>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
