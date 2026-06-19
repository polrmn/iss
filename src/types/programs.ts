type ProgramStatType = {
    title: string,
    slug: 'students' | 'nationalities',
    value: string
}

type ProgramType = {
    title: string,
    slug: string,
    description: string,
    stats: ProgramStatType[]

}

export type ProgramsType = {
    title: string,
    items: ProgramType[]
}