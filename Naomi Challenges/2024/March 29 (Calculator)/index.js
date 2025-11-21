/**
 * 
 * @param {String} expression 
 */
function calculatorAI(expression) {
  // Define operator precedence levels
  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
  };

  // Function to handle operations
  const performOperation = (/** @type {any[]} */ operands, /** @type {any[]} */ operators) => {
    const operator = operators.pop();
    const operand2 = operands.pop();
    const operand1 = operands.pop();

    switch (operator) {
      case '+':
        operands.push(operand1 + operand2);
        break;
      case '-':
        operands.push(operand1 - operand2);
        break;
      case '*':
        operands.push(operand1 * operand2);
        break;
      case '^':
        operands.push(operand1 ** operand2);
        break;
      case '/':
        if (operand2 === 0) {
          throw new Error("Division by zero");
        }
        operands.push(operand1 / operand2);
        break;
      default:
        throw new Error("Invalid operator");
    }
  };

  // Function to evaluate expression within parentheses
  const evaluateParentheses = (/** @type {string} */ expression) => {
    const parts = expression.split(' ');
    const operands = [];
    const operators = [];

    parts.forEach((/** @type {string} */ part) => {
      if (!isNaN(parseFloat(part))) {
        operands.push(parseFloat(part));
      } else if (part === '(') {
        operators.push(part);
      } else if (part === ')') {
        while (operators[operators.length - 1] !== '(') {
          performOperation(operands, operators);
        }
        operators.pop(); // Remove '('
      } else {
        while (operators.length > 0 && precedence[operators[operators.length - 1]] >= precedence[part]) {
          performOperation(operands, operators);
        }
        operators.push(part);
      }
    });

    while (operators.length > 0) {
      performOperation(operands, operators);
    }

    return operands.pop();
  };

  // Function to handle recursion and evaluate the expression
  const evaluate = (/** @type {string} */ expression) => {
    let result = expression;
    while (result.includes('(')) {
      const startIndex = result.lastIndexOf('(');
      const endIndex = result.indexOf(')', startIndex);
      const subExpression = result.substring(startIndex + 1, endIndex);
      const subResult = evaluateParentheses(subExpression);
      result = result.substring(0, startIndex) + subResult + result.substring(endIndex + 1);
    }
    return evaluateParentheses(result);
  };

  return evaluate(expression);
}


/**
 * 
 * 
 * @param {String} expression 
 */
function calculator(expression) {
  let result = 0;
  var parts = expression.trim().split(" ");
  let operand1 = parts[0];
  let operator = parts[1];
  let operand2 = parts[2];

  switch (operator) {
    case "+":
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case "-":
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case "*":
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case "/":
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    case "^":
      result = parseFloat(operand1) ** parseFloat(operand2);
      break;
  }
  return result;
}


/**
 * 
 * 
 * @param {String} expression 
 */
function calculatorHardCore(expression) {
  var parts = expression.split(" ");
  let currentOperand = 0;
  let currentOperator = "";
  let subExpression = "";
  let isPartOfSub = false;
  let result = 0;
  parts.forEach(part => {
    if (!Number.isNaN(parseFloat(part)) && !isPartOfSub) {
      currentOperand = parseFloat(part);
    }
    else if (!Number.isNaN(parseFloat(part)) && isPartOfSub) {
      subExpression += part;
    }

    else if ((part == "+" || part == "-" || part == "*" || part == "/") && isPartOfSub == false) {
      currentOperator = part;
    }
    else if ((part == "+" || part == "-" || part == "*" || part == "/") && isPartOfSub == true) {
      subExpression += part;
    }
    else if (part == "(" && !isPartOfSub) {
      isPartOfSub = true;
    }
    else if (part == ")") {
      result 
    }
  })

  return result;
}


console.log(calculator("5 + 5")); 