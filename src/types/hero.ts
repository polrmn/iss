import { heroSlidesNavigation } from "@/constants/hero";
import { ReactElement } from "react";

export type HeroNavigationItemType = {
    label: string | React.ReactNode;
    value: string;
    icon: React.ReactNode;
    href: string;
}



export type HeroSliderNavigationType = {
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
    navigationItems: HeroNavigationItemType[];
}

type HeroSlideTitleType = {
    primary: string;
    secondary: string;
}

type HeroSlideImageType = {
    primary: `/${string}`;
    secondary: `/${string}`;
}

export type HeroSlideType = {
    title: HeroSlideTitleType;
    images: HeroSlideImageType[];
    decorateItems: ReactElement[];
}