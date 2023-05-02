const prompt=require('prompt-sync')();

//Q1: Find out all the even numbers from 1 - 100?

function evenOddNumber(number){
    var resultArr = [];
    
  
  
  for (var i = 1; i <number; i++) {
    if (i % 2 === 0 ) {
      resultArr.push(i);
    }
  }

  return resultArr;
}
console.log(evenOddNumber(100));

/* Output:[
   2,  4,  6,  8, 10, 12, 14, 16, 18, 20, 22,
  24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44,
  46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66,
  68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
  90, 92, 94, 96, 98
]*/


//Q2: Find out all the multiples of 3 and 5 in the range 50 - 100?

function multiples(number){
  var arr = [];
  
  for (var i = 50; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(multiples(100));

/*Output:[ 60, 75, 90 ]
*/

//Q3: Find out all the perfect squares from 1 - 100?

function perfectsquare(number){
    var arr = [];
  
  for (var i = 0; i <= number; i++) {
      
    for (var j = 1; j <= i;j++)
            {
                 if (j ** 2 == i)
                {
               arr.push(i);
                }
            }
            
        }
         return arr;
  }
  
 
console.log(perfectsquare(100));

/*Output:[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]

*/


//Q4: Find out all the prime numbers from 0 - 100?


function prime(number)

{
  
    var nums = [];
  
    for(var i=1;i<=number;i++)
        {
            var count=0;
             for( var j=1;j<=i;j++)
            {
                 if(i%j==0)
                    {
                    count++;
                   // nums.push(count);
                    }
        
            }

            if(count==2)
            {   
                nums.push(i);

            }
            
        }
        
        return nums;
}
 
console.log(prime(100));

/* Output:
[
   2,  3,  5,  7, 11, 13, 17, 19,
  23, 29, 31, 37, 41, 43, 47, 53,
  59, 61, 67, 71, 73, 79, 83, 89,
  97
]

*/

//Q5: Find out all the numbers that are not divisible by 2 or 4 or 6 or 8 in the range of 1-100?
function divisibleBy(number)
{
    
    var arr = [];

    for(var i=0; i< arr.length;i++)
        {
            if(i%2 !==0 && i%4 !==0 && i%6 !==0 && i%8 !==0)
            {
                nums.push(i);
            }
           
        }
        return nums;
}
console.log (divisibleBy(100));


/*Output:[
   1,  3,  5,  7,  9, 11, 13, 15, 17, 19, 21,
  23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43,
  45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65,
  67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87,
  89, 91, 93, 95, 97, 99
]

*/

//Q6: Find out all the numbers that are divisible by 2 and 10 in range 1-100?

function divisibleBytwoTen(number)
{
    
    var nums = [];
   
    for(var i=0; i< number;i++)
        {
            if(i%2==0 && i%10==0)
            {
                nums.push(i);
            }
           
        }
        return nums;
}
console.log (divisibleBytwoTen(100));

/*Output:
[
    0, 10, 20, 30, 40,
   50, 60, 70, 80, 90
 ]

 */

 //Q7: Output the fibonacci series from 1-50?

 function fibonacci(number)
{
 
   var arr = [0,1];
   
    //read the values
     for (var i = 2; i <= number ; i++) {
      arr.push(arr[i-2] + arr[i-1]);
       
    }
    
    return arr;
}

console.log(fibonacci(7));

/* Output:[
  0, 1, 1,  2,
  3, 5, 8, 13
] */

function reverse_string()
{
 
   var arr = [];
    var nums = [];
    var str='this is my first string';
   
    for(var i=str.length-1;i>=0;i--)
        {
            arr=str.charAt(i)
        nums.push(arr);
        //arr=nums.push(i);
        }

 document.write(nums);

}

reverse_string(); 


/* Output:[
  'g', 'n', 'i', 'r', 't',
  's', ' ', 't', 's', 'r',
  'i', 'f', ' ', 'y', 'm',
  ' ', 's', 'i', ' ', 's',
  'i', 'h', 't'
]


*/

/*Q9. Takes a number but as a string and returns the sum of all digits.
  //Example: '4356' returns 18 because 4 + 3 + 5 + 6 is 18
*/


function sumofdigits(number)
{
 
 
    var nums = [];
    var sum=0;
      
    for(var i=1;i <= number.length;i++)
        {
            //nums.push(i);
            sum=sum+parseInt(i);
       
        //arr=nums.push(i);
    
        }

 document.write(sum);

}

sumofdigits('1234567');


//output:28

//Q10. Takes a string and returns the string with last character removed.
  //Example:- for 'hello' as input return 'hell



  function removedLastElement(number)
  {
   
     var arr = [];
    
       for(var i=0;i<=number.length ; i++)
      {
          arr.push(number.slice(0,-1));
          return arr;
      }
      
      
  }
  
  console.log(removedLastElement('nimisha'));

  //output:[ 'nimish' ]