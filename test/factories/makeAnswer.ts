import { faker } from '@faker-js/faker'
import { UniqueEnityId } from '@/core/entities/unique-entity-id'
import { Answer, AnswerProps } from '@/domain/forum/enterprise/entities/answer'

export function makeAnswer(
  override: Partial<AnswerProps> = {},
  id?: UniqueEnityId,
) {
  const answer = Answer.create(
    {
      authorId: new UniqueEnityId(),
      questionId: new UniqueEnityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answer
}
