import { readFile, writeFile } from 'fs/promises';
import { Answer, Question } from "../question/question.model";

const FILE_PATH = "./questions.json"

export const readQuestionsData = () => getParsedFileContent(FILE_PATH);

export const addQuestionsData = async (question: Question) => {
  const questions = await getParsedFileContent(FILE_PATH);
  questions.push(question);
  await writeFile(FILE_PATH, JSON.stringify(questions));
}

export const addAnswersData = async (questionId: string, answer: Answer) => {
  const questions = await getParsedFileContent(FILE_PATH);
  const questionIndex = questions.findIndex(question => question.id === questionId);
  const fetchedQuestion = questionIndex > -1 ? questions[questionIndex] : undefined;

  console.log('QUESTION:', fetchedQuestion)

  if (fetchedQuestion) {
    fetchedQuestion.answers.push(answer);
    questions[questionIndex] = fetchedQuestion;

    await writeFile(FILE_PATH, JSON.stringify(questions));
  }
}

export const getParsedFileContent = async (fileName: string) => {
  const fileContent = await readFile(fileName, { encoding: 'utf-8' });
  const questionsData: Question[] = JSON.parse(fileContent);
  return questionsData;
}


