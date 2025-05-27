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
  {
    topic: 'what is Debouncing?',
    points: [
      'Debouncing ensures a function runs only after a certain amount of inactivity. It waits for the user to stop triggering the event, like when typing in a search box.',

    ]

  },
  {
    topic: 'What is Throttling?',
    points: [
      'Throttling ensures a function runs at most once every X milliseconds, no matter how many times the event is triggered. It\'s great for limiting high-frequency actions like scrolling or mouse movement.'
    ]
  },
  {
    topic: 'What is Memoization?',
    points: [
      'Memoization is an optimization technique where we store the results of expensive function calls and reuse them when the same inputs occur again instead of recomputing.'
    ]
  },
  {
    topic: 'What is a generator function?',
    points: [
      'A generator function is a special type of function that can pause its execution and later resume from where it left off. It uses the `function*` syntax and yields values using the `yield` keyword.',
      'Generators are useful for creating iterators, handling asynchronous operations, or managing state in a more controlled manner.'
    ]
  },
];
export default javascript;
