import Image from 'next/image'
import engIcon from '../../../../../assets/images/hero-slides/distance/dec_part_1.svg'
import attentionIcon from '../../../../../assets/images/hero-slides/distance/dec_part_2.svg'
import gmailIcon from '../../../../../assets/images/hero-slides/distance/dec_part_14_2.svg'
import booksIcon from '../../../../../assets/images/hero-slides/distance/dec_part_3.svg'
import classIcon from '../../../../../assets/images/hero-slides/distance/dec_part_4.svg'
import graduateIcon from '../../../../../assets/images/hero-slides/distance/dec_part_5.svg'
import clickIcon from '../../../../../assets/images/hero-slides/distance/dec_part_6.svg'
import circleDashedIcon from '../../../../../assets/images/hero-slides/distance/dec_part_7.svg'
import paperPlaneIcon from '../../../../../assets/images/hero-slides/distance/dec_part_8.svg'
import tabletIcon from '../../../../../assets/images/hero-slides/distance/dec_part_9.svg'
import googleMeetIcon from '../../../../../assets/images/hero-slides/online/dec_part_7.svg'
import graphicIcon from '../../../../../assets/images/hero-slides/distance/dec_part_10.svg'
import mailIcon from '../../../../../assets/images/hero-slides/distance/dec_part_11.svg'
import rangeIcon from '../../../../../assets/images/hero-slides/distance/dec_part_12.svg'
import bellIcon from '../../../../../assets/images/hero-slides/distance/dec_part_13_1.svg'
import googleIcon from '../../../../../assets/images/hero-slides/distance/dec_part_14_1.svg'
import googleEmailIcon from '../../../../../assets/images/hero-slides/distance/dec_part_14_2.svg'
import googleChromeIcon from '../../../../../assets/images/hero-slides/distance/dec_part_14_3.svg'
import searchIcon from '../../../../../assets/images/hero-slides/distance/dec_part_15.svg'
import styles from './ChildItems.module.scss'

export default function DistanceItems({ isActive }: { isActive: boolean }) {
    return (
        <div className={`${styles.distanceItems} ${isActive ? styles.active : ''}`}>
            <div className={styles.item1}>
                <Image src={engIcon} alt='english language' />
            </div>
            <div className={styles.item2}>
                <div className={styles.attention}>
                    <Image src={attentionIcon} alt='attention' />
                </div>
                <div className={styles.message}>
                    <Image src={gmailIcon} alt='gmail' />
                    <div>
                        <p>Incoming letter</p>
                        <p>gmail.com</p>
                    </div>
                </div>
                <p className={styles.text}>Management Class starts at 10:10</p>
            </div>
            <div className={styles.item3}>
                <div className={styles.attention}>
                    <Image src={attentionIcon} alt='attention' />
                </div>
                <div className={styles.message}>
                    <Image src={gmailIcon} alt='gmail' />
                    <div>
                        <p>Incoming letter</p>
                        <p>gmail.com</p>
                    </div>
                </div>
                <p className={styles.text}>Congratulations! You are enrolled at the university…</p>
            </div>
            <Image src={booksIcon} alt='books' className={styles.item4} />
            <Image src={classIcon} alt='class' className={styles.item5} />
            <Image src={graduateIcon} alt='graduate' className={styles.item6} />
            <Image src={clickIcon} alt='click' className={styles.item7} />
            <Image src={circleDashedIcon} alt='circle-dashed' className={styles.item8} />
            <Image src={paperPlaneIcon} alt='paper plane' className={styles.item9} />
            <Image src={paperPlaneIcon} alt='paper plane' className={styles.item10} />
            <Image src={tabletIcon} alt='tablet' className={styles.item11} />
            <div className={styles.item12}>
                <Image src={googleMeetIcon} alt='google-meet' />
            </div>
            <div className={styles.item13}>
                <Image src={graphicIcon} alt='graphic' />
            </div>
            <div className={styles.item14}>
                <Image src={mailIcon} alt='main' />
            </div>
            <div className={styles.item15}>
                <Image src={rangeIcon} alt='range' />
            </div>
            <div className={styles.item16}>
                <Image src={bellIcon} alt='bell' />
            </div>
            <div className={styles.item17}>
                <div><Image src={googleIcon} alt='google' /></div>
                <div><Image src={googleEmailIcon} alt='google email' /></div>
                <div><Image src={googleChromeIcon} alt='google chrome' /></div>
            </div>
            <div className={styles.item18}>
                <p>55K+</p>
                <p>Positive student feedbacks</p>
            </div>
            <div className={styles.item19}>
                <p>Join the new class!</p>
            </div>
            <div className={styles.item20}>
                <span>Search...</span>
                <Image src={searchIcon} alt='search' />
            </div>
        </div>
    )
}
