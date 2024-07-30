"use client"
import styles from "./products.module.css";
import Link from "next/link";
import Search from "../../components/dashboard/search/page";
import Pagination from "../../components/dashboard/pagination/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";



const ProductsPage = () => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products/');
        console.log(response.data);
        setProducts(response.data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search a Product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add Product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.cat}>
            <td>Title</td>
            <td>Description</td>
            <td>Category</td>
            <td>Value</td>
            <td>Date of added</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <img
                    src="/noproduct.jpg"
                    alt={product.name}
                    className={styles.productImage}
                  />
                  {product.name}
                </div>
              </td>
              <td>{product.description}</td>
              <td>{`${product.category.name} ${product.category._id}`}</td>
              <td>{product.price}</td>
              <td>{product.registerDate}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={"/dashboard/products/test"}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                    
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}/>
    </div>
  );
};

export default ProductsPage;
