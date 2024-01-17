import React from "react";
import styles from "../Styles/ProductCard.module.scss";
import Image from "next/image";

export default function () {
  return (
    <>
      <div className={styles.card_container}>
        <section className={styles.card_media}>
          <figure className={styles.media_figure}>
            <Image
              src={
                "https://greenbee-3.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_270x.jpg?v=1610679532"
              }
              quality={100}
              width={100}
              height={100}
              className={styles.main_image}
            ></Image>
          </figure>
        </section>

        <section className={styles.card_info}>
          <p className={styles.info_name}>Tangelo</p>

          <span className={styles.info_price}>2.000</span>
        </section>

        <section className={styles.button_container}>
          <button className={styles.card_button} type="button" >Agregar al carrito</button>
        </section>
      </div>
    </>
  );
}
