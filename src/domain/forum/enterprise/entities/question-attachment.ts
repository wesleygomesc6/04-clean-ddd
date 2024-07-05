import { Entity } from '@/core/entities/entity'
import { UniqueEnityId } from '@/core/entities/unique-entity-id'

export interface QuestionAttachmentProps {
  questionId: UniqueEnityId
  attachmentId: UniqueEnityId
}
export class QuestionAttachment extends Entity<QuestionAttachmentProps> {
  get questionId() {
    return this.props.questionId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: QuestionAttachmentProps, id?: UniqueEnityId) {
    const attachment = new QuestionAttachment(props, id)
    return attachment
  }
}
