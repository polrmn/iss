import { PostType } from '@/types/post'
import styles from './News.module.scss'
import Link from 'next/link'
import ExternalLinkIcon from '../icons/ExternalLinkIcon'

export default function NewsItem({ newsItem }: { newsItem: PostType }) {
    return (
        <div className={styles.newsItem}>
            <div className={styles.date}>
                <p>23</p>
                <p>April</p>
                <p>2026</p>
            </div>
            <div className={styles.content}>
                <h4>{newsItem.title}</h4>
                <div className={styles.links}>
                    <Link href={newsItem.slug} className={styles.readmore}>Read More</Link>
                    <Link href='/news' className={styles.allnews}>
                        <ExternalLinkIcon />
                        <span>All News</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
