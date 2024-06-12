import React from "react";
import dataArticlesGrid from "../../data/dataArticlesGrid";
import ArticlesGridCard from "./ArticlesGridCard/ArticlesGridCard";
import styles from "./ArticlesGrid.module.css";

export default function ArticlesGrid() {
  return (
    <div className={styles.wraper}>
    <section className={styles.gridContainer}>
      {dataArticlesGrid.map((article, index) => (
        <ArticlesGridCard data={article} index={index} key={index}/>
      ))}
    </section>
    </div>
  );
}
