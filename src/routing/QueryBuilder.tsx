/**
 * Construct a URL query string using the builder pattern.
 */
export class QueryBuilder<Params> {
  constructor(private readonly params: string[]) {}

  public append<K extends keyof Params>(name: K, value: Params[K]): QueryBuilder<Params> {
    return new QueryBuilder(this.params.concat(`${encodeURIComponent(name)}=${encodeURIComponent(`${value}`)}`));
  }

  public toString(): string {
    return this.params.length > 0 ? `?${this.params.join("&")}` : "";
  }
}

export function queryBuilder<T>() {
  return new QueryBuilder<T>([]);
}
