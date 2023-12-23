import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/computer.png";

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>BIG SALE</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the bestsellers of 2023</div>
        <h1 className={styles.head}>Don't miss your chance</h1>
        <a href = '#cheap-products'>
        <button className={styles.button}>Shop Now</button>
        </a>
      </div>
      <div className={styles.image}>
        <img src={BG} alt="" />
      </div>
    </div>
  </section>
);

export default Poster;
