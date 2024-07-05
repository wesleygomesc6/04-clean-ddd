import { Entity } from '@/core/entities/entity'
import { UniqueEnityId } from '@/core/entities/unique-entity-id'

export interface AnswerAttachmentProps {
  answerId: UniqueEnityId
  attachmentId: UniqueEnityId
}
export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
  get answerId() {
    return this.props.answerId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: AnswerAttachmentProps, id?: UniqueEnityId) {
    const attachment = new AnswerAttachment(props, id)
    return attachment
  }
}
