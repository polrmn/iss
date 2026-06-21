import { programs } from "./programs"

const courseBase = {
    title: 'Bachelor of Business Administration',
    prefix: 'BBA',
    modeOfStudy: ['online', 'distance', 'on-campus'],
    duration: '3 years',
    degreeLevel: 'Undergraduate Degree'
}

export const courses = programs.items.map(program => {
    return Array.from({ length: 8 }, (_, index) => ({
        ...courseBase,
        id: `${program.slug}-${index + 1}`,
        title: `${program.title} Spec ${index + 1}`,
        slug: program.slug
    }));
}).flat();