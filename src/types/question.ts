type FieldType = {
    id: string,
    name: string,
    label: string,
    placeholder: string,
    required: boolean,
    regEx?: RegExp
}

export type QuestionType = {
    title: {
        question: string,
        answer: string
    },
    form: FieldType[]
}