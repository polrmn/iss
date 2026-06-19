import { Dispatch, SetStateAction } from 'react';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { programs } from '@/constants/programs';
import bachelorBg from '../../../assets/images/programs/bachelor.webp'
import masterBg from '../../../assets/images/programs/master.webp'
import doctorateBg from '../../../assets/images/programs/doctorate.webp'
import hybritDoctoralBg from '../../../assets/images/programs/hybrid-doctoral.webp'
import coursesBg from '../../../assets/images/programs/courses.webp'
import languageBg from '../../../assets/images/programs/language.webp'
import styles from './Programs.module.scss';

const bgImages: Record<string, StaticImageData> = {
    'bachelor': bachelorBg,
    'master': masterBg,
    'doctorate': doctorateBg,
    'hybrid-doctoral': hybritDoctoralBg,
    'courses': coursesBg,
    'language': languageBg,
}

const totalItems = programs.items.length;
const inactiveWidth = 70;
const gapWidth = 24;
const activeWidthCalc = `calc(100% - ${(totalItems - 1) * inactiveWidth}rem - ${(totalItems - 1) * gapWidth}rem)`;

export default function ProgramsTabs({ activeSlug, setActiveSlug }: { activeSlug: string, setActiveSlug: Dispatch<SetStateAction<string>> }) {
    return (
        <ul className={styles.cardsContainer}>
            {programs.items.map(item => {
                const isActive = item.slug === activeSlug;
                const currentBg = bgImages[item.slug];

                return (
                    <li
                        key={item.slug}
                        className={`${styles.cardItem} ${isActive ? styles.activeCard : styles.inactiveCard}`}
                        style={{
                            background: `url(${currentBg ? currentBg.src : 'none'}) center center / auto 100% no-repeat`,
                            width: isActive ? activeWidthCalc : `${inactiveWidth}rem`
                        }}
                    >
                        <button onClick={() => setActiveSlug(item.slug)} className={styles.tabButton}>
                            <p className={styles.titleText}>{item.title}</p>
                        </button>
                    </li>
                )
            })}
        </ul>
    );
}
