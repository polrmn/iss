import { question } from '@/constants/question'
import QuestionImage from './QuestionImage'
import styles from './Question.module.scss'
import QuestionForm from './QuestionForm'
import PrimaryElement from '../PrimaryElement/PrimaryElement'
import ConsultationLink from '../ConsultationLink/ConsultationLink'

export default function Question() {
    return (
        <section className={styles.question}>
            <div className={styles.container}>
                <div className={styles.questionPoster}>
                    <div className={styles.titleContainer}>
                        <h2>
                            <div className={styles.questionText}>
                                <p>{question.title.question}</p>
                                <p className={styles.shadow}>{question.title.question}</p>
                            </div>
                            <div className={styles.answerText}>
                                <p>{question.title.answer}</p>
                                <p className={styles.shadow}>{question.title.answer}</p>
                            </div>
                        </h2>
                    </div>
                    <div className={styles.imageContainer}>
                        <QuestionImage />
                    </div>
                </div>
                <div className={styles.questionForm}>
                    <QuestionForm />
                </div>
                <div className={styles.questionButtons}>
                    <div>
                        <PrimaryElement element="link" href="#" text="Apply online" className={styles.applyLink} />
                        <ConsultationLink isText={false}/>
                    </div>
                    <div>
                        <PrimaryElement element='link' href='#' text='Download the brochure' bg='blue' className={styles.download}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
