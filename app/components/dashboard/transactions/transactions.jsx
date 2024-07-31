import Image from "next/image";
import styles from "./transactions.module.css";
import Link from "next/link";
import transactions from "../../data/transactions";

const Transactions = () => {
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Sells</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Pruduct</td>
            <td>Quantities</td>
            <td>Details</td>
            
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt="User"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {transaction.name}
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status} ${
                    styles[transaction.statusClass]
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.product}</td>
              <td>{transaction.quantities}</td>
              <td>
              {transaction.status === "Accepted" && (
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                )}
              </td>
            </tr>



          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
