import { Request, Response, Router } from "express";
import { QuestionService } from "./question.service";
import { CreateAnswer, CreateQuestion } from "./question.model";

export class QuestionController {
    router = Router();

    constructor(private questionService: QuestionService) {
        this.router.get('/questions', async (request: Request, response: Response) => this.getAll().then(questions => response.json(questions)));
        this.router.get('/questions/:questionId', (request: Request, response: Response) => this.get(request.params.questionId).then(question => response.json(question)));
        this.router.post('/questions', (request: Request, response: Response) => this.add(request.body).then(() => response.sendStatus(201)));
        this.router.get('/questions/:questionId/answers', (request: Request, response: Response) => this.getAnswers(request.params.questionId).then(answers => response.json(answers)));
        this.router.post('/questions/:questionId/answers', (request: Request, response: Response) => this.addAnswer(request.params.questionId, request.body).then(() => response.sendStatus(201)));
        this.router.get('/questions/:questionId/answers/:answerId', (request: Request, response: Response) => this.getAnswer(request.params.questionId, request.params.answerId).then(answer => response.json(answer)));
    }

    getAll() {
        return this.questionService.getAll();
    }

    get(questionId: string) {
        return this.questionService.get(questionId);
    }

    add(question: CreateQuestion) {
        return this.questionService.add(question);
    }

    getAnswers(questionId: string) {
        return this.questionService.getAnswers(questionId);
    }

    addAnswer(questionId: string, answer: CreateAnswer) {
        return this.questionService.addAnswer(questionId, answer);
    }

    getAnswer(questionId: string, answerId: string) {
        return this.questionService.getAnswer(questionId, answerId);
    }
}