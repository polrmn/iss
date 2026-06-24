import styles from './Heading.module.scss'

export default function Heading(
    { text,
        isShadow = true,
        shadowPlacement = 'top',
        isAccentLine = true,
        accentLinePlacement = 'bottom',
        className = ''
    }: {
        text: string | React.ReactNode,
        isShadow?: boolean,
        shadowPlacement?: 'top' | 'left',
        isAccentLine?: boolean,
        accentLinePlacement?: 'bottom' | 'left',
        className?: string;
    }) {
    return (
        <div className={`${styles.container} ${className} ${isAccentLine ? styles[`line-${accentLinePlacement}`] : ''} `}>
            <h2>{text}</h2>
            {isShadow && <div className={`${styles.shadow} ${styles[shadowPlacement]} `}>{text}</div>}
            {/* {isAccentLine && <div className={`${ styles.line } ${ styles[accentLinePlacement] } `} />} */}
        </div>
    )
}
