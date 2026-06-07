import { mainContacts, socials } from "@/constants/contacts";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import FacebookInRectIcon from "../icons/FacebookInRectIcon";
import InstaInRectIcon from "../icons/InstaInRectIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import SearchIcon from "../icons/SearchIcon";
import logo from '../../../assets/images/logo-s.png'
import styles from "./Header.module.scss";
import Image from "next/image";

function HeaderContacts() {
    return (
        <ul>
            {mainContacts.map((contact) => (
                <li key={contact.label}>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                        {contact.icon ?? null}
                        <span>{contact.value}</span>
                    </a>
                </li>
            ))}
        </ul>)
}

function HeaderSocials() {
    return (
        <ul>
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
            </div>
        </header>
    )
}
