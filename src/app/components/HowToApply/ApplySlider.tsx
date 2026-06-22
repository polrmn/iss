import { NavigationSlug, StepType } from '@/types/howToApply'
import { howToApply } from '@/constants/howToApply'
import styles from './HowToApply.module.scss'

function StepContent({ step, index }: { step: StepType, index: number }) {
    return (
        <>
            <div className={styles.topContainer}>
                <div className={styles.number}>
                    <p>{`${index + 1}`.padStart(2, '0')}</p>
                    <p>step</p>
                </div>
                <div className={styles.stepBg}>
                    <div className={styles.circle} />
                </div>
                <div className={styles.icon}>
                    {step.icon}
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
        </>
    )
}

export default function ApplySlider({ activeSlug }: { activeSlug: NavigationSlug }) {
    return (
        <div className={styles.applySlider}>
            <ul className={styles.imagesList}></ul>
            <ul className={styles.infoList}>
                {howToApply.slides.map(slide => (
                    <li key={slide.slug} className={activeSlug === slide.slug ? styles.active : ''}>
                        <ul className={styles.stepsList}>
                            {slide.steps.map((step, index) => (
                                <li key={step.title}>
                                    <StepContent step={step} index={index} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}
