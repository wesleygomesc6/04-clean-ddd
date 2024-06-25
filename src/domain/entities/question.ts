import { UniqueEnityId } from "@/core/entities/unique-entity-id"
import { Slug } from "./value-objects/slug"
import { Entity } from "@/core/entities/entity"

interface QuestionProps {
    authorId: UniqueEnityId
    bestAnswerId?: UniqueEnityId
    title: string
    content: string
    slug: Slug
    createdAt: Date
    updatedAt: Date
}

export class Question extends Entity<QuestionProps> {

}
