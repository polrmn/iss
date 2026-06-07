import { ContactType, MapType, SocialType } from "@/types/contacts";
import PhoneIcon from "../app/components/icons/PhoneIcon";
import MailIcon from "@/app/components/icons/MailIcon";
import FacebookInRectIcon from "@/app/components/icons/FacebookInRectIcon";
import InstaInRectIcon from "@/app/components/icons/InstaInRectIcon";
import FacebookIcon from "@/app/components/icons/FacebookIcon";
import InstaIcon from "@/app/components/icons/InstaIcon";

export const mainContacts: ContactType[] = [
    {
        icon: <PhoneIcon />,
        label: "Phone",
        value: "+41 77 946 01 03",
        href: "https://wa.me/41779460103"
    },
    {
        icon: <MailIcon />,
        label: "Email",
        value: "info@i-ss.ch",
        href: "mailto:info@i-ss.ch"
    }
];

export const maps: MapType[] = [
    {
        label: "Adress Zurich",
        value: "Badenerstrasse 549, 8048",
        src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1350.742017186524!2d8.499219!3d47.382988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a330c0b867b%3A0x589f232c76f003f3!2sBadenerstrasse%20549%2C%208048%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sua!4v1689071703784!5m2!1sen!2sua"
    },
    {
        label: "Adress Geneva",
        value: "Chem. des Mines 2 , 1202",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.35681236496!2d6.145222476488393!3d46.22324857109655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c651db29f4711%3A0xc9fde5f90882cad!2zQ2hlbS4gZGVzIE1pbmVzIDIsIDEyMDIgR2Vuw6h2ZSwg0KjQstC10LnRhtCw0YDQuNGP!5e0!3m2!1sen!2sua!4v1754999788637!5m2!1sen!2sua"
    }
];

export const expandedContacts: ContactType[] = [
    ...mainContacts,
    {
        icon: <MailIcon />,
        label: "Email",
        value: "admission@i-ss.ch",
        href: "mailto:admission@i-ss.ch"
    },
    ...maps.map((map) => ({
        label: map.label,
        value: map.value,
    }))
]

export const socials: SocialType[] = [
    {
        icon: <FacebookIcon />,
        rectIcon: <FacebookInRectIcon />,
        label: "Facebook",
        value: "Facebook",
        href: "https://www.facebook.com/int.swissschool"
    },
    {
        icon: <InstaIcon />,
        rectIcon: <InstaInRectIcon />,
        label: "Instagram",
        value: "Insta",
        href: "https://www.instagram.com/int.swissschool"
    }
]