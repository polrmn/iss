import Image from 'next/image'
import main from '../../../assets/images/question/main.webp'
import part1 from '../../../assets/images/question/application.svg'
import part2 from '../../../assets/images/question/hotel.svg'
import part3 from '../../../assets/images/question/question-blue.svg'
import part4 from '../../../assets/images/question/check.svg'
import part5 from '../../../assets/images/question/question-red.svg'
import { question } from '@/constants/question'
import styles from './Question.module.scss'

export default function QuestionImage() {
    return (
        <>
            <div className={styles.mainImage}>
                <Image src={main} alt='have a question?' />
                <Image src={main} alt='have a question?' className={styles.shadow} />
            </div>

            <div className={styles.part1}>
                <Image src={part1} alt='application' />
                <p>How to apply</p>
            </div>

            <div className={styles.part2}>
                <Image src={part2} alt='hotel' />
                <p>Is the hostel available?</p>
            </div>

            <div className={styles.part3} />

            <div className={styles.part4} />

            <ul className={styles.part5}>
                {question.form.map(field => (
                    <li key={field.id}>
                        <Image src={part3} alt='question' />
                        <Image src={part4} alt='check' className={styles.checkIcon} />
                    </li>
                ))}
            </ul>

            <ul className={styles.part6}>
                {Array.from({ length: 3 }, (_, index) => (
                    <li key={index}><Image src={part5} alt='question' /></li>
                ))}
            </ul>


        </>
    )
}
