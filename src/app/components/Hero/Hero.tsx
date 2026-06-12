'use client'

import { useState } from 'react';
import styles from './Hero.module.scss';
import HeroSliderNavigation from './HeroSliderNavigation';

export default function Hero() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {/* Hero slides */}
                <HeroSliderNavigation activeIndex={activeSlideIndex} setActiveIndex={(i) => setActiveSlideIndex(i)} />
            </div>
        </section>
    )
}
