import { HeroSliderNavigationType, HeroSlideType } from "@/types/hero";
import CoursesIcon from "@/app/components/icons/hero/navigation/CoursesIcon";
import DistanceIcon from "@/app/components/icons/hero/navigation/DistanceIcon";
import OnCampusIcon from "@/app/components/icons/hero/navigation/OnCampusIcon";
import OnlineIcon from "@/app/components/icons/hero/navigation/OnlineIcon";
import img from '../assets/images/logo-s.png'

export const heroSlidesNavigation = {
    title: <><p>Forms of</p><p>Education</p></>,
    subtitle: <p>Choose an available form of study</p>,
    navigationItems: [
        {
            label: <p>On-Campus <br />Education</p>,
            value: 'on-campus',
            icon: <OnCampusIcon />,
            href: "/",
        },
        {
            label: <p>Online Education</p>,
            value: 'online',
            icon: <OnlineIcon />,
            href: "/",
        },
        {
            label: <p>Distance <br />Education</p>,
            value: 'distance',
            icon: <DistanceIcon />,
            href: "/",
        },
        {
            label: <p>Short <br />Courses</p>,
            value: 'courses',
            icon: <CoursesIcon />,
            href: "/",
        }
    ]
} as const satisfies HeroSliderNavigationType;

type HeroSlideFullType = {
    value: typeof heroSlidesNavigation.navigationItems[number]["value"]
} & HeroSlideType

export const heroSlides: HeroSlideFullType[] = [{
    value: 'on-campus',
    title: {
        primary: '',
        secondary: '',
    },
    images: [{
        primary: '/',
        secondary: '/'
    }],
    decorateItems: []

}]