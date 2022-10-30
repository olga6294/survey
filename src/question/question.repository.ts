import { readQuestionsData, addQuestionsData, addAnswersData } from '../db/question'
import { Question, Answer, CreateQuestion, CreateAnswer } from "./question.model";
import uuid from "uuid";

export class QuestionRepository {

    getAll = (): Promise<Question[]> => readQuestionsData();

    getQuestionById = async (questionId: string): Promise<Question | undefined> =>
        readQuestionsData()
            .then(questions => {
                const fetchedQuestion = questions.find(question => question.id === questionId);
                return fetchedQuestion ? fetchedQuestion : undefined;
            });

    addQuestion = async (question: CreateQuestion) => {
        const questionData = {
            id: uuid.v4(),
            ...question,
            answers: []
        }
        return addQuestionsData(questionData);
    }

    getAnswers = async (questionId: string): Promise<Answer[]> => this.getQuestionById(questionId)
        .then(question => question ? question.answers : []);

    getAnswer = async (questionId: string, answerId: string) => this.getAnswers(questionId)
        .then(answers => answers.find(answer => answer.id === answerId));

    addAnswer = async (questionId: string, answer: CreateAnswer) => {
        const answerData = {
            id: uuid.v4(),
            ...answer
        }
        return addAnswersData(questionId, answerData);
    }

}

