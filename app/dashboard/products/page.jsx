import styles from "./products.module.css";
import Link from "next/link";
import Image from "next/image";
import Search from "../../components/dashboard/search/page";
import Pagination from "../../components/dashboard/pagination/Pagination"

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
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Iphone
              </div>
            </td>
            <td>Example Description</td>
            <td>Smartphone</td>
            <td>$ 999</td>
            <td>14/07/24</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
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
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

const Products = () => {
  return <div className={styles.container}></div>;
};

export default ProductsPage;
