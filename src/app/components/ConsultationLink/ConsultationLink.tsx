import { waContactLink } from "@/constants/contacts"
import styles from './ConsultationLink.module.scss'
import WAIcon from "../icons/WAIcon"


type ConsultationLinkProps = {
    isText?: boolean
    text?: string;
}

export default function ConsultationLink({ isText = true, text = "Consultations" }: ConsultationLinkProps) {
    return (
        <a href={waContactLink} target="_blank" rel="noreferrer noopener" className={styles.link}>
            <div className={styles.iconContainer}>
                <div className={styles.inner}>
                    <WAIcon />
                </div>
            </div>
            {isText && <span>{text}</span>}
        </a>
    )
}
