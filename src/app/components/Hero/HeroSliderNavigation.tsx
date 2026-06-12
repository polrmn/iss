import { motion } from "motion/react"
import { heroSlidesNavigation } from "@/constants/hero"
import Link from "next/link"
import ArrowDownIcon from "../icons/ArrowDownIcon"
import styles from "./Hero.module.scss"

type HeroSliderNavigationPropsType = {
  activeIndex: number;
  setActiveIndex: (index: number) => void
}

export default function HeroSliderNavigation({ activeIndex, setActiveIndex }: HeroSliderNavigationPropsType) {
  return (
    <div className={styles.sliderNavigation}>
      <div className={styles.navigationTitleContainer}>
        <h3>{heroSlidesNavigation.title}</h3>
        <h4>{heroSlidesNavigation.subtitle}</h4>
      </div>
      <ul className={styles.sliderNavigationList}>{heroSlidesNavigation.navigationItems.map((item, index) => (
        <li key={item.value} onMouseEnter={() => setActiveIndex(index)}>
          {activeIndex === index && (
            <motion.div
              layoutId="heroNavIndicator"
              className={styles.indicator}
              transition={{ type: "spring", stiffness: 120, damping: 20, mass: 1.2 }}
            />
          )}
          <Link href={item.href} className={`${styles.navItemContainer} ${activeIndex === index ? styles.active : ''}`}>
            {item.icon}
            {item.label}
            <div className={styles.readMore}>
              <span>Read More</span>
              <ArrowDownIcon />
            </div>
          </Link>
        </li>)
      )}</ul>
    </div>
  )
}
