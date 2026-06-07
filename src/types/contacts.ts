export interface ContactType {
    icon?: React.ReactNode;
    label: string | null;
    value: string;
    href?: string;
}

export type MapType = {
    label: string;
    value: string;
    src: string;
}

export interface SocialType extends ContactType {
    rectIcon?: React.ReactNode;
}