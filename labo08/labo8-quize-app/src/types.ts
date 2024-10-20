export interface QuizResonseProps {
    response_code: number
    results: []
}

export interface QuizProps {
    category: string
    type: Type
    difficulty: Difficulty
    question: string
    correct_answer: string
    incorrect_answers: string[]
    user_answer?: string;
}

export interface QuizQuestionProps {
    quiz: QuizProps
    setUserAnswer: (answer: string) => void
    userAnswer: string
}

export interface MultipleChoiceQuestionProps {
    quiz: QuizProps
    setUserAnswer: (answer: string) => void
    userAnswer: string
}

export interface TrueFalseQuestionProps {
    quiz: QuizProps
    setUserAnswer: (answer: string) => void
    userAnswer: string
}

export interface IDataContext {
    questions: QuizProps[]
    loading: boolean;
    loadData: () => void;
    setQuestions: (questions:QuizProps[]) => void
}

export interface IThemeContext {
    theme: string,
    setTheme: (theme: string) => void
}

export enum Difficulty {
    Easy = "easy",
    Hard = "hard",
    Medium = "medium"
}

export enum Type {
    Multiple = "multiple",
    Boolean = "boolean"
}