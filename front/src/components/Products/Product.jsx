import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Product.module.css";

const SIZES = [4, 4.5, 5];

const Product = ({data}) => {
  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();
  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
            <div
              key={data?.id}
              className={styles?.image}
              style={{ backgroundImage: `url(${data?.images})` }}
              onClick={() => setCurrentImage(data?.images)}
            />
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{data?.title}</h1>
        <div className={styles.price}>{data?.price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>

          <div className={styles.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ""
                }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={styles.description}>{data?.description}</p>

        <div className={styles.actions}>
          <button
            // onClick={addToCart}
            className={styles.add}
            disabled={!currentSize}
          >
            Add to cart
          </button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>

          <Link to={'/'}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;