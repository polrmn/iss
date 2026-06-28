import Image from 'next/image'
import { motion } from 'motion/react'
import mainImage1 from '../../../../assets/images/hero-slides/courses/main_1.webp'
import mainImage2 from '../../../../assets/images/hero-slides/courses/main_2.webp'
import styles from './SlideImage.module.scss'
import CoursesItems from './ChildItems/Courses'

export default function Courses({ isActive }: { isActive: boolean }) {
    return (
        <motion.div
            className={styles.container}
            style={{ pointerEvents: isActive ? 'auto' : 'none' }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ type: "tween", ease: "linear", duration: 0.4 }}
        >
            <div className={`${styles.courses1ImageContainer} ${styles.mainImageContainer}`}>
                <Image src={mainImage1}
                    alt='short courses shadow'
                    loading="lazy"
                    className={styles.shadow}
                />
                <Image src={mainImage1}
                    alt='short courses'
                    loading="eager"
                    priority
                    className={styles.main}
                />
            </div>
            <div className={`${styles.courses2ImageContainer} ${styles.mainImageContainer}`}>
                <Image src={mainImage2}
                    alt='short courses shadow'
                    loading="lazy"
                    className={styles.shadow}
                />
                <Image src={mainImage2}
                    alt='short courses'
                    loading="eager"
                    priority
                    className={styles.main}
                />
            </div>
            <CoursesItems isActive={isActive} />
        </motion.div>
    )
}
