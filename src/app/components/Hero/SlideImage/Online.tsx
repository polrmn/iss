import Image from 'next/image';
import { motion } from 'motion/react'
import mainImage from '../../../../assets/images/hero-slides/online/main.webp'
import styles from './SlideImage.module.scss';
import OnlineItems from './ChildItems/Online';

export default function Online({ isActive }: { isActive: boolean }) {
    return (
        <motion.div
            className={styles.container}
            style={{ pointerEvents: isActive ? 'auto' : 'none' }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ type: "tween", ease: "linear", duration: 0.4 }}
        >
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
            <OnlineItems isActive={isActive} />
        </motion.div>
    )
}
