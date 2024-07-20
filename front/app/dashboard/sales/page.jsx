"use client";

import styles from "./sales.module.css";
import Image from "next/image";
import { useState } from "react";
import Search from "../../components/dashboard/search/page";

const Sales = () => {
  const initialSales = [
    {
      id: 1,
      name: "User Example",
      sellId: "1663",
      product: "Iphone 15",
      amount: "1400$ USD",
      quantity: 1,
      date: "16/07/24",
    },
    {
      id: 2,
      name: "User Example 2",
      sellId: "1664",
      product: "Samsung Galaxy S21",
      amount: "1200$ USD",
      quantity: 1,
      date: "17/07/24",
    },
  ];

  const [sales, setSales] = useState(initialSales);
  const [statuses, setStatuses] = useState({});

  const handleStatusChange = (id, event) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: event.target.value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search a Sale..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.cat}>
            <td>Name</td>
            <td>Id sell</td>
            <td>Product</td>
            <td>Total Amount</td>
            <td>Quantities</td>
            <td>Sale Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt="Img User"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {sale.name}
                </div>
              </td>
              <td>{sale.sellId}</td>
              <td>{sale.product}</td>
              <td>{sale.amount}</td>
              <td>{sale.quantity}</td>
              <td>{sale.date}</td>
              <td>
                <select
                  onChange={(event) => handleStatusChange(sale.id, event)}
                  value={statuses[sale.id] || ""}
                  className={styles.select}
                >
                  <option value="">Select</option>
                  <option value="process">Procesar</option>
                  <option value="cancel">Cancelar</option>
                  <option value="accept">Aceptar</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Sales;
