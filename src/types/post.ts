import { SEOType } from "./seo"

export type PostType = {
    id: string | number,
    category: "News" | "Courses",
    title: string,
    slug: string,
    date?: Date,
    seo?: SEOType,
    content?: string,
    content_blocks?: string[],
    featured_image_url?: string
}