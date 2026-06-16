import Image from 'next/image'
import { motion } from 'motion/react'
import mainImage from '../../../../assets/images/hero-slides/on-campus/main.webp'
import styles from './SlideImage.module.scss'
import OnCampusItems from './ChildItems/OnCampus'

export default function OnCampus({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className={styles.container}
      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ type: "tween", ease: "linear", duration: 0.4 }}
    >
      <div className={`${styles.onCampusImageContainer} ${styles.mainImageContainer}`}>
        <Image src={mainImage}
          alt='on-campus education shadow'
          loading="lazy"
          className={styles.shadow}
        />
        <Image src={mainImage}
          alt='on-campus education'
          loading="eager"
          priority
          className={styles.main}
        />
      </div>
      <OnCampusItems isActive={isActive} />
    </motion.div>
  )
}
