/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition: returns the sum of two numbers
 *   subtract - Subtraction: returns the difference between two numbers
 *   multiply - Multiplication: returns the product of two numbers
 *   divide   - Division: returns the quotient of two numbers (handles divide-by-zero)
 *   modulo   - Modulo: returns the remainder of dividing two numbers
 *   power    - Power: returns a raised to the power of b
 *   sqrt     - Square Root: returns the square root of a number
 *
 * Usage: node calculator.js <operation> <num1> <num2>
 * Example: node calculator.js add 4 2
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent divide-by-zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Power: returns a raised to the power of b
function power(a, b) {
  return Math.pow(a, b);
}

// Square root: returns the square root of a
// Throws an error if a is negative
function sqrt(a) {
  if (a < 0) throw new Error('Square root of negative number');
  return Math.sqrt(a);
}

// CLI interface
if (require.main === module) {
  const [,, operation, num1, num2] = process.argv;

  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (!operation || isNaN(a) || isNaN(b)) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  let result;
  try {
    switch (operation) {
      case 'add':
        result = add(a, b);
        break;
      case 'subtract':
        result = subtract(a, b);
        break;
      case 'multiply':
        result = multiply(a, b);
        break;
      case 'divide':
        result = divide(a, b);
        break;
      case 'modulo':
        result = modulo(a, b);
        break;
      case 'power':
        result = power(a, b);
        break;
      default:
        console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, modulo, or power.`);
        process.exit(1);
    }
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };
