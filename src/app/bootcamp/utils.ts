
export type NameDecorator = (x: string) => string;
const identity: NameDecorator = (n) => n;

export function formatName(first: string, last: string, fn: NameDecorator = identity): string {
  const fullName = `${last}, ${first}`;
  return fn(fullName);
}


