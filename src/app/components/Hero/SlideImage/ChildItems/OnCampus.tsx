import Image from 'next/image'
import engIcon from '../../../../../assets/images/hero-slides/on-campus/dec_part_1.svg'
import attentionIcon from '../../../../../assets/images/hero-slides/on-campus/dec_part_2_1.svg'
import studentIcon from '../../../../../assets/images/hero-slides/on-campus/dec_part_2_2.svg'
import questionAvatar from '../../../../../assets/images/hero-slides/on-campus/dec_part_3_1.webp'
import answerAvatar from '../../../../../assets/images/hero-slides/on-campus/dec_part_3_2.svg'
import arrowIcon from '../../../../../assets/images/hero-slides/on-campus/dec_part_4.svg'
import speakerIcon from '../../../../../assets/images/hero-slides/on-campus/dec_part_5.svg'
import styles from './ChildItems.module.scss'

export default function OnCampusItems({ isActive }: { isActive: boolean }) {
    return (
        <div className={`${styles.onCampusItems} ${isActive ? styles.active : ''}`}>
            <div className={styles.item1}>
                <Image src={engIcon} alt='english language' />
            </div>
            <div className={styles.item2}>
                <div className={styles.attention}>
                    <Image src={attentionIcon} alt='attention' />
                </div>
                <p className={styles.label}>Students Worldwide</p>
                <Image src={studentIcon} alt='student' />
                <p className={styles.value}>2K+</p>
            </div>
            <div className={styles.item3}>
                <div className={styles.question}>
                    <div className={styles.avatarContainer}>
                        <Image src={questionAvatar} alt='student' />
                    </div>
                    <p>Can you help me prepare for my Goethe Examination?</p>
                </div>
                <div className={styles.answer}>
                    <p>Sure! Our Official Exam Preparatory Course in German is the best option for you!</p>
                    <div className={styles.avatarContainer}>
                        <Image src={answerAvatar} alt='IEU logo' />
                    </div>
                </div>
            </div>
            <Image src={arrowIcon} alt='direction' className={styles.item4} />
            <Image src={speakerIcon} alt='speaker' className={styles.item5} />
            <div className={styles.item6}></div>
        </div>
    )
}
