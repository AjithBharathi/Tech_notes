const javascript = [
  {
    topic: 'What is Hoisting',
    points: [
      "Hoisting is JavaScript’s default behavior of moving declarations (not initializations) to the top of their scope during the compilation phase. Function declarations and var variables are hoisted, but let and const are hoisted differently and stay in the 'temporal dead zone'.",
    ],
  },
  {
    topic: 'What is Closure',
    points: [
      "A closure is a function that has access to its own scope, the outer function's scope, and the global scope — even after the outer function has finished executing.",
      "A closure in JavaScript is a function that 'remembers' the variables from its lexical scope even when the function is executed outside that scope. In simple terms, a closure allows a function to access variables defined outside of its current scope — specifically, from the scope in which it was created.",
      'h:: Uses of Closures:',
      'Data hiding / encapsulation',
      'Creating private variables',
      'Maintaining state in async code (e.g., setTimeout)',
      'h:: Disadvantages:',
      'Closures are powerful but can lead to memory leaks if not handled carefully—especially when unintentionally holding references to large objects or DOM elements in long-lived closures.',
    ],
  },
];
export default javascript;
