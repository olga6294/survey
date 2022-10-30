import { faker } from "@faker-js/faker";

export const testQuestions = [
    {
        id: faker.datatype.uuid(),
        summary: 'What is my name?',
        author: 'Jack London',
        answers: []
    },
    {
        id: faker.datatype.uuid(),
        summary: 'Who are you?',
        author: 'Tim Doods',
        answers: []
    }
]

export const question =     {
    author: "John Stockton",
    summary: "What is the shape of the Earth?",
    answers: [
        {
            author: "Brian McKenzie",
            summary: "The Earth is flat."
        },
        {
            author: "Dr Strange",
            summary: "It is egg-shaped."
        }
    ]
};