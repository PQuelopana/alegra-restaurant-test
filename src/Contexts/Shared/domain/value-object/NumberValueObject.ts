export abstract class NumberValueObject {
  private _value: number;
  
  constructor(value: number) {
    this._value = value;
  }

  equalsTo(other: NumberValueObject): boolean {
    return this._value === other._value;
  }

  isEqualsAndBiggerThan(other: NumberValueObject): boolean {
    return this._value >= other._value;
  }

  isBiggerThan(other: NumberValueObject): boolean {
    return this._value > other._value;
  }

  isEqualsAndLessThan(other: NumberValueObject): boolean {
    return this._value <= other._value;
  }

  isLessThan(other: NumberValueObject): boolean {
    return this._value < other._value;
  }

  subtract(other: NumberValueObject): void {
    this._value -= other._value
  }

  add(other: NumberValueObject): void {
    this._value += other._value
  }

  getSubtract(other: NumberValueObject): NumberValueObject {
    return { ...this, _value: this._value - other._value }
  }

  get value(): number {
    return this._value;
  }
}
