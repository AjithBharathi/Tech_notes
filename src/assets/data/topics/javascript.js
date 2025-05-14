const javascript = [
  {
    topic: 'JAVASCRIPT RUNTIME',
    points: [
      'Call Stack',
      'Memory Heap',
      'Event Loop',
      'Web APIs',
      'Task Queue',
      'Micro Task',
      'Callback Queue',
    ],
  },
  {
    topic: 'VAR, LET, CONST',
    points: [],
  },
  {
    topic: 'SCOPES',
    points: [
      'JavaScript Scope is the area where a variable (or function) exists and is accessible.',
      'We can layer the scope in a system which means the child scope can access the parent scope but not vice-versa.',
      'h:: Types of Scopes',
      'global scope',
      'function/Local scope',
      'block scope',
      'h:: Global Scope',
      'Variables accessible everywhere in the code.',
      'In a JavaScript program, global variables can be accessed from anywhere.',
      'Declared outside any function or block.',
      `code::
      var a = 10; console.log(a);
      `,
      'h:: Function Scope',
      'Variables accessible only inside the function where they are declared.',
      `code::
      function test() { var b = 20; }
      `,
      'h:: Block Scope',
      'Variables accessible only inside a block ({}) when declared with let or const.',
      'Created with {} (blocks like if, for, while).',
      'let and const are block-scoped; var is NOT block-scoped.',
      `code::
      if (true) { let c = 30; }
      `,
      'h:: Module Scope',
      'Variables inside a module file are private to that module.',
      'In ES6 modules (.js files using import/export), variables are scoped to the module.',
      'ex: (Using import/export syntax)',
    ],
    links: [],
  },
  {
    topic: 'PRIMITIVE TYPES VS REFERENCE TYPES',
    points: [
      'h:: PRIMITIVE TYPES:',
      'Immutable',
      'Stored in stack memory',
      'Stored by value',
      'changes affect original',
      'Types: String, Number, Boolean, Undefined, Null, Symbol, BigInt',
      `code::
          let a = 10;
          let b = a;     // b gets a *copy* of a
          b = 20;
          
          console.log(a); // 10
          console.log(b); // 20      

          // b is a copy of a. Changing b does not affect a—each holds a separate value.
      `,
      'h:: REFERENCE TYPES:',
      'Mutable (by default)',
      'Stored in heap memory, with reference in stack',
      'Stored by reference',
      'changes not affect original',
      'Types: Object, Array, Function, Date, etc.',
      `code::
          let obj1 = { name: "Alice" };
          let obj2 = obj1;  // obj2 is a reference to obj1
          
          obj2.name = "Bob";
          
          console.log(obj1.name); // Bob — obj1 is also changed      

          // Both obj1 and obj2 point to the same object in memory. Changing one affects the other.
      `,
    ],
  },
  {
    topic: 'LEXICAL SCOPE',
    points: [
      "able to call the parent scope's variable from the inner scope",
      'Inner functions have access to variables declared in their outer functions based on their physical location in the code.',
      'Lexical = “based on the location in source code.”',
      `code::
      function outer() {
        let outerVar = "I'm outside!";
      
        function inner() {
          console.log(outerVar); // ✅ inner can access outerVar
        }
      
        inner();
      }
      
      outer();
      `,
      'inner() can access outerVar because it is written inside outer().',
      'Even if inner() is called elsewhere later, it remembers where it was originally written.',
      `code::
      let globalVar = "global";

      function parent() {
        let parentVar = "parent";

        function child() {
          console.log(globalVar); // "global"
          console.log(parentVar); // "parent"
        }

        return child;
      }

      let childFunction = parent();
      childFunction();
      `,
      'Even though childFunction is called outside of parent, it still remembers parentVar because of Lexical Scope!',
      'hr::',
      'h:: Lexical Scope vs Dynamic Scope',
      'JavaScript uses Lexical Scope (not Dynamic Scope).',
      'In Dynamic Scope (used in some old languages), variable access depends on how the function is called, not where it’s written. (JavaScript doesn’t do this.)',
    ],
  },
  {
    topic: 'CLOSURE',
    points: [
      'A function that “remembers” variables from its outer scope even after the outer function has finished executing.',
      'Closure = Function + its remembered Lexical Environment',
      `code::
      function outer() {
        let name = "Alice";
      
        function inner() {
          console.log("Hello, " + name);
        }
      
        return inner;
      }
      
      const greet = outer(); // outer() runs, inner() is returned
      greet(); // "Hello, Alice"
      `,
      'inner() remembers name, even though outer() is already finished!',
      'h:: Key Points:',
      'Created when - A function is defined inside another function.',
      "Remembers - Variables from the outer function's scope.",
      'Lives longer - Closure lets a function â€œkeep aliveâ€ its outer variables even after outer scope is gone.',
      'Common Use Cases - Data hiding, currying, factory functions, event listeners, etc.',
    ],
  },
  {
    topic: 'HOISTING',
    points: [
      'Hoisting is JavaScript’s behavior of moving declarations (variables and functions) to the top of their scope during the compilation phase, before the code is executed.',
      'Declarations are moved up (not the actual code).',
      'Initializations stay where they are.',
      'hr::',
      'Declarations are hoisted (functions, var variables).',
      'Assignments/initializations are not hoisted.',
      'h::',
      'h:: Variable Hoisting (var)',
      `code::
      console.log(a); // undefined
      var a = 10;
      console.log(a); // 10
      `,
      `code::
      var a;
      console.log(a); // undefined
      a = 10;
      console.log(a); // 10
      `,
      'var is hoisted and initialized as undefined.',
      'h:: Function Hoisting',
      `code::
      greet(); // "Hello!"

      function greet() {
        console.log("Hello!");
      }
      `,
      'Function Declarations are fully hoisted (both name and body).',
      `code::
      greet(); // ❌ Error: greet is not a function

      var greet = function() {
        console.log("Hi!");
      };
      `,
      'Function Expressions (like assigning to a var) behave like normal variables — only the variable name is hoisted (initialized to undefined), not the function body.',
      'hr::',
      'h:: Hoisting Behavior by Type',
      'var → hoisted, initialized to undefined',
      'let - let / const → hoisted, but not initialized (TDZ error)',
      'function declaration → hoisted with full body',
      'Function Declaration - Hoisted (Yes (fully)) - Initialized? (Yes)',
      'function expression → variable hoisted, function not',
      'hr::',
      'h:: Important: Temporal Dead Zone (TDZ)',
      'let and const are also hoisted but are not accessible before their declaration.',
      'Accessing them early throws an error.',
      `code::
      console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
      let b = 20;
      `,
      'TDZ is the time between the start of the scope and the line where the variable is declared.',
      'hr::',
      'Variables behave differently (var, let, const).',
      'Functions behave differently (declaration vs expression).',
      'hr::',
      'hoisting is applicable for arrow function declaration',
      'reference error will be thrown when the arrow function declared with let,const',
      'type error will be thrown when the arrow function declared with var',
    ],
  },
  {
    topic: 'SHADOWING',
    points: [
      'a variable can be redeclared into the another block',
      'let to let and var to let are legal shadowing but let to var is an illegal shadowing',
      'hr::',
      'Shadowing occurs when a variable declared in an inner scope (e.g., inside a function or block) has the same name as a variable in an outer scope, effectively “shadowing” the outer variable.',
      'Simple Rule: The inner variable shadows (overrides) the outer variable within its own scope.',
      `code::
      let name = "Alice"; // outer scope

      function greet() {
        let name = "Bob"; // inner scope (shadows the outer 'name')
        console.log(name); // "Bob"
      }
      
      greet();
      console.log(name); // "Alice" (outer scope is not affected)
      `,
      'Inside the greet function, the inner name shadows the outer name.',
      'When console.log(name) is called inside the function, it uses the inner name (“Bob”).',
      'Outside the function, the outer name (“Alice”) is unaffected by the inner name.',
      'hr::',
      'h:: Shadowing and Block Scope:',
      'With let and const, shadowing can also happen within blocks (such as in if statements or loops).',
      `code::
      let x = 10; // outer scope

      if (true) {
        let x = 20; // inner scope (shadows the outer 'x')
        console.log(x); // 20
      }

      console.log(x); // 10 (outer scope is not affected)
      `,
      'h:: Shadowing with var:',
      `code:: 
      var x = 10; // outer scope

      function test() {
        var x = 20; // inner scope (shadows outer 'x')
        console.log(x); // 20
      }

      test();
      console.log(x); // 10 (outer scope is not affected)
      `,
      'shadowing will not work with "var" for if and loops like functions',
      `code::
        var x = 10; // outer scope
        for(let i=0;i<10;i++){
          x = 20;
        }
        console.log(x) // 20 (the output will be 20)
      `,
      'hr::',
      'h:: Key Points:',
      'Shadowing happens when an inner variable has the same name as an outer variable.',
      'The inner variable takes precedence within its own scope.',
      'The outer variable is not affected by the inner variable.',
      'Block-scoped variables (let/const) can be shadowed inside blocks (such as if, for, etc.).',
      'var-declared variables cannot be shadowed in the same scope in certain situations, because var is function-scoped.',
    ],
    links: [],
  },
  {
    topic: 'METHOD OVERRIDING',
    points: [
      'to overwrite/redefine the parent class method into the derived class as per the derived class requirement.',
      'Method overriding happens when a subclass (child class) provides a specific implementation of a method that is already defined in its parent class (superclass). This new method in the subclass replaces the parent class method when called on an instance of the subclass.',
      'In JavaScript, method overriding is used when we extend a class using class syntax (introduced in ES6).',
      'hr::',
      'h:: Key Points of Method Overriding:',
      'Subclass redefines a method of the parent class.',
      'The overridden method in the subclass has the same name and signature as the parent class method.',
      'When the method is called on an instance of the subclass, the subclass’s method will be executed instead of the parent’s method.',
      'Super keyword is used to call the parent class method from the subclass if needed.',
      `code::
      // Parent class
      class Animal {
        speak() {
          console.log("Animal makes a sound");
        }
      }
      
      // Child class (overrides the method)
      class Dog extends Animal {
        speak() {
          console.log("Woof! Woof!");
        }
      }
      
      const animal = new Animal();
      const dog = new Dog();
      
      animal.speak(); // "Animal makes a sound"
      dog.speak(); // "Woof! Woof!"
      `,
      'The speak() method is defined in both the Animal (parent) and Dog (child) classes.',
      'When calling dog.speak(), the method from the Dog class is invoked, overriding the one from Animal.',
      'h:: Example with super:',
      'Sometimes, you might want to call the parent method inside the overridden method. This can be done using the super keyword.',
      `code::
        class Animal {
          speak() {
            console.log("Animal makes a sound");
          }
        }
        
        class Dog extends Animal {
          speak() {
            super.speak();  // Calling the parent method
            console.log("Woof! Woof!");  // Child class method
          }
        }
        
        const dog = new Dog();
        dog.speak(); 
        // Output:
        // "Animal makes a sound"
        // "Woof! Woof!"
      `,
      'super.speak() calls the speak() method from the parent (Animal).',
      'After that, the Dog’s speak() method is executed, so we see both outputs.',
      'hr::',
      'h:: Key Differences Between Method Overriding and Method Overloading:',
      'Method Overloading (not supported directly in JavaScript):',
      'In other languages (like Java or C++), overloading means having multiple methods with the same name but different parameters.',
      'JavaScript does not support true method overloading, but you can simulate it by checking the number of arguments or types within the method.',
      'Method Overriding:',
      'Occurs in inheritance when a subclass method replaces the parent method.',
    ],
  },
  {
    topic: 'STATIC VARIABLE / STATIC METHOD',
    points: [
      'h:: Static Variables:',
      'A static variable is a variable that is shared across all instances of a class. It is associated with the class itself, not any specific instance.',
      'Static variables are usually used when you want a property to maintain the same value across all instances of a class.',
      'h:: Static Methods:',
      'A static method is a method that is called on the class itself rather than on instances of the class. This means you don’t need to create an instance of the class to call the static method.',
      'Static methods can be used for utility functions or functions that don’t depend on instance data.',
      'hr::',
      'In JavaScript, static variables and methods are defined using the static keyword.',
      'hr::',
      'h:: Example of Static Variable:',
      `code::
        class Counter {
          static count = 0; // Static variable
        
          constructor() {
            Counter.count++;  // Increment static variable for every new instance
          }
        
          static getCount() {
            return Counter.count;  // Static method accessing static variable
          }
        }
        
        const counter1 = new Counter();
        const counter2 = new Counter();
        
        console.log(Counter.getCount()); // 2
      `,
      'The static variable count is shared by all instances of Counter.',
      'Every time a new Counter object is created, the count variable is incremented.',
      'Counter.getCount() is a static method used to access the static variable count.',
      'h:: Example of Static Method:',
      `code::
        class MathOperations {
          static add(a, b) {
            return a + b; // Static method for adding two numbers
          }
        
          static multiply(a, b) {
            return a * b; // Static method for multiplying two numbers
          }
        }
        
        console.log(MathOperations.add(5, 3)); // 8
        console.log(MathOperations.multiply(4, 2)); // 8
      `,
      'add() and multiply() are static methods that can be called without creating an instance of MathOperations.',
      'The methods operate purely on the parameters passed to them and do not rely on instance data.',
      'hr::',
      'h:: Why Use Static Methods and Variables?',
      'Static Variables:',
      'They are useful when you need to track or share a value across all instances of a class.',
      'Example: A counter that counts how many instances of a class have been created (like the count in the Counter class example above).',
      'Static Methods:',
      'These are useful for utility functions that don’t need to interact with instance properties.',
      'Example: Utility classes like Math functions or helper functions that don’t rely on instance state.',
    ],
  },
  {
    topic: 'METHOD CHAINING',
    points: [
      'call multiple methods into the same line',
      'hr::',
      'Method chaining is a technique where multiple methods are called on the same object in a single line of code. This is possible when each method returns the object itself (or another object), allowing you to “chain” further method calls together.',
      'hr::',
      'How Does Method Chaining Work?',
      'In JavaScript, method chaining works by returning the object from a method so that subsequent methods can be invoked directly on that object.',
      'h:: Key Points:',
      'Return the object (this): Each method in the chain must return this (the current object) so that the next method can be called on it.',
      'Improved readability and conciseness: It allows you to write clean and concise code by avoiding repetitive references to the same object.',
      `code::
        class Calculator {
          constructor(value = 0) {
            this.value = value;
          }
        
          add(num) {
            this.value += num;
            return this;  // Returning the object itself to allow chaining
          }
        
          subtract(num) {
            this.value -= num;
            return this;  // Returning the object itself to allow chaining
          }
        
          multiply(num) {
            this.value *= num;
            return this;  // Returning the object itself to allow chaining
          }
        
          getResult() {
            return this.value;
          }
        }
        
        const result = new Calculator()
          .add(10)
          .subtract(5)
          .multiply(2)
          .getResult();
        
        console.log(result); // Output: 10
      `,
      'The add(), subtract(), and multiply() methods all return the Calculator instance (this), allowing the next method in the chain to be called.',
      'getResult() does not modify the object but returns the final computed value.',
      'hr::',
      'Benefits of Method Chaining:',
      'Concise Code: You can perform multiple actions in one statement without needing to reference the object repeatedly.',
      'Readability: It makes the code cleaner and easier to follow when there are several method calls in a sequence.',
      'hr::',
      'h:: Real-World Example:',
      'Let’s take an example from the DOM manipulation library, like jQuery, where method chaining is often used.',
      `code::
        $('#element')
        .css('color', 'blue')
        .slideDown()
        .fadeIn()
        .css('font-size', '20px');
      `,
      "$('#element') is the object on which the methods (css, slideDown, fadeIn) are chained.",
      'Each method manipulates the element in a certain way and returns the object, enabling the next method to be applied.',
      'h:: Method Chaining with Promises (Asynchronous Example):',
      'Method chaining is also commonly used with Promises for handling asynchronous operations.',
      `code::
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error:', error));
      `,
      'The methods then() and catch() return a Promise, enabling the chaining of additional methods.',
      'hr::',
      'h:: Key Considerations:',
      'Return this: To support method chaining, each method must return this (or another object).',
      'Design Patterns: Method chaining is a powerful design pattern commonly seen in libraries like jQuery, Lodash, and even builder patterns.',
    ],
  },
  {
    topic: 'MODULE',
    points: [
      'use to write the code into multiple files',
      'hr::',
      'A module in JavaScript is a file that contains reusable code which can be shared between different parts of your application. Modules help in organizing your code, improving maintainability, and avoiding naming conflicts between different parts of the application.',
      'In JavaScript, the concept of modules was officially introduced with ES6 (ECMAScript 2015) using the import and export keywords. Prior to that, developers used various libraries like CommonJS (Node.js) or AMD for modules.',
      'hr::',
      'h:: Types of Modules in JavaScript:',
      'ES6 Modules (ECMAScript Modules - ESM)',
      'CommonJS',
      'AMD (Asynchronous Module Definition)',
      'h:: ES6 Modules (ECMAScript Modules - ESM):',
      'Introduced in ES6 and are now the standard for modern JavaScript applications.',
      'Use export to make code available outside the module, and import to bring code into the module.',
      '1. Exporting Code:',
      'You can export variables, functions, or classes from a module to make them available for import in other modules.',
      'Named Exports: You can export multiple variables, functions, or classes from a module using named exports.',
      `code::
      // math.js (module)
      export const add = (a, b) => a + b;
      export const subtract = (a, b) => a - b;
      `,
      'Default Export: You can export a single value, function, or class as the default export.',
      `code::
      // calculator.js (module)
      const multiply = (a, b) => a * b;
      export default multiply;
      `,
      '2. Importing Code:',
      'To use the exported code in another file, you import it using import.',
      'Named Imports: When importing named exports, you must use the exact name of the variable, function, or class.',
      `code::
      // main.js (using math.js)
      import { add, subtract } from './math.js';

      console.log(add(2, 3)); // 5
      console.log(subtract(5, 3)); // 2
      `,
      'Default Imports: You can import the default export using any name of your choice.',
      `code:: 
      // main.js (using calculator.js)
      import multiply from './calculator.js';

      console.log(multiply(3, 4)); // 12
      `,
      'h:: Module Syntax in ES6:',
      '1. Exporting Everything: You can export everything from a module at once.',
      `code::
      // utilities.js
      const add = (a, b) => a + b;
      const subtract = (a, b) => a - b;

      export { add, subtract }; // Named export
      `,
      '2. Importing Everything: You can import everything from a module into a single object.',
      `code::
      // main.js
      import * as utils from './utilities.js';
      
      console.log(utils.add(3, 2)); // 5
      console.log(utils.subtract(5, 3)); // 2
      `,
      '3. Renaming Imports: You can rename imports when you import them.',
      `code::
      // main.js
      import { add as addition } from './math.js';

      console.log(addition(4, 6)); // 10
      `,
      'hr::',
      'h:: CommonJS:',
      'Used primarily in Node.js for server-side JavaScript.',
      'CommonJS is primarily used in Node.js and works with require() and module.exports.',
      `code::
      // math.js (CommonJS)
      const add = (a, b) => a + b;
      const subtract = (a, b) => a - b;

      module.exports = { add, subtract };

      ----------------

      // main.js (CommonJS)
      const { add, subtract } = require('./math.js');

      console.log(add(2, 3)); // 5
      console.log(subtract(5, 3)); // 2
      `,
      'hr::',
      'h:: Benefits of Using Modules:',
      'Code Organization: Modules help break down large codebases into smaller, manageable files.',
      'Reusability: Once a module is created, it can be reused in different parts of your application.',
      'Namespace Management: Modules avoid naming conflicts by isolating code within a module.',
      'Maintainability: Easier to update and maintain individual modules without affecting the entire codebase.',
      'Dependency Management: Modules make managing dependencies between various parts of the application easier.',
      'hr::',
      'h:: When to Use Modules:',
      'Large applications: In complex applications, using modules helps in splitting the code into smaller, manageable pieces.',
      'Code sharing: If you want to reuse functionality across different parts of your application or even across multiple applications.',
      'Cleaner code: Modularization makes the code cleaner and more maintainable.',
      'hr::',
      'Real-world examples: You could refer to modular approaches in libraries like React or Lodash.',
    ],
  },
  {
    topic: 'MEMORY ALLOCATION',
    points: [
      'Primitive data types are string, number, bigint, boolean, undefined, symbol, null',
      'reference data types are array, functions, all objects (math, date, etc',
      'hr::',
      'Memory allocation refers to the process by which JavaScript sets aside (reserves) a portion of the computer’s memory for storing data — like variables, objects, functions, etc.',
      'Whenever you create a variable, object, or function, JavaScript automatically allocates memory for it behind the scenes. Later, when that data is no longer needed, JavaScript tries to "free up (deallocate)" that memory to avoid memory leaks — this process is handled by "Garbage Collection".',
      'h:: Types of Memory Allocation in JavaScript',
      'In JavaScript, memory can be categorized into two main types:',
      'Stack Memory - Primitives (number, string, boolean, undefined, null, symbol, bigint)',
      'Heap Memory - Objects, arrays, functions',
      'hr::',
      'h:: 1. Stack Memory:',
      'Used for primitive data types (simple and small data).',
      'Memory is allocated in a Last In, First Out (LIFO) order.',
      'Very fast access.',
      `code::
      let name = "John";   // String primitive
      let age = 30;        // Number primitive
      `,
      'Both name and age are stored directly in the stack.',
      'h:: Heap Memory',
      'Used for reference data types like objects, arrays, and functions.',
      'Memory is allocated in a larger, unordered memory pool.',
      'Slower access compared to stack.',
      `code::
      let person = {
        name: "John",
        age: 30
      };
      
      let numbers = [1, 2, 3, 4, 5];
      `,
      'The person object and numbers array are stored in the heap.',
      'The variable person itself holds only a reference (address/pointer) in the stack that points to the actual object in the heap.',
      'hr::',
      'h:: NEED REFER FOR MORE CONTENT (Garbage Collection, Memory Leaks)',
    ],
  },
  {
    topic: 'SYNCHRONOUS',
    points: [
      'code execution happens in step by step',
      'sync is blocking',
      'makes the execution of next line to wait untill the execution of current line complete',
      'hr::',
      'Synchronous means one thing at a time',
      'Synchronous means tasks are performed one after another.',
      'Each task must complete before the next task starts.',
      'each operation waits for the previous one to finish before it starts.',
      'JavaScript by default is "synchronous" and "single-threaded", which means it can process only one command at a time.”',
      'hr::',
      'h:: example:',
      'Imagine you are standing in a line at a coffee shop:',
      '☕ You order → ☕ You wait → ☕ You get coffee → Next person orders.',
      'One customer at a time = Synchronous.',
      'hr::',
      'h:: disadvantages:',
      'Can cause performance issues if a task takes too long (like waiting for a server response).',
      'hr::',
      'h:: NEED REFER FOR MORE CONTENT',
    ],
  },
  {
    topic: 'ASYNCHRONOUS',
    points: [
      'code execution happens simultaneously',
      'async is not blocking',
      "next line won't wait to finish the current line",
      'hr::',
      'Asynchronous means not waiting',
      'JavaScript can start a task and move on to the next task without waiting for the first one to finish.',
      'Tasks run independently.',
      'JavaScript doesn’t block the next line — it sets some tasks aside (like timers, network calls) and continues executing the code.',
      'hr::',
      'h:: Real-world Example:',
      'Imagine ordering food at a restaurant:',
      '🍔 You order → 🍔 Chef prepares while you chat → 🍔 Food arrives later.',
      'You don’t wait silently for food — you do other things = Asynchronous.',
      'hr::',
      'h:: Key Points about Asynchronous Execution:',
      'Non-blocking: JavaScript continues running other code while waiting for something like a server response.',
      'Efficient: Browser or server remains responsive.',
      'Handled using: CALLBACKS, PROMISES, ASYNC/AWAIT',
      'hr::',
      'Timers: setTimeout, setInterval',
      'Network - fetch(), XMLHttpRequest',
      'Event Handling - Click, Scroll, Keyboard events',
      'hr::',
      'h:: NEED REFER FOR MORE CONTENT',
    ],
  },
  {
    topic: 'SYNCHRONOUS VS ASYNCHRONOUS',
    points: ['javascript is a sync programming language in nature', ``],
  },
  {
    topic: 'JAVASCRIPT EXECUTION ENGINE',
    points: [
      'all stack, browser, call back queue, event loop, data structure',
      'async methods (setTimeout, addEventListener)',
      "even though the setTimeout is 0, that won't call right immediately that will wait in BROWSER and CALL BACK QUEUE untill the global items to complete in CALL STACK",
      'hr::',
      'The JavaScript Execution Engine is the program that reads, interprets, and executes JavaScript code.',
      'It turns your human-readable JavaScript code into machine code that the computer can actually run.',
      'It handles everything — parsing, compiling, optimizing, executing.',
      'h:: The most famous JavaScript engine is:',
      'V8 (used by Chrome and Node.js)',
      'SpiderMonkey (Firefox)',
      'JavaScriptCore (Safari)',
      'Chakra (Old Edge)',
      'hr::',
      'h:: Main Components Inside a JavaScript Engine',
      'Memory Heap - Allocates memory for objects and variables (dynamic memory)',
      'Call Stack - Tracks function calls (where in the code we are)',
      'Interpreter - Quickly reads and executes code line-by-line (initially)',
      'Compiler (JIT) - Converts JS code into optimized machine code (for better speed)',
      "Garbage Collector - Frees up memory that's no longer used",
      'hr::',
      'h:: NEED REFER FOR MORE CONTENT',
    ],
  },
  {
    topic: 'MUTABILITY and IMMUTABILITY and its benifits?',
    points: [
      'h:: MUTABILITY',
      "An object is mutable if it can be changed after it's created.",
      'EXAMPLES: Objects, Arrays, Functions',
      "Data can be changed after it's created",
      `code::
          let user = { name: "Alice" };
          user.name = "Bob";  // Original object is modified      
      `,
      'h:: IMMUTABILITY:',
      'It means you cannot change the original value. If you perform an operation on a primitive, it creates a new value instead of modifying the original one.',

      'EXAMPLES:  String, Number, Boolean, Null, Undefined, Symbol, BigInt',
      `code::
        let a = 10;
        let b = a;     // b gets a *copy* of a
        b = 20;
        
        console.log(a); // 10
        console.log(b); // 20
      
      `,
      'An object is immutable if it cannot be changed after it is created. Instead, a new copy is made with the change.',
      'Use spread (...) to copy arrays/objects',
      'Use Object.freeze(obj) to shallow-freeze an object',
      `code::
        const person = { name: 'Alice' };
        const updatedPerson = { ...person, name: 'Bob' }; // Create a new object
        console.log(person);        // { name: 'Alice' }
        console.log(updatedPerson); // { name: 'Bob' }
    `,
    ],
  },
  {
    topic: 'FUNCTION',
    points: [
      'regular function',
      'function expression',
      'arrow function',
      'anonymous fuction',
      'self invoking function or immediately invoked function(IIFE)',
      'hr::',
      'h:: Arrow Function',
      'arrow functions are not hiosted',
      '"this" keyword in the arrow function is binded to the previous value of "this"',
      'the value of "this" inside an arrow function is basically what its value would\'ve been outside the arrow function',
    ],
  },
  {
    topic: 'HIGHER ORDER FUNCTION - MAP, FILTER, REDUCE ETC...',
    points: [],
  },
  {
    topic: 'PURE FUNCTION AND IMPURE FUNCTION',
    points: [],
  },
  {
    topic: 'GENERATOR FUNCTION',
    points: [],
  },
  { topic: 'FUNCTION COMPOSITION', points: [] },
  {
    topic: 'CALLBACK FUNCTION',
    points: [
      'A callback function is a function passed as an argument to another function, and it is called (“called back”) later after some task is completed.',
      'A function you give to another function to run later.',
      'Used heavily for asynchronous operations like timers, API calls, event handling, etc.',
      `code::
      function greet(name) {
        console.log(\`Hello, \${name}\`);
      }
      
      function processUserInput(callback) {
        let name = "John";
        callback(name);   // <-- calling back the passed function
      }
      
      processUserInput(greet);
      `,
      'greet is passed as a callback to processUserInput.',
      'processUserInput calls greet after getting the user’s name.',
      'hr::',
      'h:: Why do we use Callbacks?',
      'To make sure a function doesn’t run before a task is completed.',
      'Helps handle asynchronous behavior (e.g., waiting for a file to load or data to arrive from a server).',
      'hr::',
      'h:: Key Characteristics of Callback Functions:',
      'Passed as argument - You pass the function without calling it (no () initially)',
      'Executed later - It runs inside the main function at the right time',
      'Useful for async - Timers, events, server requests, etc.',
      'hr::',
      '“too many nested callbacks can create ‘Callback Hell’, making code messy — that’s why Promises and async/await were introduced later.”',
      'hr::',
      'h:: disadvantages',
      'callback hell(pramid of dom), inversion of control',
      'callback hell - one call back inside another callback',
      'inversion of control - loosing control in our code',
      'h:: NEED REFER FOR MORE CONTENT',
    ],
  },
  {
    topic: 'PROMISE',
    points: [
      'there are 3 states in promise - pending, resolved, rejected',
      'promise static methods - Promise.all(), Promise.allSettled, Promise.any()',
      'promise.allsettled() - it will execute either resolve or reject happens',
      'hr::',
      'A Promise is an object that represents the future result of an asynchronous operation — it eventually produces a value (success) or a reason (error).',
      'It promises that you’ll get a value later (now, pending → later, fulfilled or rejected).',
      'Promise = Future value.',
      'Basic Structure:',
      `code::
        let promise = new Promise((resolve, reject) => {
          // Do some async operation
          if (success) {
            resolve(result);
          } else {
            reject(error);
          }
        });
      `,
      'resolve(result) → Operation succeeded ✅',
      'reject(error) → Operation failed ❌',
      'Simple Example:',
      `code::
        let promise = new Promise((resolve, reject) => {
          let success = true;
          
          if (success) {
            resolve('Operation Successful');
          } else {
            reject('Operation Failed');
          }
        });
        
        // Handling the Promise
        promise
          .then(result => console.log(result))   // for success
          .catch(error => console.log(error));    // for error
      `,
      'hr::',
      'h:: Promise States:',
      'Pending - The initial state (waiting...)',
      'Fulfilled - Operation completed successfully',
      'Rejected - Operation failed',
      'hr::',
      'h:: Why use Promises?',
      'Avoids Callback Hell (too many nested callbacks).',
      'Code becomes cleaner and easier to read.',
      'Makes error handling better (.catch()).',
      'hr::',
      'promise chaining',
      'promise combinator',
    ],
  },
  {
    topic: 'ASYNC/AWAIT',
    points: [
      "async always returns a promise (by default a async holds promise's resolve call back functions within it. it will simplify the steps)",
      'we can use try catch methods to handle the promise reject part (error handling)',
      'async/await is the alternate of "then" and "catch" of a promise',
      '"await" keyword is only valid in async function block only and it can be used in front of a promise call',
      'we can use multiple await keyword in a function',
      'we can write async code in the sync style',
      'hr::',
      'async/await is a cleaner, easier way to work with Promises.',
      'It makes asynchronous code look and behave like synchronous code (more readable).',
      'Introduced in ES8 (ECMAScript 2017).',
      'hr::',
      'h:: Basic Rules:',
      'Use async before a function to make it return a Promise automatically.',
      'Use await inside an async function to pause execution until a Promise resolves.',
      `code::
        function getData() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('Data received!');
            }, 2000);
          });
        }
        
        async function showData() {
          console.log('Fetching data...');
          
          let result = await getData(); // waits here until Promise resolves
          
          console.log(result);
          console.log('Done!');
        }
        
        showData();
      `,
      'hr::',
      'h:: Why use async/await?',
      'Makes asynchronous code easier to read and write.',
      'Avoids chaining too many .then() methods.',
      'Looks almost like normal synchronous code.',
      'hr::',
      '“async/await is a modern way to handle asynchronous operations in JavaScript, making Promise-based code look and behave more like synchronous code.',
      'An async function always returns a Promise, and await pauses the function execution until the Promise resolves or rejects.”',
      '“await can only be used inside async functions. It simplifies error handling using normal try/catch blocks.”',
    ],
  },
  {
    topic: 'ARRAY/OBJECT DESTRUCTURIING',
    points: [
      'Destructuring is a shortcut to unpack values from arrays or objects into individual variables easily.',
      'Instead of manually picking values, you extract them in one line.',
      'Array Destructuring - Extract values from an array:',
      '“Array destructuring is based on position, while object destructuring is based on property names.”',
      '“Destructuring is a way to quickly extract values from arrays or properties from objects into variables. It makes code   cleaner and reduces the need for repetitive assignments.”',
      `code::
        let numbers = [1, 2, 3];

        // Old way
        let a = numbers[0];
        let b = numbers[1];
        
        // Destructuring way
        let [x, y, z] = numbers;
        
        console.log(x); // 1
        console.log(y); // 2
        console.log(z); // 3
      `,
      'Object Destructuring - Extract properties from an object:',
      `code::
        let person = { name: "John", age: 25 };

        // Old way
        let n = person.name;
        let a = person.age;

        // Destructuring way
        let { name, age } = person;

        console.log(name); // John
        console.log(age);  // 25

        --> {name, age} matches the keys inside the person object.
      `,
      'h:: Additional Features:',
      'Skipping elements (Array)',
      `code::
      let [first, , third] = [10, 20, 30];
      console.log(first, third); // 10 30

      (Skip second item)
      `,
      'Renaming variables (Object)',
      `code::
      let user = { id: 101, username: "alex" };

      let { id, username: userName } = user;
      
      console.log(id);       // 101
      console.log(userName); // alex

      -->  username is renamed to userName.
      `,
      'Default values:',
      `code::
      let [p = 5, q = 10] = [7];
      console.log(p, q); // 7 10

      (If array value is missing, default is used)

      let { city = "Unknown" } = {};
      console.log(city); // Unknown
      `,
    ],
  },
  {
    topic: 'EVENTS',
    points: [
      'JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.',
      'h:: Common events include:',
      'User actions: Click, keyboard press, mouse movements, etc.',
      'Browser events: Page load, resize, scroll, etc.',
      'Form events: Submit, input changes, focus, etc.',
      '“Events are actions that happen in the browser (like clicks, keystrokes, etc.), and JavaScript allows us to respond to these events by using event listeners.',
      'The most common way to add an event listener is using the addEventListener() method.”',
      'EXAMPLE:',
      `code::
        // Get the button element
        let button = document.querySelector('button');
        
        // Add an event listener to the button
        button.addEventListener('click', function() {
          alert('Button clicked!');
        });

        --> The event is click. When the button is clicked, the callback function is executed (alert).
      `,
      'hr::',
      'h:: Types of Events:',
      'Mouse Events: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, etc.',
      'Keyboard Events: keydown, keypress, keyup, etc.',
      'Form Events: submit, input, change, focus, blur, etc.',
      'Window/Document Events: load, resize, scroll, unload, DOMContentLoaded, etc.',
      'Touch Events: touchstart, touchmove, touchend, etc.',
    ],
  },
  {
    topic: 'EVENT PROPAGATION: Bubbling vs Capturing',
    points: [
      'Events follow a specific flow when triggered:',
      'Capturing (Trickles down): The event starts from the root and goes down to the target.',
      'Bubbling (Bubble up): The event starts at the target and bubbles up to the root.',
      'By default, events bubble up. However, you can control this with capture or stopPropagation().',
      'hr::',
      'h:: NEED REFER FOR MORE CONTENT',
    ],
  },
  {
    topic: ' EVENT DELEGATION',
    points: [
      'Instead of attaching event listeners to each child element individually, attach it to the parent element and use event bubbling.',
      '“Event delegation is a useful technique where we add an event listener to a parent element instead of individual child elements for better performance.”',
      'hr::',
      'h:: NEED REFER FOR MORE CONTENT',
    ],
  },
  { topic: 'EVENT PHASES', points: [] },
  {
    topic: 'CALL, APPLY, BIND (Method Borrowing)',
    points: [
      'h:: call()',
      'Use call when you want to invoke a function with a custom this and pass arguments directly.',
      'this keyword will work independently on function call and use to tie a function to an object',
      'custom this property can be created',
      'h:: apply()',
      'apply() was designed for situations where your arguments are already in an array or array-like object (like arguments, NodeList, etc.).',
      'h:: bind()',
      'Use bind when you want to store a function with a fixed this to be called later (e.g., in event listeners, callbacks).',
      'Method borrowing: bind allows you to borrow methods from one object and apply them to another object, even if they were not originally designed to work with that object.',
      'hr::',
      'Method borrowing is when one object uses a method that belongs to another object, typically by using the call(), apply(), or bind() methods to explicitly set this.',
    ],
  },
  {
    topic: 'EVENT BUBBLING AND CAPTURING - DOM Event Flow ',
    points: [],
  },
  {
    topic: 'DEBOUNCING AND THROTTLING',
    points: [
      'Both debounce and throttle are techniques to control how often a function executes, especially during frequent events like scroll, resize, or typing — but they behave differently.',
      'h:: Debouncing:',
      'Debouncing is a technique used to limit how often a function is executed, especially in response to frequently triggered events like: resize events, scroll events, scroll events',
      'It ensures that the function runs only after a specified delay once the event has stopped firing.',
      'Real-World Analogy:',
      'Without debouncing: an API call is made on every keystroke of search something | With debouncing: API call happens only after you pause typing',

      'hr::',
      'Limit high-frequency function calls. Runs after the last event stops. Search box, resize, auto-save input are the real world scenarios',
      'h:: Throttling:',
      'At regular intervals while events are firing',
      'Scroll position, resize window, mouse movement',
    ],
  },
  {
    topic: 'POLYFILLS',
    points: [],
  },

  {
    topic: 'CURRYING',
    points: [
      'currying is a function that takes one argument at a time and returns a new function and expecting the next argument',
      'Currying in JavaScript is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.',
      'curried functions are constructed by chaining, closures by immediately returned their inner function simultaneously.',
      'infinite currying - sum(1)(1)(2)...(n)',
    ],
  },
  {
    topic: 'PARTIAL APPLICATION (which is closely related to currying)',
    points: [],
  },
  {
    topic: 'CHAINING VS CURRYING',
    points: [
      'h:: Definition',
      'CURRYING: Transforms a function so it takes one argument at a time',
      'CHAINING: Calls multiple methods on the same object in sequence',
      'h:: Syntax',
      'CURRYING: f(a)(b)(c)',
      'CHAINING: obj.method1().method2().method3()',
      'h:: Return Value',
      'CURRYING: Each function returns another function (until final call)',
      'CHAINING: Each method returns the object (this) for chaining',
      'h:: Purpose',
      'CURRYING: Function decomposition and partial application',
      'CHAINING: Fluent interface and readable method sequences',
      'h:: Used With',
      'CURRYING: Pure functions',
      'CHAINING: Objects or classes with methods',
      'h:: Example Use Case',
      'CURRYING: Functional programming, React props',
      'CHAINING: jQuery, Lodash, class-based utilities',
    ],
  },

  {
    topic: 'NEW - KEYWORD',
    points: [
      'an object is created pointing to the contructor function',
      '"this" inside that particular functions points to the new object',
    ],
  },
  {
    topic: 'THIS - KEYWORD',
    points: [
      'this keyword binds the scope based on how its called',
      `code::
        const obj = {
          myfunction() {
            return this;
          }
        }
        

        var a = obj.myfunction;
        console.log(a());  - here this keyword points to the global object
        console.log(obj.myfunction()); - here this keyword points to the local(obj) object
    `,
      'if "this" in inside of a function is null or undefined, javascript will move that to global object',
    ],
  },
  { topic: 'SET - KEYWORD', points: [] },
  {
    topic: 'MAP - KEYWORD or MAP OBJECT',
    points: [
      ' A Map is a built-in JavaScript object that stores key-value pairs and remembers the original insertion order of the keys.',
    ],
  },
  { topic: 'WEAKMAP AND WEAKSET', points: [] },
  { topic: 'MEMOIZATION AND CACHING', points: [] },
  { topic: 'DEEP COPY VS SHALLOW COPY', points: [] },
  { topic: 'WEB WORKER', points: [] },
  { topic: 'SERVICE WORKER', points: [] },
  {
    topic: 'IMPLICIT TYPE COERCIEON',
    points: [
      'Type coercion refers to the automatic conversion of values from one data type to another, typically performed during operations or comparisons involving different data types. By using Type Coercion, JavaScript attempts to make the data types compatible to complete the operation or comparison.',
    ],
  },
  {
    topic: 'STRICT MODE',
    points: [
      'In JavaScript, every function has its own this context, which refers to the object that the function is bound to. By default, this refers to the global object in non-strict mode and undefined in strict mode. However, the value of this can be changed by using different binding methods.',
    ],
  },
  { topic: 'ERROR HANDLING', points: [] },
  { topic: 'RECURSION', points: [] },
  { topic: 'ABORT CONTROLLER', points: [] },
  { topic: 'ITERATORS AND GENERATORS', points: [] },
  {
    topic: 'D/B FUNCTION DECLARATION AND FUNCTION EXPRESSION',
    points: [
      'Function declarations are defined using the function keyword, while function expressions are defined by assigning a function to a variable. Function declarations are hoisted, while function expressions are not.',
    ],
  },
  {
    topic: 'PROXIES',
    points: [],
  },
  {
    topic: 'PROTOTYPE',
    points: [],
  },
  {
    topic: 'PROTOTYPAL AND CLASSICAL INHERITANCE',
    points: [],
  },
  { topic: 'TEMPORAL DEAD ZONE', points: [] },
  { topic: 'exec () and test () methods', points: [] },
  {
    topic: 'template literals (back ticks)',
    points: ['`${}`'],
  },
  {
    topic: 'terinary operator',
    points: [
      'h:: ?? (double question mark)',
      'available ?? null - here print either LHS OR RHS',
    ],
  },
  {
    topic: 'tagged template',
    points: [''],
  },
  {
    topic: 'what is the term utility(files, class and so on)',
    points: [''],
  },
  {
    topic: "diff b'w rest and spread operator?",
    points: [
      'h:: Rest Operator:',
      'Collecting values (packing)',
      'In function parameters to gather arguments',
      'Bundles arguments into a single array',
      'FUNCTION: when we are not sure about the number of arguments in a function, we call it as rest operator. used in parameters to grouping the unknown number of arguments',
      'used in destructuring ([name, age, ...items] = ["name", 29, "male", "developer", "salem"])',

      'h:: Spread Operator:',
      'Expanding values (unpacking)',
      'When calling a function, or spreading arrays/objects',
      'Breaks iterable into individual elements',
      'FUNCTION: when we are sure about the numbers of arguments in a function, we call it as spread operator. used in arguments to split the array of items into individual items',
      'hr::',
      '📌 Spread = Send out (function call) (spread arguments)',
      '📌 Rest = Pull in (function definition) (rest parameter)',
      `code:: Combined Example:

      function greetAll(greeting, ...names) {
        names.forEach(name => console.log(greeting + name));
      }
      
      const people = ["Alice", "Bob", "Charlie"];
      
      greetAll("Hello", ...people);
      // Output:
      // Hello, Alice
      // Hello, Bob
      // Hello, Charlie
      
      ...people is spread
      ...names is rest
      `,
    ],
  },
  {
    topic: 'Difference between Parameter and Argument',
    points: [
      'Parameter - A named variable in a function definition (Think of it as a placeholder)',
      'Argument - A value passed to the function when called (Fills in the parameter)',
    ],
  },
  {
    topic: 'Variadic Functions',
    points: [
      'A variadic function is a function that can accept any number of arguments, not just a fixed amount.',
      'JavaScript functions are naturally variadic, because they can be called with more or fewer arguments than defined in the function.',
      'h:: Example 1: Using the arguments object (older way)',
      `code::
          function sum() {
            let total = 0;
            for (let i = 0; i < arguments.length; i++) {
              total += arguments[i];
            }
            return total;
          }
          
          console.log(sum(1, 2));        // 3
          console.log(sum(1, 2, 3, 4));  // 10


          // The arguments object is array-like, not a real array.
      
      `,
      'h:: Example 2: Using Rest Parameters (modern & cleaner)',
      `code::
          function sum(...numbers) {
            return numbers.reduce((acc, num) => acc + num, 0);
          }
          
          console.log(sum(1, 2));        // 3
          console.log(sum(1, 2, 3, 4));  // 10

         // ...numbers is a rest parameter that captures all passed arguments into an array.
      
      `,
    ],
  },
  {
    topic: 'Default objects provided by Javascript',
    points: ['navigator'],
  },
  {
    topic: 'what is function expression?',
    points: [],
  },
  {
    topic: 'what is the clean up function?',
    points: [],
  },
  {
    topic: 'what is service worker?',
    points: [],
  },
  {
    topic: 'what is web worker?',
    points: [],
  },
  {
    topic: 'what is kernel?',
    points: [],
  },
  {
    topic: 'what is queue and its types?',
    points: [
      'callback queue or macro task queue  or task queue(browser internal tasks)',
      'micro task queue (tasks happening outside of the browser)',
    ],
  },
  {
    topic: 'what is callback queue or macro task queue  or task queue?',
    points: [],
  },
  {
    topic: 'what is execution context?',
    points: ['2 main phases', 'creation phase', 'execution phase'],
  },
  {
    topic: 'what is call stack?',
    points: [],
  },
  {
    topic: 'what is event listener registry?',
    points: ['its a part of web api environment'],
  },
  {
    topic: 'what is task starvation?',
    points: ['its a part of web api environment'],
  },
  {
    topic:
      'what is global execution context and how it related with call stack?',
    points: [''],
  },
  {
    topic: 'javascript runs',
    points: [
      'browser, inside browser js engine is there, inside js engine call stack is there',
      'similarly browser have web apis but web apis are not part of javascript',
      'browser provides web api access to call stack in js engine',
    ],
  },
  {
    topic: 'web APIs',
    points: [
      'web apis are not part of javascript. its browser provided feature',
      'main apis are timer api(settimeout), user interaction api(dom api), network api(fetch), storage api(local storage), logs api(console), location access api(geo location)',
      'it also call window object model. all web apis are stored under window object',
    ],
  },
  {
    topic: 'fetch()',
    points: ['fetch always returns a promise'],
  },
  {
    topic: 'micro task queue',
    points: [
      'all the call back functions which comes through promises will go inside the microtask queue',
      'mutation observer',
    ],
  },
  {
    topic: 'implicit and explicit binding',
    points: [
      'h:: IMPLICIT',
      'When a function is called as a method of an object, this refers to the object to the left of the dot ..',
      'Object.method()',
      'The object before the dot',
      `code::
          const person = {
            name: "Alice",
            greet() {
              console.log("Hello, " + this.name);
            }
          };
          
          person.greet();  // Hello, Alice
    `,
      'h:: EXPLICIT:',
      'Explicit binding refers to the process of explicitly setting the value of this for a function. This can be done by using the call, bind, or apply methods provided by JavaScript.',
      'Using call, apply, or bind',
      'The object you explicitly pass',
      `code::
          function greet() {
            console.log("Hi, " + this.name);
          }
          
          const user = { name: "Bob" };
          
          greet.call(user);  // Hi, Bob      
          
      `,
      "Arrow functions do not have their own this — they inherit it from the surrounding scope (lexical binding). So they're not suitable for implicit/explicit binding patterns.",
    ],
  },

  {
    topic: 'why cookie is best way to store JWT rater than local storage?',
    points: [],
  },

  {
    topic: 'web security',
    points: ['encoding - base64(image)', 'encryption - AES/RSA', 'hashing'],
  },
  { topic: 'setImmediate vs setTimeout', points: [] },
  { topic: 'asynchronous code execution', points: [] },
  {
    topic: 'OOPS',
    points: [
      'Object',
      'Classes',
      `Encapsulation - making a variable as private that can't be able to access outside of the class / protects and controls access to the internal state of an object
      `,
      'Abstraction - Abstraction means displaying only essential information and hiding the details.',
      'Inheritance - some properties and methods of an Object are being used by another Object.',
      'Polymorphism - it can be achieved through method overriding. different classes can define a method with same name but different implementation',
    ],
  },
  {
    topic: 'INHERITANCE',
    points: ['parent class into the derived class is called inheritance'],
  },

  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  {
    topic: '***** INFO *****',
    points: [
      'Js is high-level programming language',
      'class concept was introduced in ES6 in js',
      'we can use function key word to create object in ES5 when class keyword is not available in ES5. we can use prototype keyword to declare any vairable or method into the object while using function keyword',
      'mentioning _ (underscore) in front of any vaiable is telling that variable is a private variable',
      'anonymous function only refers the container scope but arrow function refers to the global scope',
      'settimeout is not part of javascript. its part of web api/browser',
      "with map method we can chain multiple methods next to it but in foreach we can't do that.",
      '&& - conditional operator - to avoid the else part',
      'use square brackets [] to define a property of an object dynamically',
      'convert string format number into number format, add + infront of the value (+val) ',
      'event.target.value always provides the value only in string format eventhough the type of input field is number',
      'a javascript file can be fetch from network, cache, service worker',
      'window object or global object holds all the web apis like dom, storage, network, location etc',
      'window object is also called as global object or global scope. when its comes with gobal object, the window key word need not be mentioned',
      'callbacksm fetch, timer registered inside web apis environment',
    ],
  },
  {
    topic: '***** CHECKS *****',
    points: [
      '<script type="module" src="script.js"> - what is the role of the "type" here?',
      'what is the role of curley braces {} while exporting and importing a class?',
      'is private, public are typescript feature?',
      'why POST request in fetch method always preceded with an options request',
      'when to write functions in outside of component function?',
      'how javascript runtime environemnt works?',
      'what is mutation observer',
      'difference between callback queue and micro task queue',
      'difference between using Promise() and new Promise() / how to use web apis with and without new keyword',
      'Declarative Code (vs Imperative)',
    ],
  },
];

export default javascript;
