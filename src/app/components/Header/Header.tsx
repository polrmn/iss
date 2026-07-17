import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import { mainContacts, socials } from "@/constants/contacts";
import logo from "../../../assets/images/logo-s.png";
import SearchForm from "../SearchForm/SearchForm";
import PrimaryElement from "../PrimaryElement/PrimaryElement";
import styles from "./Header.module.scss";
import SearchLIcon from "../icons/SearchLIcon";
import AuthenticationIcon from "../icons/AuthenticationIcon";
import ApplyIcon from "../icons/ApplyIcon";
import MenuButton from "./MenuButton";
import HeaderMobileMenuBackdrop from "./HeaderMobileMenuBackdrop";

function SearchLink() {
  return (
    <Link href="/search">
      <SearchLIcon />
      <span>Search</span>
    </Link>
  );
}

function AuthenticationLink() {
  return (
    <Link
      href="https://verifydocuments.i-ss.ch"
      target="_blank"
      rel="noopener rereferrer"
    >
      <AuthenticationIcon />
      <span>Authentication</span>
    </Link>
  );
}

function ApplyLink() {
  return (
    <Link href="/apply-online" className={styles.applyLink}>
      <ApplyIcon />
      <span>Application</span>
    </Link>
  );
}

function HeaderContacts() {
  return (
    <ul className={styles.contacts}>
      {mainContacts.map((contact, index, array) => (
        <Fragment key={contact.label}>
          <li key={contact.label}>
            <a href={contact.href} target="_blank" rel="noopener noreferrer">
              {contact.icon ?? null}
              <div>
                <p className={styles.label}>{contact.label}</p>
                <p className={styles.value}>{contact.value}</p>
              </div>
            </a>
          </li>
          {index !== array.length - 1 && (
            <li className={styles.divider} key={`${contact.label}-divider`} />
          )}
        </Fragment>
      ))}
    </ul>
  );
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
    </ul>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <Link href="/">
              <Image src={logo} alt="ISS Logo" width={123} />
            </Link>
          </div>
          <div className={styles.links}>
            <SearchForm />
            <HeaderContacts />
            <HeaderSocials />
            <PrimaryElement
              element="link"
              href="#"
              text="Apply online"
              className={styles.applyLink}
            />
          </div>
        </div>
        <div className={styles.mobileMiddle}>
          <div className={styles.middleLeft}>
            <MenuButton />
            <SearchLink />
          </div>
          <Link href="/" className={styles.logo}>
            <Image src={logo} alt="ISS Logo" width={80} />
          </Link>
          <div className={styles.middleRight}>
            <AuthenticationLink />
            <ApplyLink />
          </div>
        </div>
        <div className={styles.bottom}>
          <HeaderMobileMenuBackdrop />
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Admissions</a>
              </li>
              <li>
                <a href="#">Academics</a>
              </li>
              <li>
                <a href="#">Student Life</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
