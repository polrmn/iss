import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../assets/images/logo.svg'
import { expandedContacts, siteName, socials } from '@/constants/contacts'
import FooterMaps from './FooterMaps'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <Link href="/" className={styles.logoContainer}>
                        <Image src={logo} alt='IEU logo' />
                    </Link>
                    <div className={styles.nav}>
                        <h3 className={styles.title}>Navigation</h3>
                        <ul>
                            {Array.from({ length: 20 }, (_, index) => (
                                <li key={index} className={styles.footerLinkItem}>
                                    <Link href="">Navigation Link {index + 1}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.contacts}>
                        <h3 className={styles.title}>Contact</h3>
                        <ul>
                            {expandedContacts.map(contact => {
                                return (
                                    <li key={contact.value} className={styles.footerLinkItem}>
                                        <a href={contact.href}>
                                            {contact.label}: {contact.value}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <FooterMaps />
                    </div>
                </div>
            </div>
            <div className={styles.copyrightContainer}>
                <div className={styles.container}>
                    <h3>© Copyright, {siteName}</h3>
                    <ul className={styles.socials}>
                        {socials.map(social => (
                            <li key={social.value}>
                                <a href={social.href} target='_blank' rel='noreferer noopener'>
                                    {social.icon}
                                    <span>{social.value}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </footer>
    )
}
