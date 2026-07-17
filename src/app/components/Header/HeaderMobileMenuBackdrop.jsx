"use client";

import styles from "./Header.module.scss";

export default function HeaderMobileMenuBackdrop() {
  return (
    <div
      className={styles.menuBackdrop}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          document
            .querySelector(`.${styles.menuOpen}`)
            .classList.remove(styles.menuOpen);
        }
      }}
    ></div>
  );
}
