import React from "react";
import styles from "../Styles/ProductCard.module.scss";
export default function () {
    return (
        <>
            <div className={styles.card_container}>
                
                <section>
                    <figure>
                        <img src="https://greenbee-3.myshopify.com/cdn/shop/products/24_df77bf77-a00c-4fda-9906-e1525b566733_270x.jpg?v=1610679532"
                             alt="pirobos"/>
                    </figure>
                </section>
                
                
                <section>
                    <p>Tangelo</p>

                    <span>2.000</span>
                </section>

                <section>
                    <button></button>
                </section>
            </div>

        </>)
}