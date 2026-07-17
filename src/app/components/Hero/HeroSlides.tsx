import { motion } from "motion/react";
import { heroSlides } from "@/constants/hero";
import SlideImage from "./SlideImage/SlideImage";
import PrimaryElement from "../PrimaryElement/PrimaryElement";
import ConsultationLink from "../ConsultationLink/ConsultationLink";
import styles from "./Hero.module.scss";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function HeroSlides({
  activeSlideIndex,
}: {
  activeSlideIndex: number;
}) {
  const activeSlide = heroSlides[activeSlideIndex];
  const isDistance = activeSlide.value === "distance";

  const { isMobile } = useWindowSize();

  return (
    <div className={styles.slidesContainer}>
      <motion.div
        className={styles.titleContainer}
        animate={{
          x: isDistance ? "300rem" : 0,
          alignItems: isDistance ? "center" : "flex-start",
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.4 }}
      >
        {heroSlides.map((slide) => {
          const isActive = slide.value === activeSlide.value;
          return (
            <motion.h2
              key={slide.value}
              className={styles.title}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ type: "tween", ease: "linear", duration: 0.4 }}
              style={{
                pointerEvents: isActive ? "auto" : "none",
                textAlign: slide.value === "distance" ? "center" : "start",
              }}
            >
              <span className={styles.primary}>{slide.title.primary}</span>
              <span className={styles.secondary}>{slide.title.secondary}</span>
            </motion.h2>
          );
        })}

        <h3 className={styles.subTitle}>
          international swiss <span /> school
        </h3>
        <div className={styles.buttonsContainer}>
          <PrimaryElement element="link" text="Apply online" href="#" />
          <ConsultationLink isText={!isMobile} />
        </div>
      </motion.div>
      <SlideImage activeSlideValue={activeSlide.value} />
    </div>
  );
}
