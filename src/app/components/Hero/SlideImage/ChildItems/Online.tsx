import Image from 'next/image'
import laptopIcon from '../../../../../assets/images/hero-slides/online/dec_part_1.svg'
import attentionIcon from '../../../../../assets/images/hero-slides/online/dec_part_2_1.svg'
import onlineIcon from '../../../../../assets/images/hero-slides/online/dec_part_2_2.svg'
import questionAvatar from '../../../../../assets/images/hero-slides/online/dec_part_3_1.webp'
import answerAvatar from '../../../../../assets/images/hero-slides/on-campus/dec_part_3_2.svg'
import connectionIcon from '../../../../../assets/images/hero-slides/online/dec_part_4.svg'
import clickIcon from '../../../../../assets/images/hero-slides/online/dec_part_5.svg'
import googleMeetIcon from '../../../../../assets/images/hero-slides/online/dec_part_7.svg'
import analiticsIcon from '../../../../../assets/images/hero-slides/online/dec_part_8.svg'
import styles from './ChildItems.module.scss'

export default function OnlineItems({ isActive }: { isActive: boolean }) {
    return (
        <div className={`${styles.onlineItems} ${isActive ? styles.active : ''}`}>
            <div className={styles.item1}>
                <Image src={laptopIcon} alt='laptop' />
            </div>
            <div className={styles.item2}>
                <div className={styles.attention}>
                    <Image src={attentionIcon} alt='attention' />
                </div>
                <Image src={onlineIcon} alt='online education' />
                <p className={styles.label}>Excellent Teachers</p>
                <p className={styles.value}>350+</p>
            </div>
            <div className={styles.item3}>
                <div className={styles.question}>
                    <div className={styles.avatarContainer}>
                        <Image src={questionAvatar} alt='student' />
                    </div>
                    <p>Thank you for your consultation!</p>
                </div>
                <div className={styles.answer}>
                    <p>Welcome to International Swiss School!</p>
                    <div className={styles.avatarContainer}>
                        <Image src={answerAvatar} alt='IEU logo' />
                    </div>
                </div>
            </div>
            <Image src={connectionIcon} alt='connection' className={styles.item4} />
            <Image src={clickIcon} alt='cursor click' className={styles.item5} />
            <div className={styles.item6}></div>
            <div className={styles.item7}>
                <Image src={googleMeetIcon} alt='video calls' />
            </div>
            <Image src={analiticsIcon} alt='graphic' className={styles.item8} />

        </div>
    )
}
