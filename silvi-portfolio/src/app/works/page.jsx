"use client";
import React from "react";
import styles from "../../../Styles/Works.module.css";
import { data } from "./data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Works = () => {
  const [index, setIndex] = useState(0);
  const handle = (direction) => {
    direction === "l"
      ? setIndex(index !== 0 ? index - 1 : 10)
      : setIndex(index !== 10 ? index + 1 : 0);
  };
  return (
    <section className={styles.Container}>
      <h2 className={styles.title}>Trabajos y Proyectos</h2>
      <article
        className={styles.ImagesConatiner}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {data.map((e) => (
          <article key={e.id} className={styles.carouselContainer}>
            <article onClick={() => handle("l")}>
              <p className={styles.Arrow}>{`<`}</p>
            </article>
            <div className={styles.contall}>
              <article className={styles.leftSide}>
                <h3 key={e.id} className={styles.h3}>
                  {e.title}
                </h3>
                <Image
                  key={e.id}
                  className={styles.imageCarousel}
                  style={{ objectFit: "cover", layout: "fill" }}
                  src={e.image}
                  height={300}
                  width={600}
                />
              </article>

              <article className={styles.links}>
                <p key={e.id} className={styles.p}>
                  {e.desc}
                </p>
                <Link href={e.srcGit} key={e.id} className={styles.p}>
                  <button className={styles.button}>Github</button>
                </Link>
                {e.srcWeb.length > 2 ? (
                  <Link href={e.srcGit} key={e.id} className={styles.p}>
                    <button className={styles.button}>Web</button>
                  </Link>
                ) : (
                  <span></span>
                )}
              </article>
            </div>
            <article onClick={() => handle("r")}>
              <p className={styles.Arrow}>{`>`}</p>
            </article>
          </article>
        ))}
      </article>
    </section>
  );
};

export default Works;
