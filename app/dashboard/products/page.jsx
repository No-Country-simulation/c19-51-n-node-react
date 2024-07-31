"use client"
import styles from "./products.module.css";
import Link from "next/link";
import Search from "../../components/dashboard/search/page";
import Pagination from "../../components/dashboard/pagination/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";



const ProductsPage = () => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
    return date.toLocaleDateString(undefined, options);
  };

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      setError(error.message);
    }
  };

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
                  <Image
                   src={product?.image || "/noproduct.jpg"}
                    alt={product.name}
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.name}
                </div>
              </td>
              <td>{product.description}</td>
              <td>{product.category.name}</td>
              <td>{product.price}</td>
              <td>{formatDate(product.registerDate)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                    
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}
                  onClick={() => handleDelete(product._id)}>
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
