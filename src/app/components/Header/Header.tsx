import { mainContacts, socials } from "@/constants/contacts";
import logo from '../../../assets/images/logo-s.png'
import styles from "./Header.module.scss";
import Image from "next/image";

function HeaderContacts() {
    return (
        <ul className={styles.contacts}>
            {mainContacts.map((contact) => (
                <li key={contact.label}>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                        {contact.icon ?? null}
                        <div>
                        <p>{contact.label}</p>
                        <p>{contact.value}</p>
                        </div>
                    </a>
                </li>
            ))}
        </ul>)
}

function HeaderSocials() {
    return (
        <ul className={styles.socials}>
            {socials.map((social) => (
                <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                        {social.rectIcon ?? null}
                    </a>
                </li>
            ))}
        </ul>)
}

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.left}><Image src={logo} alt="ISS Logo" width={123} /></div>
                    <div className={styles.links}>
                        <HeaderContacts />
                        <HeaderSocials />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <nav className={styles.nav}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Admissions</a></li>
                            <li><a href="#">Academics</a></li>
                            <li><a href="#">Student Life</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
