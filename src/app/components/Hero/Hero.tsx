'use client'

import { useState } from 'react';
import styles from './Hero.module.scss';
import HeroSliderNavigation from './HeroSliderNavigation';
import HeroSlides from './HeroSlides';

export default function Hero() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <HeroSlides activeSlideIndex={activeSlideIndex} />
                <HeroSliderNavigation activeIndex={activeSlideIndex} setActiveIndex={(i) => setActiveSlideIndex(i)} />
            </div>
        </section>
    )
}
