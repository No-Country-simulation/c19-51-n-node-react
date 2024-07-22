import styles from "./products.module.css";
import Link from "next/link";
import Image from "next/image";
import Search from "../../components/dashboard/search/page";
import Pagination from "../../components/dashboard/pagination/Pagination";
import products from "../../components/data/productsData";

const ProductsPage = () => {
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
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.name}
                </div>
              </td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.date}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
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
      <Pagination />
    </div>
  );
};

export default ProductsPage;
