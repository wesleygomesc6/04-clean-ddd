import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer';

const fakeAwnswersRepository: AnswersRepository = {
    create: async (answer: Answer): Promise<void> => {
        return;
    }
}

test('Create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAwnswersRepository)

    const answer = await answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'Nova resposta'
    })

    expect(answer.content).toEqual('Nova resposta')
})