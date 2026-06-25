import { ComponentPropsWithoutRef, ElementType } from 'react'
import Link from 'next/link'
import styles from './PrimaryElement.module.scss'

type SharedType = { text: string, isArrow?: boolean, arrowDirection?: 'right' | 'down', bg?: 'red' | 'blue', className?: string }
type ButtonProps = { element: 'button' } & SharedType & ComponentPropsWithoutRef<'button'>
type LinkProps = { element: 'link' } & SharedType & ComponentPropsWithoutRef<typeof Link> & { href: string }
type PrimaryProps = ButtonProps | LinkProps

const ComponentMap = {
    button: 'button',
    link: Link,
} as const;

const arrow = {
    right: "→",
    down: "↓"
}

export default function PrimaryElement(props: PrimaryProps) {
    const { element, text, isArrow = true, arrowDirection = 'right', bg, className, ...nativeProps } = props;

    const Tag = ComponentMap[element] as ElementType;

    return (
        <Tag className={`${styles.primaryElement} ${bg === 'blue' ? styles.blueBg : ''} ${className ? className : ''}`} {...nativeProps}>
            <div className={styles.inner}>
                <span className={styles.text}>{text}</span>
                {isArrow && <span className={`${styles.arrow} ${styles[`direction-${arrowDirection}`]}`}>{arrow[arrowDirection]}</span>}
            </div>
        </Tag>
    )
}