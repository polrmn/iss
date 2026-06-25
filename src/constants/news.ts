import { PostType } from "@/types/post";

export const news: { title: string, news: PostType[] } = {
    title: 'News',
    news: [
        {
            id: 1,
            title: "New Language Courses at ISS",
            category: 'News',
            slug: 'new-language-courses-at-iss',
        },
        {
            id: 2,
            title: "Open Door Day at International Swiss School",
            category: 'News',
            slug: 'open-door-day-at-international-swiss-school',
        },
        {
            id: 3,
            title: "International Student Week ISS",
            category: 'News',
            slug: 'international-student-week-iss',
        },
        {
            id: 4,
            title: "Speaking Club ISS",
            category: 'News',
            slug: 'speaking-club-iss',
        },
    ]
}