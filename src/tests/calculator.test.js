const { add, subtract, multiply, divide, modulo, power, sqrt } = require('../calculator');

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
  });

  test('adds with zero', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('adds decimals', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4);
  });
});

describe('subtract', () => {
  test('subtracts two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts resulting in a negative number', () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  test('subtracts with zero', () => {
    expect(subtract(5, 0)).toBe(5);
  });

  test('subtracts decimals', () => {
    expect(subtract(5.5, 2.5)).toBeCloseTo(3);
  });
});

describe('multiply', () => {
  test('multiplies two positive numbers', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test('multiplies two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  test('multiplies decimals', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

describe('divide', () => {
  test('divides two positive numbers', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(1, 4)).toBeCloseTo(0.25);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('divides a negative number', () => {
    expect(divide(-10, 2)).toBe(-5);
  });
});

describe('modulo', () => {
  test('returns remainder of two positive numbers', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('returns remainder with negative dividend', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero');
  });

  test('returns remainder with decimals', () => {
    expect(modulo(10.5, 3)).toBeCloseTo(1.5);
  });
});

describe('power', () => {
  test('raises a number to a positive exponent', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of zero', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to the power of one', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('raises a negative number to an even exponent', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises zero to a positive exponent', () => {
    expect(power(0, 5)).toBe(0);
  });
});

describe('sqrt', () => {
  test('returns square root of a positive number', () => {
    expect(sqrt(9)).toBe(3);
  });

  test('returns square root of 0', () => {
    expect(sqrt(0)).toBe(0);
  });

  test('returns square root of a non-perfect square', () => {
    expect(sqrt(2)).toBeCloseTo(1.4142135623);
  });

  test('throws an error for negative numbers', () => {
    expect(() => sqrt(-1)).toThrow('Cannot take square root of a negative number');
  });

  test('returns square root of a large number', () => {
    expect(sqrt(100)).toBe(10);
  });
});
