import Image from "next/image";
import { motion } from "motion/react";
import mainImage1 from "../../../../assets/images/hero-slides/distance/main_1.webp";
import mainImage2 from "../../../../assets/images/hero-slides/distance/main_2.webp";
import DistanceItems from "./ChildItems/Distance";
import styles from "./SlideImage.module.scss";

export default function Distance({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className={styles.container}
      style={{ pointerEvents: isActive ? "auto" : "none" }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ type: "tween", ease: "linear", duration: 0.4 }}
    >
      <div
        className={`${styles.distance1ImageContainer} ${styles.mainImageContainer}`}
      >
        <Image
          src={mainImage1}
          alt="distance education shadow"
          loading="lazy"
          className={styles.shadow}
        />
        <Image
          src={mainImage1}
          alt="distance education"
          loading="eager"
          priority
          className={styles.main}
        />
      </div>
      <div
        className={`${styles.distance2ImageContainer} ${styles.mainImageContainer}`}
      >
        <Image
          src={mainImage2}
          alt="distance education shadow"
          loading="lazy"
          className={styles.shadow}
        />
        <Image
          src={mainImage2}
          alt="distance education"
          loading="eager"
          priority
          className={styles.main}
        />
      </div>
      <DistanceItems isActive={isActive} />
    </motion.div>
  );
}
