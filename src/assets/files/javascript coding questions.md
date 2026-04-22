input = ["a","ccc","bb","aaaa","eeeee"]
output = ["a","bb","ccc","aaaa","eeeee"] 

input2 = ["aaa","ccccc","bb","aaaaaaa","eeeee"]
output2 = ["bb","aaa","ccccc","eeeee","aaaaaaa"]

------------------------------------------------

for(var i = 0;i < 10;i++){
    setTimeout(()=>{
        console.log(i);
    });
} 

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); 
  }, i * 1000);
}

for(let i = 0;i < 10;i++){
    setTimeout(()=>{
        console.log(i);
    });
} 

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); 
  }, i * 1000);
}

------------------------------------------------

const sales = [
  { item: 'Laptop', amount: 1000 },
  { item: 'Phone', amount: 500 },
  { item: 'Laptop', amount: 1200 }
];

// Expected Result: { Laptop: 2200, Phone: 500 }

------------------------------------------------

const colors = ['red', 'green', 'red', 'blue', 'yellow', 'green', 'blue', 'purple', 'red'];

// Expected Result: { red: 3, green: 2, blue: 2, yellow: 1, purple: 1 }

------------------------------------------------

let a = 10;
var a = 20;

console.log(a);
 
var a = 20;
let a = 10;

console.log(a); 

------------------------------------------------

DEEPCLONE THE BELOW OBJECT WITHOUT USING JSON.parse(JSON.stringify(originalObject)) OR USING ANY OTHER LIBRARY (USE RECURSION METHOD)

const originalObject = {
  name: 'Alice',
  age: 30,
  address: {
    street: '123 main st',
    city: 'anytown',
  },
  companies: {
    first: {
      name: 'keeppler',
      city: 'anytown',
      designation: ['developer', 'manager', 'architect'],
    },
    second: {
      name: 'keppler',
      city: 'anytown',
    },
  },
  numbers: [1, 2, 3],
};

------------------------------------------------

WHAT IS ORDER OF EXECUTION OF THE BELOW CODE AND PRINT THE FOLLOWING OUTPUT IN THE CONSOLE

console.log('A');

setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => console.log('C'));
}, 0);

queueMicrotask(() => {
  console.log('D');
});

Promise.resolve().then(() => {
  console.log('E');
  queueMicrotask(() => {
    console.log('F');
  });
  return Promise.resolve();
}).then(() => {
  console.log('G');
});

console.log('J');

------------------------------------------------

THIS KEYWORD - PRINT THE FOLLOWING OUTPUT IN THE CONSOLE

let name = 'global name';
const person = {
  name: 'John',
  speak: function () {
    setTimeout(function () {
      console.log('...', this.name); // nothing will print
    }, 1000);
  },
};

person.speak();

const person2 = {
  name: 'John',
  speak: function () {
    setTimeout(() => {
      console.log(this.name); // printed john
    }, 1000);
  },
};

person2.speak();

const person3 = {
  name: 'John',
  child: {
    name: 'junior john',
    speak: function() {
      setTimeout(function() {
        console.log(this.name, name);
      }, 1000);
    },
  },
};

person3.child.speak();

------------------------------------------------

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false

------------------------------------------------

const nums = [1, 2, 3, 4];

console.log(nums.map((n) => n * 2)); // [2, 4, 6, 8]

console.log(nums.map((n) => n > 2)); // [false, false, true, true]

------------------------------------------------

STRING METHODS
1. reverse a string with and without using reverse() method
2. palindrome
3. two strings are anagrams of each other  or not
4. count the occurrences of each character in the string
5. anagrams

NUMBERS
1. find factorial
2. prime value or not
3. fibobacci sequence

ARRAY METHODS
1. reverse an array
2. combine two or more array into a single array
3. sort an array (asc, desc)
4. find largest or maximum number of an array
5. find 2nd largest number of an array
6. find smallest number of an array
7. find a value in an array
8. remove duplicates in an array
9. find duplicates in an array
10. sum all items in an array
11. item exist or not in an array
12. find index of an item in an array
13. every item in an array should meet the condition
14. replace an item in an array
15. remove an item in an array
16. find even or odd numbers of an array
17. find largest value in a nested array
18. flattens a nested array in JavaScript
19. find average value of an array
20. iterate unknown number of nested array (recursion)

DSA in JavaScript:
1. sum of all natural numbers from 1 to n using for loop (eg: 1245 -> 1+2+4+5 = 12)
2. count the number of digits of a number (eg: 34252 = 5)
3. check if the give number is palindrome or not
4. find fibonacci position of n
5. find missing number
6. sum of elements in the given array
7. how to check if the given element is present in an array or not
8. return index if an element is exist in an array
9. how to delete, add, update elements from specific index
10. D/B splice and slice
11. how will you do copy of an array
12. how to add 2 arrays
13. how to check if arrays are equal
14. how to sort an array
15. how to reverse an array
16. how to manipulate an array by using map, filter, reduce
17. how to flat an array
18. filter vs find
19. search element in an array
20. write a function to return number of negative numbers in an array
21. write a function to return largest number in an array
22. find second largest number in an array

------------------------------------------------

check debouncing and throttling program
check closure program
check this keyword program
check event loop program
check async/await program
check promise program

------------------------------------------------
