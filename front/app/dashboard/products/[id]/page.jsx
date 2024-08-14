"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./single.product.module.css";
import Image from "next/image";
import axios from "axios";
import { useParams,useRouter } from "next/navigation";

axios.defaults.withCredentials = true;

const SingleProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [productData, setProductData] = useState({
    brand: "",
    model: "",
    description: "",
    specs: "",
    price: 0,
    stock: 0,
    image: "",
    category: { name: "" }
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialProductData = useRef(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`, {
        withCredentials: true,
      });
      setProductData(response.data);
      initialProductData.current = response.data;  // Guardar los datos iniciales
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/categories', {
        withCredentials: true,
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      const selectedCategory = categories.find(category => category._id === value);
      setProductData({ ...productData, category: selectedCategory });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = {};

    // Solo agregar campos que han cambiado
    for (const key in productData) {
      if (productData[key] !== initialProductData.current[key]) {
        updateData[key] = productData[key];
      }
    }

    // Manejar categoría si ha cambiado
    if (productData.category._id !== initialProductData.current.category._id) {
      updateData.category = productData.category._id;
    }

    // Convertir campos numéricos a números
    if (updateData.price) updateData.price = Number(updateData.price);
    if (updateData.stock) updateData.stock = Number(updateData.stock);

    // Log para ver qué datos se envían al backend
    console.log('Datos enviados al backend:', updateData);

    try {
      await axios.put(`http://localhost:8000/api/products/${id}`, updateData, {
        withCredentials: true,
      });
      alert("Producto actualizado exitosamente");
     router.push('/dashboard/products'); 
  } catch (error) {
    console.error(error.message);
  }
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={productData?.image || "/noproduct.jpg"}
            alt="ImgUser"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {productData?.model}
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={productData.brand}
            onChange={handleInputChange}
          />

          <label>Model</label>
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={productData.model}
            onChange={handleInputChange}
          />

          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={productData.price}
            onChange={handleInputChange}
          />

          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={productData.stock}
            onChange={handleInputChange}
          />

          <label>Product Id</label>
          <input
            type="text"
            name="productId"
            placeholder="Product Id"
            value={productData.productId}
            onChange={handleInputChange}
          />

          <label>Date</label>
          <input
            type="text"
            name="registerDate"
            placeholder="Register Date"
            value={new Date(productData.registerDate).toLocaleDateString()}
            readOnly
          />

          <label>Category</label>
          <select
            name="category"
            value={productData.category._id}
            onChange={handleInputChange}
          >
            {categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <label>Description</label>
          <textarea
            name="description"
            id="desc"
            rows="10"
            placeholder="Description"
            value={productData.description}
            onChange={handleInputChange}
          ></textarea>

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
