"use client"
import React from "react";
import styles from "./sigle.product.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

axios.defaults.withCredentials = true;

const SingleProductPage = () => {

  const { id } = useParams();

  const [productData, setProductData] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`, {
        withCredentials: true,
      });
      console.log(response.data);
      setProductData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
        <Image src={productData?.image || "/noproduct.jpg"} alt="ImgUser" layout="fill" objectFit="cover" />
        </div>
        {productData?.model}
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="username" placeholder="Brand" value={productData?.brand || ''} readOnly />

          <label>Price</label>
          <input type="number" name="price" placeholder="Price" value={productData?.price || ''} readOnly />

          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" value={productData?.stock || ''} readOnly/>

          <label>Product Id</label>
          <input type="text" name="productId" placeholder="productId" value={productData?.productId || ''} readOnly/>

          <label>Date</label>
          <input type="text" name="date" placeholder="Register Date" value={new Date(productData?.registerDate).toLocaleDateString() || ''} readOnly/>

          <label>Cat</label>
          <input type="text" name="category" placeholder="category" value={productData?.category.name}/>

          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="description" value={productData?.description || ''} readOnly></textarea>

         <button>Update</button> 
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
