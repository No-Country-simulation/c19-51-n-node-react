"use client";
import styles from "./add.products.module.css" 
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

axios.defaults.withCredentials = true;

const AddProductPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    description: "",
    specs: "",
    price: 0,
    stock: 0,
    image: "",
    category: { name: "" }
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
    try {
      const response = await axios.post('http://localhost:8000/api/products/', formData, {
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
          name="brand" 
          placeholder="title" 
          required 
          value={formData.name}
          onChange={handleChange}
          />
          <select name="category" id="category" value={formData.cat} onChange={handleChange}>
            <option value="kitchen">Choose a Category</option>
            <option value="softwares">Softwares</option>
            <option value="tablets">Tablets</option>
            <option value="computer">Computer</option>
          </select>
          <input 
          type="number" 
          placeholder="price" 
          name="price"  
          value={formData.price}
          onChange={handleChange}/>
          <input 
          type="number" 
          placeholder="stock" 
          name="stock"  
          onChange={handleChange} 
          />
          <input 
          type="text" 
          placeholder="color" 
          name="color"
          onChange={handleChange} 
          />
          {/* <input 
          type="text" 
          placeholder="size" 
          name="size"
          onChange={handleChange}/>   */}
          
          <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}        
        />
          <textarea name="specs" id="specs" rows="16" placeholder="Description"></textarea>
          <button type="submit">Add Product</button>
        </form>
      </div>
    )
  }

export default AddProductPage;

