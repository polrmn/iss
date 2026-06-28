import Image from 'next/image'
import item1 from '../../../../../assets/images/hero-slides/courses/dec_part_1.svg'
import item2 from '../../../../../assets/images/hero-slides/courses/dec_part_2.svg'
import item3 from '../../../../../assets/images/hero-slides/courses/dec_part_3.svg'
import item4 from '../../../../../assets/images/hero-slides/courses/dec_part_4.svg'
import item5 from '../../../../../assets/images/hero-slides/courses/dec_part_5_1.svg'
import item6_1 from '../../../../../assets/images/hero-slides/distance/dec_part_2.svg'
import item6_2 from '../../../../../assets/images/hero-slides/distance/dec_part_14_2.svg'
import item7 from '../../../../../assets/images/hero-slides/courses/dec_part_6.svg'
import item8 from '../../../../../assets/images/hero-slides/courses/dec_part_7.svg'
import item9 from '../../../../../assets/images/hero-slides/online/dec_part_7.svg'
import item10_1 from '../../../../../assets/images/hero-slides/courses/dec_part_8_1.webp'
import item10_2 from '../../../../../assets/images/hero-slides/courses/dec_part_8_2.webp'
import item10_3 from '../../../../../assets/images/hero-slides/courses/dec_part_8_3.webp'
import styles from './ChildItems.module.scss'

export default function CoursesItems({ isActive }: { isActive: boolean }) {
    return (
        <div className={`${styles.coursesItems} ${isActive ? styles.active : ''}`}>
            <div className={styles.item1}>
                <Image src={item1} alt='network' />
            </div>

            <div className={styles.item2}>
                <Image src={item2} alt='diploma' />
            </div>

            <div className={styles.item3}>
                <Image src={item3} alt='castle' />
            </div>

            <div className={styles.item4}>
                <Image src={item4} alt='graduation' />
            </div>

            <div className={styles.item5}>
                <div className={styles.attention}>
                    <Image src={item5} alt='attention' />
                </div>
                <p className={styles.title}>Minimum 2 weeks</p>
                <p>200+</p>
                <p className={styles.content}>Courses</p>
            </div>

            <div className={styles.item6}>
                <div className={styles.attention}>
                    <Image src={item6_1} alt='star' />
                </div>
                <div className={styles.top}>
                    <Image src={item6_2} alt='gmail' />
                    <div>
                        <p>Incoming letter</p>
                        <p>gmail.com</p>
                    </div>
                </div>
                <p>Entrepreneurship class starts at 12 AM</p>
            </div>

            <Image src={item7} className={styles.item7} alt='clock' />

            <Image src={item8} className={styles.item8} alt='path' />

            <div className={styles.item9} />

            <div className={styles.item10} />

            <div className={styles.item11} />

            <div className={styles.item12}>
                <Image src={item9} alt='google meet' />
            </div>

            <div className={styles.item13}>
                <ul>
                    <li><Image src={item10_1} alt='student' /></li>
                    <li><Image src={item10_2} alt='student' /></li>
                    <li><Image src={item10_3} alt='student' /></li>
                </ul>
                <div className={styles.title}>
                    <p>5K+</p>
                    <p>International students</p>
                </div>
            </div>
        </div>
    )
}
