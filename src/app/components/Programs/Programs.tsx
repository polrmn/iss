'use client'

import { useState } from 'react';
import { programs } from '@/constants/programs';
import Heading from '../Heading/Heading';
import ProgramsTabs from './ProgramsTabs';
import ProgramsInfoList from './ProgramsInfoList';
import ProgramsList from './ProgramsList';
import styles from './Programs.module.scss';

const Programs = () => {
    const [activeSlug, setActiveSlug] = useState('bachelor')

    return (
        <section className={styles.programs}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.infoContainer}>
                        <Heading text={programs.title} shadowPlacement='left' accentLinePlacement='left' />
                        <ProgramsInfoList activeSlug={activeSlug} />
                    </div>
                    <ProgramsTabs activeSlug={activeSlug} setActiveSlug={setActiveSlug} />
                </div>
                <ProgramsList activeSlug={activeSlug} />
            </div>
        </section>
    )
}

export default Programs