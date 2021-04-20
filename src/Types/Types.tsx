export type QuizOriginal={
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Quiz={
    question: string
    answer: string
    option: string[]
}

export type Props={
    question: string
    options:string[]
    callback: (e:React.FormEvent<EventTarget>,UserAns: string) => void
}