import { Entity } from "@/core/entities/entity"
import { UniqueEnityId } from "@/core/entities/unique-entity-id"

interface AnswerProps {
    authorId: UniqueEnityId
    questionId: UniqueEnityId
    content: string
    createdAt: Date
    updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
    get content() {
        return this.props.content
    }
}
