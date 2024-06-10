// test/test.ts
// import test from 'ava';

// Define your test cases using the `test` function
// test('example test', t => {
//     const actual = 1 + 2;
//     const expected = 3;
//     t.is(actual, expected);
// });

// sum.test.js
//import { sum } from './sum'
// Define your test cases using the `test` function


// sum.js
import { expect, test } from 'vitest'
export function sum(a: number, b: number) {
    return a + b
}
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)  
})
