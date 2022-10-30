import express from "express";
import { QuestionRepository } from "./question/question.repository";
import { QuestionService } from "./question/question.service";
import { QuestionController } from "./question/question.controller";
import { urlencoded, json } from 'body-parser';

export const app = express()

const questionRepository = new QuestionRepository();
const questionService = new QuestionService(questionRepository);
const questionController = new QuestionController(questionService);

const controllers = [ questionController.router ]

app.use(urlencoded({ extended: true }))
app.use(json())
app.use("/", controllers)
