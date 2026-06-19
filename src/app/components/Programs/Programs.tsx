'use client'

import { programs } from '@/constants/programs';
import Heading from '../Heading/Heading';
import ProgramsList from './ProgramsList';
import styles from './Programs.module.scss';
import { useState } from 'react';
import ProgramsTabs from './ProgramsTabs';

const Programs = () => {
    const [activeSlug, setActiveSlug] = useState('bachelor')

    return (
        <section className={styles.programs}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.infoContainer}>
                        <Heading text={programs.title} shadowPlacement='left' accentLinePlacement='left' />
                        <ProgramsList activeSlug={activeSlug} />
                    </div>
                    <ProgramsTabs activeSlug={activeSlug} setActiveSlug={setActiveSlug} />
                </div>
                <div className={styles.body}></div>
            </div>
        </section>
    )
}

export default Programs