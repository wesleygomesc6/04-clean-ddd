import { Entity } from '@/core/entities/entity'
import { UniqueEnityId } from '@/core/entities/unique-entity-id'

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEnityId) {
    const student = new Student(props, id)

    return student
  }

  get name() {
    return this.props.name
  }
}
