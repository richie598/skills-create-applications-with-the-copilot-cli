/**
 * Unit tests for calculator.js
 *
 * Covers all seven supported operations:
 *   - add      (addition)
 *   - subtract (subtraction)
 *   - multiply (multiplication)
 *   - divide   (division)
 *   - modulo   (remainder)
 *   - power    (exponentiation)
 *   - sqrt     (square root)
 *
 * Includes examples and edge cases such as division by zero,
 * negative numbers, decimals, and zero inputs.
 */

const { add, subtract, multiply, divide, modulo, power, sqrt } = require('../calculator');

// --- Addition ---
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });

  test('adds zero to a number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// --- Subtraction ---
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts to a negative result', () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test('subtracts zero from a number', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// --- Multiplication ---
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('multiplies 45 * 2 to equal 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies by zero', () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test('multiplies negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// --- Division ---
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('divides 20 / 5 to equal 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(9, 3)).toBe(3);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides zero by a number', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero should throw
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// --- Modulo ---
describe('modulo', () => {
  // Example from image: 5 % 2 = 1
  test('modulo 5 % 2 to equal 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo with no remainder', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('modulo with a larger divisor', () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test('modulo with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo with decimal numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test('throws an error when modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });
});

// --- Power ---
describe('power', () => {
  // Example from image: 2 ^ 3 = 8
  test('power 2 ^ 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with exponent of 0', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('power with exponent of 1', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('power with negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('power with base of 0', () => {
    expect(power(0, 5)).toBe(0);
  });

  test('power with negative base and even exponent', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('power with negative base and odd exponent', () => {
    expect(power(-3, 3)).toBe(-27);
  });
});

// --- Square Root ---
describe('sqrt', () => {
  // Example from image: √16 = 4
  test('square root of 16 to equal 4', () => {
    expect(sqrt(16)).toBe(4);
  });

  test('square root of 0', () => {
    expect(sqrt(0)).toBe(0);
  });

  test('square root of 1', () => {
    expect(sqrt(1)).toBe(1);
  });

  test('square root of a perfect square', () => {
    expect(sqrt(81)).toBe(9);
  });

  test('square root of a non-perfect square', () => {
    expect(sqrt(2)).toBeCloseTo(1.4142);
  });

  test('square root of a decimal', () => {
    expect(sqrt(0.25)).toBeCloseTo(0.5);
  });

  test('throws an error for square root of a negative number', () => {
    expect(() => sqrt(-1)).toThrow('Square root of negative number');
  });

  test('throws an error for square root of a large negative number', () => {
    expect(() => sqrt(-100)).toThrow('Square root of negative number');
  });
});
