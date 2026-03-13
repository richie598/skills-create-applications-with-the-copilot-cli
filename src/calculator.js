// Calculator - supports: addition, subtraction, multiplication, division,
//                         modulo, exponentiation, and square root

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero
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

// Exponentiation: returns a raised to the power of b
function power(a, b) {
  return Math.pow(a, b);
}

// Square Root: returns the square root of a
// Throws an error if a is negative
function sqrt(a) {
  if (a < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(a);
}

// CLI interface: node calculator.js <operation> <num1> [num2]
if (require.main === module) {
  const [,, operation, arg1, arg2] = process.argv;
  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  try {
    let result;
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
      case 'sqrt':
        result = sqrt(a);
        break;
      default:
        console.error('Unknown operation. Use: add, subtract, multiply, divide, modulo, power, sqrt');
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };
