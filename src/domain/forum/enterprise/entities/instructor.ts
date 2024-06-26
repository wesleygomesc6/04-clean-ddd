import { Entity } from '@/core/entities/entity'
import { UniqueEnityId } from '@/core/entities/unique-entity-id'

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueEnityId) {
    const instructor = new Instructor(props, id)

    return instructor
  }

  get name() {
    return this.props.name
  }
}
