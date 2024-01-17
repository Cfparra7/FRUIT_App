import React, { Children } from "react";
import Styles from '../../Styles/HomeProducts.module.scss'
import ProductCard from "../ProductCard";

function HomeProducts({Children}) {
  return <>
    <div className={Styles.grid}>
        {/* {Children} */}
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
    </div>
  
  </>;
}

export default HomeProducts;
