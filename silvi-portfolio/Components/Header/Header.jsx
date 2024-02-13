import React from "react";
import styles from "../../Styles/Header.module.css";
import { data } from "../Header/data.js";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <ul className={styles.rowHead}>
        {data.map((e) => (
          <Link href={e.url} className={styles.links}>
            <li key={e.id} className={styles.li}>{e.title}</li>
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
