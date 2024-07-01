import { faker } from '@faker-js/faker'
import { UniqueEnityId } from '@/core/entities/unique-entity-id'
import {
  QuestionComment,
  QuestionCommentProps,
} from '@/domain/forum/enterprise/entities/question-comment'

export function makeQuestionComment(
  override: Partial<QuestionCommentProps> = {},
  id?: UniqueEnityId,
) {
  const questionComment = QuestionComment.create(
    {
      authorId: new UniqueEnityId(),
      questionId: new UniqueEnityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return questionComment
}
