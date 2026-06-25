import { QuestionType } from "@/types/question";

export const question: QuestionType = {
    title: {
        question: 'Have questions?',
        answer: 'Get a free consultation!'
    },
    form: [
        {
            id: 'name',
            name: 'user-name' as const,
            label: 'Your Name',
            placeholder: 'Please type your name',
            required: true
        },
        {
            id: 'phone',
            name: 'user-phone' as const,
            label: 'Your Phone',
            placeholder: 'Please type your phone',
            required: true
        },
        {
            id: 'email',
            name: 'user-email' as const,
            label: 'Your Email',
            placeholder: 'Please type your email',
            required: true,
            regEx: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
    ]
}