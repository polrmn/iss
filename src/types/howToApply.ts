export type NavigationSlug = 'on-campus' | 'online' | 'distance' | 'courses'

type ApplyNavigation = {
    title: string;
    slug: NavigationSlug
}

export type StepType = {
    title: string,
    description: string,
    icon: React.ReactElement
}

type Slide = {
    slug: NavigationSlug,
    steps: StepType[]
}

export type HowToApplyType = {
    title: string,
    navigation: ApplyNavigation[],
    slides: Slide[]
}