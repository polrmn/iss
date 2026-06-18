import { advantages } from '@/constants/advantages'
import Heading from '../Heading/Heading'
import styles from './Advantages.module.scss'

export default function Advantages() {
    return (
        <section className={styles.advantages}>
            <div className={styles.container}>
                <Heading text={advantages.title} />
                <ul className={styles.atavantagesList}>
                    {advantages.items.map(item =>
                    (<li key={item.value}>
                        <p>{item.value}</p>
                        <div />
                    </li>))}
                </ul>
            </div>

        </section>
    )
}
