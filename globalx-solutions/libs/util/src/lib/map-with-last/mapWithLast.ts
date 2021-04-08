export function mapWithLast<T, R>(arr: Array<R>, func: (value: R, index: number, isLast: boolean) => T): Array<T> {
  return arr.map((value: R, index: number) => {
    const isLast: boolean = index === arr.length - 1;
    return func(value, index, isLast);
  });
}
