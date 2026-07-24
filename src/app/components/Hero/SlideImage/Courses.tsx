import Image from "next/image";
import { motion } from "motion/react";
import { useWindowSize } from "@/hooks/useWindowSize";
import mainImage1 from "../../../../assets/images/hero-slides/courses/main_1.webp";
import mainImage2 from "../../../../assets/images/hero-slides/courses/main_2.webp";
import mainImage1Mobile from "../../../../assets/images/hero-slides/courses/main_1_mobile.webp";
import mainImage2Mobile from "../../../../assets/images/hero-slides/courses/main_2_mobile.webp";
import CoursesItems from "./ChildItems/Courses";
import styles from "./SlideImage.module.scss";

export default function Courses({ isActive }: { isActive: boolean }) {
  const { isMobile } = useWindowSize();

  const mainImg1 = isMobile ? mainImage1Mobile : mainImage1;
  const mainImg2 = isMobile ? mainImage2Mobile : mainImage2;

  return (
    <motion.div
      className={styles.container}
      style={{ pointerEvents: isActive ? "auto" : "none" }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ type: "tween", ease: "linear", duration: 0.4 }}
    >
      <div
        className={`${styles.courses1ImageContainer} ${styles.mainImageContainer}`}
      >
        <Image
          src={mainImg1}
          alt="short courses shadow"
          loading="lazy"
          className={styles.shadow}
        />
        <Image
          src={mainImg1}
          alt="short courses"
          loading="eager"
          priority
          className={styles.main}
        />
      </div>
      <div
        className={`${styles.courses2ImageContainer} ${styles.mainImageContainer}`}
      >
        <Image
          src={mainImg2}
          alt="short courses shadow"
          loading="lazy"
          className={styles.shadow}
        />
        <Image
          src={mainImg2}
          alt="short courses"
          loading="eager"
          priority
          className={styles.main}
        />
      </div>
      <CoursesItems isActive={isActive} />
    </motion.div>
  );
}
