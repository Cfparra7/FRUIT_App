import React from "react";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import NewsletterCard from "@/components/NewsletterCard";
import Header from "@/components/parentComponents/Header";
import HomeProducts from "@/components/parentComponents/HomeProducts";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <HomeProducts>
          {/* <ProductCard /> */}
        </HomeProducts>

        <footer>
          <NewsletterCard></NewsletterCard>
        </footer>
      </main>
    </>
  );
}
