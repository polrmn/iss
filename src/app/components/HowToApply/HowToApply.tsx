'use client'

import { useState } from 'react'
import { howToApply } from '@/constants/howToApply'
import { NavigationSlug } from '@/types/howToApply';
import Heading from '../Heading/Heading'
import styles from './HowToApply.module.scss'
import ApplySlider from './ApplySlider';

export default function HowToApply() {
    const [activeSlug, setActiveSlug] = useState<NavigationSlug>(howToApply.navigation[0].slug);

    return (
        <section className={styles.apply}>
            <div className={styles.container}>
                <Heading text={howToApply.title} />
                <div className={styles.applyNavigation}>
                    <ul>
                        {howToApply.navigation.map(item => (
                            <li
                                key={item.slug}
                                className={activeSlug === item.slug ? styles.active : ''}
                                onClick={() => activeSlug !== item.slug && setActiveSlug(item.slug)}
                            >
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <ApplySlider activeSlug={activeSlug} />
            </div>
        </section>
    )
}
