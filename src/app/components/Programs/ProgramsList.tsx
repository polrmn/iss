import { courses } from '@/constants/courses';
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import ModeOfStudyIcon from '../icons/programs/ModeOfStudyIcon';
import DurationIcon from '../icons/programs/DurationIcon';
import DegreeLevel from '../icons/programs/DegreeLevel';
import PrimaryElement from '../PrimaryElement/PrimaryElement';
import styles from './Programs.module.scss'

function CourseItem({ course, index, activeIndex }: { course: typeof courses[0], index: number, activeIndex: number }) {
    const [animationState, setAnimationState] = useState<'idle' | 'hovered' | 'leaving'>('idle');

    const isItemStillActive = index === activeIndex;

    const iconClass = `${styles.plusIcon} ${(animationState === 'hovered' || isItemStillActive) ? styles.active :
        animationState === 'leaving' ? styles.leaving : ''
        }`;

    return (
        <Link href='' className={styles.courseCard} onMouseEnter={() => setAnimationState('hovered')} onMouseLeave={() => setAnimationState('leaving')}>
            <h3>{course.prefix} | {course.title}</h3>
            <ul className={styles.courseInfo}>
                <li>
                    <div className={styles.iconContainer}>
                        <ModeOfStudyIcon />
                    </div>
                    <p>{course.modeOfStudy}</p>
                </li>
                <li>
                    <div className={styles.iconContainer}>
                        <DurationIcon />
                    </div>
                    <p>{course.duration}</p>
                </li>
                <li>
                    <div className={styles.iconContainer}>
                        <DegreeLevel />
                    </div>
                    <p>{course.degreeLevel}</p>
                </li>
            </ul>
            <div className={iconClass} />
        </Link>
    )
}

export default function ProgramsList({ activeSlug }: { activeSlug: string }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const filteredCourses = courses.filter(course => course.slug === activeSlug);

    const firstRow = filteredCourses.slice(0, 4);
    const secondRow = filteredCourses.slice(4, 8);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    const renderRow = (course: typeof courses[0], index: number) => (
        <li
            key={course.id}
            className={activeIndex === index ? styles.active : ''}
            onMouseEnter={() => setActiveIndex(index)}
        >
            <CourseItem course={course} index={index} activeIndex={activeIndex} />
        </li>
    )

    useEffect(() => {
        setIsExpanded(false);
        setActiveIndex(0)
    }, [activeSlug])

    return (
        <div className={styles.programsListContainer}>
            <motion.div
                layout="size"
                transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
                className={styles.gridWrapper}
            >
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeSlug}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ type: "tween", ease: "linear", duration: 0.4 }}
                    >
                        <ul className={styles.coursesGrid}>
                            {firstRow.map(renderRow)}
                        </ul>

                        <motion.div
                            initial={{
                                height: isExpanded ? "auto" : 0,
                            }}
                            animate={{
                                height: isExpanded ? "auto" : 0,
                                opacity: isExpanded ? 1 : 0
                            }}
                            transition={{ type: "tween", ease: "linear", duration: 0.4 }}
                            className={styles.secondRowContainer}
                            style={{
                                overflow: "hidden",
                                pointerEvents: isExpanded ? "auto" : "none",
                                paddingInline: '20rem',
                                marginInline: '-20rem'
                            }}
                        >
                            <ul className={`${styles.coursesGrid} ${styles.secondRowGrid}`}>
                                {secondRow.map((course, index) => renderRow(course, index + 4))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {isExpanded
                ? <PrimaryElement
                    element='link'
                    text='All Programs'
                    href=''
                    className={styles.actionButton}
                />
                : <PrimaryElement
                    element='button'
                    text='Show more'
                    onClick={handleButtonClick}
                    className={styles.actionButton}
                    arrowDirection='down'
                />}
        </div>
    );
}
