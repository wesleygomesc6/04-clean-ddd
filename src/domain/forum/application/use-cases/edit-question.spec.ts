import { InMemoryQuestionRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from 'test/factories/make-question'
import { UniqueEnityId } from '@/core/entities/unique-entity-id'
import { EditQuestionUseCase } from './edit-questions'

let inMemoryQuestionsRepository: InMemoryQuestionRepository
let sut: EditQuestionUseCase

describe('Edit Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionRepository()
    sut = new EditQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be albe to edit a question', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEnityId('author-1'),
      },
      new UniqueEnityId('question-1'),
    )

    await inMemoryQuestionsRepository.create(newQuestion)

    await sut.execute({
      questionId: newQuestion.id.toString(),
      authorId: 'author-1',
      title: 'Pergunta alterada',
      content: 'Alteração do conteudo',
    })

    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
      title: 'Pergunta alterada',
      content: 'Alteração do conteudo',
    })
  })

  it('should not be albe to edit a question from another user', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEnityId('author-1'),
      },
      new UniqueEnityId('question-1'),
    )

    await inMemoryQuestionsRepository.create(newQuestion)

    expect(() => {
      return sut.execute({
        questionId: newQuestion.id.toString(),
        authorId: 'author',
        title: 'Pergunta alterada',
        content: 'Alteração do conteudo',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
