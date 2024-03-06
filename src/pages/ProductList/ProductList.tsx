import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";

export type Product = {
  id?: number;
  product_name: string;
  product_description: string;
  product_price: string;
  product_category: string;
  product_brand: string;
  product_image: string[];
};

export type FilterValues = {
  brand: string[];
  category: string[];
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const getProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleProductPhotoAdd = (productId: number, newImageURL: string) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          product_image: [...product.product_image, newImageURL],
        };
      }
      return product;
    });
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const FilterProducts = (valuesToFilter: FilterValues) => {
    let filtered = [...products];

    if (valuesToFilter.brand.length > 0) {
      filtered = filtered.filter((product) =>
        valuesToFilter.brand.includes(product.product_brand)
      );
    }

    if (valuesToFilter.category.length > 0) {
      filtered = filtered.filter((product) =>
        valuesToFilter.category.includes(product.product_category)
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <main className={styles.shop}>
      <Filter onFilter={FilterProducts} products={products} />
      <div className={styles.products}>
        {filteredProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductPhotoAdd={handleProductPhotoAdd}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductList;
