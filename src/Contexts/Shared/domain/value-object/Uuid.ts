import { v4 } from 'uuid';
import validate from 'uuid-validate'
import { InvalidArgumentError } from './InvalidArgumentError'

export class Uuid {
  constructor(readonly value: string) {
    this.ensureIsValidUuid(value)
  }

  static random(): Uuid {
    return new Uuid(v4());
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value ${id}`)
    }
  }

  isEqualTo(other: Uuid) {
    return this.value === other.value
  }

  toString(): string {
    return this.value
  }
}
