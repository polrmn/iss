"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      className={`${styles.menuBtn} ${isMenuOpen ? styles.menuOpen : ""}`}
      onClick={handleClick}
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.menuIcon}
      >
        <path
          d="M21.1392 19.017V11.6763V4.33557C21.1392 2.98419 20.0437 1.88867 18.6923 1.88867H4.01087C2.65948 1.88867 1.56396 2.98419 1.56396 4.33558V19.017C1.56396 20.3684 2.65948 21.4639 4.01087 21.4639H11.3516H18.6923"
          stroke="#002162"
          strokeLinecap="round"
        ></path>
        <line
          x1="5.73438"
          y1="7.50586"
          x2="14.522"
          y2="7.50586"
          stroke="#002162"
          strokeLinecap="round"
          className={styles.redLine}
        ></line>
        <line
          x1="5.73438"
          y1="11.7878"
          x2="16.9689"
          y2="11.7878"
          stroke="#002162"
          strokeLinecap="round"
          className={styles.blueLine}
        ></line>
        <line
          x1="5.73438"
          y1="16.0703"
          x2="12.0751"
          y2="16.0703"
          stroke="#002162"
          strokeLinecap="round"
          className={styles.hideLine}
        ></line>
        <circle
          cx="17.0513"
          cy="7.49536"
          r="0.5"
          fill="#C41119"
          className={styles.redCircle}
        ></circle>
      </svg>
      <span>Menu</span>
    </button>
  );
}
