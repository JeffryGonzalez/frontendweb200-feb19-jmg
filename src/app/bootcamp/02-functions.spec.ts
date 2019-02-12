import { compose } from './compose';
import { formatName } from './utils';


describe('functions', () => {

  it('arbitrary number of parameters', () => {

    // Rest operator.
    function add(a: number, b: number, ...rest: number[]): number {
      const firstTwo = a + b;
      return rest.reduce((prev, next) => prev + next, firstTwo);
    }

    expect(add(2, 2)).toBe(4);
    expect(add(2, 2, 2)).toBe(6);
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });

  describe('function literals', () => {
    it('has a few kinds', () => {

      // Named Function
      expect(add(3, 2)).toBe(5);
      // Anonymous Functions
      // IIFE - old skool. don't need these.
      (function() {
        console.log('In the IIFE');
        const name = 'Pete!';
      })();

      // An anonymous function with a variable referring to it.
      const multiply = (function(a: number, b: number) { return a * b; });

      expect(multiply(3, 5)).toBe(15);


      const divide = (a: number, b: number) => a / b;
      expect(divide(10, 5)).toBe(2);


      function add(a: number, b: number): number {
        return a + b;
      }

    });
  });
});

describe('higher order functions', () => {
  it('an example', () => {

    expect(formatName('Han', 'Solo')).toBe('Solo, Han');

    const makeNameUpper = (s: string) => s.toUpperCase();

    expect(
      formatName('Han', 'Solo', makeNameUpper)).toBe('SOLO, HAN');

    const makeFlashy = (s: string) => `***${s}***`;

    expect(formatName('Han', 'Solo', makeFlashy)).toBe('***Solo, Han***');

    // const doBoth = (s: string) => makeFlashy(makeNameUpper(s));
    const doBoth = compose(makeNameUpper, makeFlashy);

    expect(formatName('Han', 'Solo', doBoth)).toBe('***SOLO, HAN***');
  });
});

describe('practical', () => {

  interface Payments {
    date: string;
    amount: number;
    customer: string;
  }

  const payments: Payments[] = [
    { date: '1/1/2018', amount: 300, customer: 'Bob' },
    { date: '1/8/2018', amount: 615.23, customer: 'Bob' },
    { date: '1/19/2018', amount: 10082, customer: 'Sue' },
    { date: '2/2/2018', amount: 12, customer: 'Bob' },
  ];

  it('Your practice:', () => {

    // Write some code here that gives me the answer
    // the total of all the payments by just bob.

    //
    const byCustomer = (name: string): (payments: Payments) => boolean => {
      return (p) => p.customer === name;
    };

    function isBob(payment: Payments) {
      return payment.customer === 'Bob';
    }
    interface Answer {
      total: number;
      numberOfPayments: number;
    }

    const initialState: Answer = {
      total: 0,
      numberOfPayments: 0
    };
    const byBob = byCustomer('Bob');
    const bySue = byCustomer('Sue');

    const answer: Answer = payments
      .filter(byBob)
      .reduce((prev: Answer, next: Payments) => ({
        total: prev.total + next.amount,
        numberOfPayments: prev.numberOfPayments += 1
      }), initialState);

    expect(answer.total).toBe(927.23);
    expect(answer.numberOfPayments).toBe(3);


  });
});


