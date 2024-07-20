<<<<<<< HEAD
import styles from "./products.module.css"
=======
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/components/dashboard/products/products.module.css"
import Search from "@/app/components/dashboard/search/page";
import Pagination from "@/app/components/dashboard/pagination/page";

const ProductsPage = () => {
  return <div className={styles.container}>
  <div className={styles.top}>
    <Search placeholder="Buscar un Producto..." />
    <Link href="/dashboard/products/add">
      <button className={styles.addButton}>Agregar Producto</button>
    </Link>
  </div>
  <table className={styles.table}>
    <thead>
      <tr>
        <td>Titulo</td>
        <td>Descripcion</td>
        <td>Precio</td>
        <td>Creado Por</td>
        <td>Stock</td>
        <td>Accion</td>
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
        <td>Desc</td>
        <td>$ 999</td>
        <td>14.07.24</td>
        <td>72</td>
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
</div>;
};

const Products = () => {
  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default Products
