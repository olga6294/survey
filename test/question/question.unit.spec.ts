import { writeFile, rm } from 'fs/promises';
import { getParsedFileContent } from '../../src/db/question';
import { testQuestions } from "./utils";

describe('question repository', () => {
  const TEST_QUESTIONS_FILE_PATH = './test/test-questions.json'

  beforeEach(async () => {
    await writeFile(TEST_QUESTIONS_FILE_PATH, JSON.stringify([]));
  });

  afterEach(async () => {
    await rm(TEST_QUESTIONS_FILE_PATH)
  });

  test('should return a list of 0 questions', async () => {
    const questions = await getParsedFileContent(TEST_QUESTIONS_FILE_PATH);
    expect(questions).toHaveLength(0)
  });

  test('should return a list of 2 questions', async () => {
    await writeFile(TEST_QUESTIONS_FILE_PATH, JSON.stringify(testQuestions))
    expect(await getParsedFileContent(TEST_QUESTIONS_FILE_PATH)).toHaveLength(2)
  });
})
