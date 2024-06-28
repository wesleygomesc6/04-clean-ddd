import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/makeAnswer'
import { InMemoryQuestionRepository } from 'test/repositories/in-memory-questions-repository'
import { ChooseQuestionBestAnswerUseCase } from './choose-question-best-answer'
import { makeQuestion } from 'test/factories/make-question'
import { UniqueEnityId } from '@/core/entities/unique-entity-id'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoriQuestionsRepository: InMemoryQuestionRepository
let sut: ChooseQuestionBestAnswerUseCase

describe('Choose Quesiton Best Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    inMemoriQuestionsRepository = new InMemoryQuestionRepository()
    sut = new ChooseQuestionBestAnswerUseCase(
      inMemoriQuestionsRepository,
      inMemoryAnswersRepository,
    )
  })

  it('should be albe to choose question best answer', async () => {
    const question = makeQuestion()
    const answer = makeAnswer({
      questionId: question.id,
    })

    await inMemoriQuestionsRepository.create(question)

    await inMemoryAnswersRepository.create(answer)

    await sut.execute({
      answerId: answer.id.toString(),
      authorId: question.authorId.toString(),
    })

    expect(inMemoriQuestionsRepository.items[0].bestAnswerId).toEqual(answer.id)
  })

  it('should not be albe to choose another user question best answer', async () => {
    const question = makeQuestion({
      authorId: new UniqueEnityId('author-1'),
    })
    const answer = makeAnswer({
      questionId: question.id,
    })

    await inMemoriQuestionsRepository.create(question)

    await inMemoryAnswersRepository.create(answer)

    expect(() => {
      return sut.execute({
        answerId: answer.id.toString(),
        authorId: 'outro-author',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
