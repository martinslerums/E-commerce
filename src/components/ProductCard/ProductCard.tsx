import { useState } from "react";
import { Product } from "../../pages/ProductList/ProductList";
import styles from "./ProductCard.module.css";

import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import axios from "axios";

type ProductCardProps = {
  product: Product;
  onProductPhotoAdd: (productId: number, newImage: string) => void;
};

const ProductCard = ({ product, onProductPhotoAdd }: ProductCardProps) => {
  const [showAddPhoto, setShowAddPhoto] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productPhoto, setProductPhoto] = useState("");

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % product_image.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + product_image.length) % product_image.length
    );
  };

  const {
    product_name,
    product_description,
    product_image,
    product_price,
    id,
  } = product;

  const handleProductPhotoAdd = () => {
    axios
      .patch(`http://localhost:3001/products/${id}`, {
        product_image: [...product_image, productPhoto],
      })
      .then(() => {
        onProductPhotoAdd(id!, productPhoto);
        setProductPhoto("");
        setShowAddPhoto(false);
      });
  };

  return (
    <div className={styles.product}>
      <div className={styles.imageWrapper}>
        {product_image.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Product_image"
            className={`${styles.image} ${
              index === currentSlide ? styles.imageVisible : styles.imageHidden
            }`}
          />
        ))}
        {product_image.length > 1 && (
          <div className={styles.carouselControls}>
            <button onClick={prevSlide}>
              <MdArrowLeft size={40} />
            </button>
            <button onClick={nextSlide}>
              <MdArrowRight size={40} />
            </button>
          </div>
        )}
      </div>

      <div className={styles.details}>
        <h1>{product_name}</h1>
        <p className={styles.description}>{product_description}</p>
        <p className={styles.price}> Price: ${product_price}</p>

        {showAddPhoto ? (
          <div className={styles.addWrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="Provide URL to image"
              value={productPhoto}
              onChange={(e) => setProductPhoto(e.target.value)}
            />
            <div className={styles.actionButtons}>
              <button onClick={handleProductPhotoAdd}>Add</button>
              <button onClick={() => setShowAddPhoto(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className={styles.addWrapper}>
            <button
              className={styles.add}
              onClick={() => setShowAddPhoto(true)}
            >
              Add product photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
