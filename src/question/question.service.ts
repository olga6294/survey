import { QuestionRepository } from "./question.repository";
import { CreateAnswer, CreateQuestion } from "./question.model";

export class QuestionService {

    constructor(private questionRepository: QuestionRepository) {
    }

    getAll = () => this.questionRepository.getAll();

    get = (questionId: string) => this.questionRepository.getQuestionById(questionId);

    add = (question: CreateQuestion) => this.questionRepository.addQuestion(question);

    getAnswers = (questionId: string) => this.questionRepository.getAnswers(questionId);

    getAnswer = (questionId: string, answerId: string) => this.questionRepository.getAnswer(questionId, answerId);

    addAnswer = (questionId: string, answer: CreateAnswer) => this.questionRepository.addAnswer(questionId, answer);

}

