"use client";
import Image from "next/image";
import styles from "./transactions.module.css";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statuses, setStatuses] = useState({});

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/orders/");
        setTransactions(response.data.slice(-8));
        console.log(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Sells</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.cat}>
            <td>Order Id</td>
            <td>Products</td>
            <td>Total Amount</td>
            <td>Sale Date</td>
            <td>Action</td>
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
                  {transaction.orderId}
                </div>
              </td>
              <td>
                {transaction.items &&
                  transaction.items.map((transaction, index) => (
                    <div key={index}>
                      {transaction.description || "No description"} (Qty:{" "}
                      {transaction.quantity})
                    </div>
                  ))}
              </td>
              <td>{transaction.totalOrder || "No total amount"}</td>
              <td>{formatDate(transaction.orderDate)}</td>
              <td>
                <span
                  className={`${styles.status} ${styles[transaction.status]}`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
