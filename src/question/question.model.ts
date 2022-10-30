export interface Question {
    id: string;
    author: string;
    summary: string;
    answers: Answer[];
}

export interface CreateQuestion {
    author: string;
    summary: string;
    answers: Answer[];
}

export interface Answer {
    id: string;
    author: string;
    summary: string;
}

export interface CreateAnswer {
    author: string;
    summary: string;
}