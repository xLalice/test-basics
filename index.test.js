import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './index';

test('capitalize capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('test')).toBe('Test');
});

test('reverseString reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('test')).toBe('tset');
});

test('calculator can add two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-1, 4)).toBe(3);
});

test('calculator can subtract two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(1, 4)).toBe(-3);
});

test('calculator can divide two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(7, 0)).toBe('Cannot divide by zero'); // Test division by zero
});

test('calculator can multiply two numbers', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.multiply(-2, 5)).toBe(-10);
});

test('caesarCipher shifts characters with a positive shift value', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher shifts characters with a negative shift value', () => {
  expect(caesarCipher('bcd', -1)).toBe('abc');
  expect(caesarCipher('abc', -3)).toBe('xyz');
});

test('caesarCipher wraps from z to a', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza');
  expect(caesarCipher('abc', -1)).toBe('zab');
});

test('caesarCipher preserves case', () => {
  expect(caesarCipher('AbC', 1)).toBe('BcD');
  expect(caesarCipher('XyZ', -3)).toBe('UvW');
});

test('caesarCipher handles punctuation and non-alphabetic characters', () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  expect(caesarCipher('12345', 1)).toBe('12345'); // Numbers remain unchanged
  expect(caesarCipher('!@#$%', 2)).toBe('!@#$%'); // Special characters remain unchanged
});

test("analyzeArray returns the avg,min,max,length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6

    })

    expect(analyzeArray([])).toEqual({
        average: 0,
        min: undefined,
        max: undefined,
        length: 0
    })

    expect(analyzeArray([42])).toEqual({
        average: 42,
        min: 42,
        max: 42,
        length: 1
    })

    expect(analyzeArray([-1,-2,-3,-4])).toEqual({
        average: -2.5,
        min: -4,
        max: -1,
        length: 4
    })
})
