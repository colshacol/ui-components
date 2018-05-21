export default class CacheComputed<Input, Value = string> {
  private readonly cache: { [key: string]: Value } = {};

  constructor(private readonly computeKey: (input: Input) => string, private readonly computeValue: (input: Input) => Value) {}

  public get(input: Readonly<Input>): Readonly<Value> {
    const key = this.computeKey(input);
    if (key in this.cache === false) {
      const value = this.computeValue(input);
      this.cache[key] = value;
      return value;
    }
    return this.cache[key];
  }
}
