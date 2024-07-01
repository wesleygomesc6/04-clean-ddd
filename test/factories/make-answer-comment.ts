import { faker } from '@faker-js/faker'
import { UniqueEnityId } from '@/core/entities/unique-entity-id'
import {
  AnswerComment,
  AnswerCommentProps,
} from '@/domain/forum/enterprise/entities/answer-comment'

export function makeAnswerComment(
  override: Partial<AnswerCommentProps> = {},
  id?: UniqueEnityId,
) {
  const answerComment = AnswerComment.create(
    {
      authorId: new UniqueEnityId(),
      answerId: new UniqueEnityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answerComment
}
