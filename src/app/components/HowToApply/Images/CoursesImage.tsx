import Image from 'next/image'
import main from '../../../../assets/images/apply/courses/main.webp'
import part1 from '../../../../assets/images/apply/courses/dec_part_1.svg'
import part2 from '../../../../assets/images/apply/courses/dec_part_2.svg'
import part3 from '../../../../assets/images/apply/courses/dec_part_3.svg'
import part4_1 from '../../../../assets/images/apply/distance/dec_part_3_1.svg'
import part4_2 from '../../../../assets/images/apply/distance/dec_part_3_2.svg'
import part5_1 from '../../../../assets/images/apply/courses/dec_part_4_1.svg'
import part5_2 from '../../../../assets/images/apply/courses/dec_part_4_2.svg'
import part6 from '../../../../assets/images/apply/courses/dec_part_5.svg'
import styles from '../HowToApply.module.scss'

export default function CoursesImage() {
    return (
        <>
            <div className={styles.mainImage}>
                <Image src={main} alt='courses education' />
            </div>

            <div className={styles.part1}>
                <Image src={part1} alt='runner' />
                <div>short courses!</div>
            </div>

            <div className={styles.part2}>
                <Image src={part2} alt='clock' />
            </div>

            <div className={styles.part3}>
                <Image src={part3} alt='student' />
            </div>

            <ul className={styles.part4}>
                {Array.from({ length: 5 }, (_, index) => (<li key={index}><Image src={part4_1} alt='question' /></li>))}
            </ul>
            <ul className={styles.part5}>
                {Array.from({ length: 5 }, (_, index) => (<li key={index}><Image src={part4_2} alt='question' /></li>))}
            </ul>

            <ul className={styles.part6}>
                <li><Image src={part5_1} alt='qustion' /></li>
                <li><Image src={part5_2} alt='qustion' /></li>
            </ul>

            <ul className={styles.part7}>
                {Array.from({ length: 3 }, (_, index) => (
                    <li key={index}>
                        {index === 0 && <Image src={part6} alt='certificate' />}
                    </li>
                ))}
            </ul>
        </>
    )
}
