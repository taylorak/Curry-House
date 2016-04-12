var curry = require('./curry');

function calculate (operand1) {
  return function(operator) {
    switch(operator) {
      case '+':
      case 'add':
        return function(operand2) {
          return operand1 + operand2;
        };
      case '-':
      case 'subtract':
        return function(operand2) {
          return operand1 - operand2;
        };
      case '*':
      case 'multiply':
        return function(operand2) {
          return operand1 * operand2;
        };
      case '/':
      case 'divide':
        return function(operand2) {
          return operand1 / operand2;
        };
      case '%':
      case 'modulo':
        return function(operand2) {
          return operand1 % operand2;
        };
      case '^':
      case 'power of':
        return function(operand2) {
          return Math.pow(operand1, operand2);
        };
    }
  };
}


function random (start) {
  return {
    to : function(end) {
      return Math.floor(Math.random() * (end - start)) + start;
    },
    toInclude : function() {
      return Math.floor(Math.random() * (end - start + 1)) + start;
    }
  };
}

function concat(string1, string2){
  return string1 + string2;
}

var prependGreeting = curry(concat, 'Hello ');

function add (operand1, operand2, operand3) {
  return operand1 + operand2 + operand3;
}

var add4and5 = curry(add, 4, 5);

function calculator(operation){
  return function(operand1, operand2){
    switch (operation) {
      case '+':
      case 'add':
        return  operand1 + operand2;
      case '-':
      case 'subtract':
        return operand2 - operand1;
      case '*':
      case 'multiply':
        return operand1 * operand2;
      case '/':
      case 'divide':
        return operand2 / operand1;
      case '%':
      case 'modulo':
        return operand2 % operand1;
      case '^':
      case 'power of':
        return Math.pow(operand2, operand1);
    }
  };
}

var add5 = curry(calculator('+'), 5);
var sub5 = curry(calculator('-'), 5);
var multiply5 = curry(calculator('*'), 5);
var divide5 = curry(calculator('/'), 5);
var mod5 = curry(calculator('%'), 5);
var pow3 = curry(calculator('^'), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};