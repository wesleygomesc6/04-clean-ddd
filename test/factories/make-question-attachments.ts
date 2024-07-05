import { UniqueEnityId } from '@/core/entities/unique-entity-id'
import {
  QuestionAttachment,
  QuestionAttachmentProps,
} from '@/domain/forum/enterprise/entities/question-attachment'

export function makeQuestionAttachment(
  override: Partial<QuestionAttachmentProps> = {},
  id?: UniqueEnityId,
) {
  const questionAttachment = QuestionAttachment.create(
    {
      questionId: new UniqueEnityId(),
      attachmentId: new UniqueEnityId(),
      ...override,
    },
    id,
  )

  return questionAttachment
}
