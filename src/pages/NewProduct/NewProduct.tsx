import React, { FormEvent, useState } from "react";
import styles from "./NewProduct.module.css";
import axios from "axios";
import { Product } from "../ProductList/ProductList";

const initialFormValues: Product = {
  product_name: "",
  product_description: "",
  product_price: "",
  product_category: "",
  product_brand: "",
  product_image: [],
};

const NewProduct = () => {
  const [productData, setProductData] = useState<Product>(initialFormValues);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.name === "product_image") {
      const product_images = event.target.value.split(",");
      setProductData((prevData) => {
        return {
          ...prevData,
          [event.target.name]: product_images,
        };
      });
    } else {
      setProductData((prevData) => {
        return {
          ...prevData,
          [event.target.name]: event.target.value,
        };
      });
    }
  };

  const handleProductAdd = (event: FormEvent) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/products", productData)
      .then(() => setProductData(initialFormValues));
  };

  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form} onSubmit={handleProductAdd}>
        <h1 className={styles.title}>New product form</h1>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="product_name">
            Product name
          </label>
          <input
            required
            type="text"
            id="product_name"
            name="product_name"
            value={productData.product_name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="product_description">
            Product description
          </label>
          <textarea
            required
            id="product_description"
            name="product_description"
            value={productData.product_description}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="product_price">
            Product price
          </label>
          <input
            required
            type="number"
            id="product_price"
            name="product_price"
            value={productData.product_price}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="product_category">
            Product category
          </label>
          <input
            required
            type="text"
            id="product_category"
            name="product_category"
            value={productData.product_category}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="product_brand">
            Product brand
          </label>
          <input
            required
            type="text"
            id="product_brand"
            name="product_brand"
            value={productData.product_brand}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="product_image">
            Product image
          </label>
          <input
            required
            type="text"
            id="product_image"
            name="product_image"
            value={productData.product_image}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} type="submit">
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
