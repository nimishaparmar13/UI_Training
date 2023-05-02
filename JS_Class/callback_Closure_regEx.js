/**
 Call Back:A callback function is a function that is passed as an argument to another function and is executed inside that function. 
 The purpose of a callback function is to allow the caller function to execute the passed function at a certain point in its execution or to use it as a parameter to provide additional functionality.

-Callbacks ensure that the function will not run before the task is completed but will run right after the task is completed. 
It develops asynchronous JavaScript code and keeps them safe from errors.

-By using callback functions in this way, we can create more flexible and reusable code that can perform different operations depending on the context or input parameters.


i.e:
// function
function primeNumber(number, callback) {
    
    var nums = [];
  
    for(var i=1;i<=number;i++){
            var count=0;
             for( var j=1;j<=i;j++){
                 if(i%j==0){
                    count++;
                   // nums.push(count);
                    }
            }

            if(count==2){   
                nums.push(i);
            }
        }
        console.log('Prime Number:',nums);
         callback();
}

// callback function
function evenNumber()
{
    let even = [];
  for(let i = 1; i < 10; i++ ){
			if(i%2==0){
            even.push(i); // i = 0, [1,2,3]
			}
  }
console.log('Even Number',even);
}

// passing function as an argument
primeNumber(100, evenNumber);// evenNumber is a function.

output:Prime Number: [
   2,  3,  5,  7, 11, 13, 17, 19,
  23, 29, 31, 37, 41, 43, 47, 53,
  59, 61, 67, 71, 73, 79, 83, 89,
  97
]
Even Number [ 2, 4, 6, 8 ]
 */

/*
Closures - advantage, your own example and definition

-A closure is created when a function is defined inside another function and accesses variables from its parent scope. 
The inner function can access the parent function's variables even after the parent function has returned, effectively "closing" over those variables and creating a persistent scope for the inner function.

-Nested Function: a function can also contain another function. This is called a nested function. 

i.e

// nested function example

// outer function
function greet(name) {

    // inner function
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // calling inner function
    displayName();
}

// calling outer function
greet('Nimisha'); 

-Returning a function: we can also return the function.

function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greet('Nimisha');
console.log(g1); // returns the function definition
g1(); // calling the function


Closure: closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.

-closure helps in the data privacy of the program.

// outer function
function findNumber(i) {

    // inner function
    function even() {
        if(i%2==0){
        console.log('even number:',i);
        }
        else{
            console.log('odd number:',i);
        }
    }

    // calling inner function
   return even();
}

const number = findNumber(23);
// calling outer function
console.log(number); 


i.e 2-

function outer() {
  var count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

var closure = outer();
closure(); // Output: 1
closure(); // Output: 2
closure(); // Output: 3
 */


/* Regular Expressions:   Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern.

The regular expression consists of a pattern enclosed between slashes /.
- i.e cost regularExp = /abc/;

you can also create a regular expression by calling the RegExp() constructor function.

i. e: 
const reguarExp = new RegExp('abc');

-Metacharacters:

list of metacharacters:

[] . ^ $ * + ? {} () \ |

- exec()	Executes a search for a match in a string and returns an array of information. It returns null on a mismatch.

-test()	Tests for a match in a string and returns true or false.

-match()	Returns an array containing all the matches. It returns null on a mismatch.

-matchAll()	Returns an iterator containing all of the matches.

- search()	Tests for a match in a string and returns the index of the match. It returns -1 if the search fails.

-replace()	Searches for a match in a string and replaces the matched substring with a replacement substring.

-split()	Break a string into an array of substrings.


*/
