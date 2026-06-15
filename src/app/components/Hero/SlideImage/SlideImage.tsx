import React from 'react'
import OnCampus from './OnCampus'
import styles from './SlideImage.module.scss'
import { HeroSlideValue } from '@/constants/hero'
import Online from './Online'
import Distance from './Distance'
import Courses from './Courses'

export default function SlideImage({ activeSlideValue }: { activeSlideValue: HeroSlideValue }) {

    return (
        <div className={styles.slideImageContainer}>
            <OnCampus isActive={activeSlideValue === 'on-campus'} />
            <Online isActive={activeSlideValue === 'online'} />
            <Distance isActive={activeSlideValue === 'distance'} />
            <Courses isActive={activeSlideValue === 'courses'} />
        </div>
    )
}
