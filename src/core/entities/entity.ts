import { UniqueEnityId } from './unique-entity-id'

export abstract class Entity<Props> {
  private _id: UniqueEnityId
  protected props: Props

  get id() {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueEnityId) {
    this.props = props
    this._id = id ?? new UniqueEnityId()
  }
}
