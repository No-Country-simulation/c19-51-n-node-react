"use client";
import Pagination from "../../components/dashboard/pagination/Pagination";
import styles from "./sales.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Search from "../../components/dashboard/search/page";
import axios from "axios";

const Sales = () => {

  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statuses, setStatuses] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/orders/');
        console.log(response.data);
        setSales(response.data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  




  const handleStatusChange = (id, event) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: event.target.value,
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sales.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sales.length / itemsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search a Sale..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.cat}>
          {/* <td>Name</td> */}
            <td>Order Id</td>
            <td>Products</td>
            <td>Total Amount</td>
            <td>Sale Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((sale) => (
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
                  {/* {sale.items.map((item, index) => (
                    <div key={index}>
                      {item.description || "No description"}
                    </div>
                  ))}*/}
                  {sale.orderId}
                </div> 
              </td>
              <td>
                {sale.items.map((item, index) => (
                  <div key={index}>
                    {item.description || "No description"} (Qty: {item.quantity})
                  </div>
                ))}
              </td>
              <td>{sale.totalOrder || "No total amount"}</td>
              <td>{formatDate(sale.orderDate)}</td>
              <td>
                <select
                  onChange={(event) => handleStatusChange(sale._id, event)}
                  value={statuses[sale._id] || sale.status}
                  className={styles.select}
                >
                  <option value="">Select</option>
                  <option value="in_process">Procesar</option>
                  <option value="cancelled">Cancelar</option>
                  <option value="accepted">Aceptar</option>
                  <option value="pending">Pending</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Sales;