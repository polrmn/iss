import { news } from '@/constants/news'
import img from '../../../assets/images/news-image_0.webp'
import Heading from '../Heading/Heading'
import styles from './News.module.scss'
import Image from 'next/image';
import NewsItem from './NewsItem';


export default function News() {

    const headNews = news.news[0];
    const newsItems = news.news.slice(1,4);

    return (
        <section className={styles.news}>
            <div className={styles.container}>
                <div>
                    <Heading text={news.title} shadowPlacement='left' accentLinePlacement='left' />
                    <div className={styles.headNews}>
                        <div className={styles.image}>
                            <Image src={img} alt={headNews.title} />
                            <Image src={img} alt={headNews.title} className={styles.shadow} />
                        </div>
                        <div className={styles.headNewsContainer}>
                            <NewsItem newsItem={headNews} />
                        </div>
                    </div>
                </div>
                <ul className={styles.newsList}>
                    {newsItems.map(item => (
                        <li key={item.id}>
                            <NewsItem newsItem={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
