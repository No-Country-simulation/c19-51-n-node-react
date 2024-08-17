"use client";
import styles from "./add.products.module.css" 
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

axios.defaults.withCredentials = true;


const AddProductPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    productId: "",   // Agregar este campo
    brand: "",
    model: "",
    description: "",
    specs: "",
    price: 0,
    stock: 0,
    image: "", // Si decides manejar la imagen de otra forma, esto podría ser un archivo o URL
    categoryName: "" // Cambiar para coincidir con lo que el backend espera
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convertir los valores numéricos a números
    const dataToSend = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock, 10)
    };

    try {
        const response = await axios.post('http://localhost:8000/api/products/', dataToSend, {
            withCredentials: true,
        });
        console.log(response.data);
        router.push('/dashboard/products');
    } catch (error) {
        console.error(error.message);
    }
};


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="productId" // Asegúrate de que este campo esté presente
          placeholder="Product ID" 
          required 
          value={formData.productId}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="brand" 
          placeholder="Brand" 
          required 
          value={formData.brand}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="model" 
          placeholder="Model" 
          required 
          value={formData.model}
          onChange={handleChange}
        />
        <input 
          type="number" 
          placeholder="Price" 
          name="price"  
          value={formData.price}
          onChange={handleChange}
        />
        <input 
          type="number" 
          placeholder="Stock" 
          name="stock"  
          value={formData.stock}
          onChange={handleChange} 
        />
        <select 
          name="categoryName"  // Cambiado de 'category' a 'categoryName'
          id="categoryName" 
          value={formData.categoryName} 
          onChange={handleChange}
        >
          <option value="">Choose a Category</option>
          <option value="softwares">Softwares</option>
          <option value="tablets">Tablets</option>
          <option value="computer">Computer</option>
        </select>
        {/* Otros campos... */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
