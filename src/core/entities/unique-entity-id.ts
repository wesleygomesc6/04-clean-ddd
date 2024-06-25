import { randomUUID } from "node:crypto"

export class UniqueEnityId {
    private value: string

    toString() {
        return this.value
    }

    toValue() {
        return this.value
    }

    constructor(value?: string) {
        this.value = value ?? randomUUID()
    }
}