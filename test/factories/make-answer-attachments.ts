import { UniqueEnityId } from '@/core/entities/unique-entity-id'
import {
  AnswerAttachment,
  AnswerAttachmentProps,
} from '@/domain/forum/enterprise/entities/answer-attachment'

export function makeAnswerAttachment(
  override: Partial<AnswerAttachmentProps> = {},
  id?: UniqueEnityId,
) {
  const answerAttachment = AnswerAttachment.create(
    {
      answerId: new UniqueEnityId(),
      attachmentId: new UniqueEnityId(),
      ...override,
    },
    id,
  )

  return answerAttachment
}
