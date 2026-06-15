import Image from 'next/image';
import { motion } from 'motion/react'
import mainImage from '../../../../assets/images/hero-slides/online/main.webp'
import styles from './SlideImage.module.scss';

export default function Online({ isActive }: { isActive: boolean }) {
    return (
        <motion.div className={styles.container} animate={{ opacity: isActive ? 1 : 0 }} style={{ pointerEvents: isActive ? 'auto' : 'none' }}>
            <div className={`${styles.onlineImageContainer} ${styles.mainImageContainer}`}>
                <Image src={mainImage}
                    alt='online education shadow'
                    loading="lazy"
                    className={styles.shadow}
                />
                <Image src={mainImage}
                    alt='online education'
                    loading="eager"
                    priority
                    className={styles.main}
                />
            </div>
        </motion.div>
    )
}
