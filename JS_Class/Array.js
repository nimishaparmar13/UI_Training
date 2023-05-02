/*
Q1. Takes two numbers:- sizeOfArray and numberOfZeroes.
Using loop to create array of size given with each array having number of zeroes provided.
Example:- sizeOfArray is 3 and numberOfZeroes is 4
Return Value is:-   [[0,0,0,0],[0,0,0,0],[0,0,0,0]]


*/

function numbersofzero()
{
    var parentArray = [];
  
  for(var i = 0; i < 3; i++ )
  {
  	var childArray = [];
      for(var j = 0; j < 4; j++)
      {
				var count=0;
        childArray.push(count); // i = 0, [1,2,3]
        
      }
      
    parentArray.push(childArray); //[[1,2,3], [4,5,6], [7,8,9]]
  }
	return parentArray;
}
        

console.log(numbersofzero());

//Output:[ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]

//Q2. Takes an array of numbers and returns the sum of all the numbers in the array.

function sumofallElement(number)
{
    var arr = [];
    var sum=0;
    
  for(var i = 0; i <= number; i++ )
  {
   sum= sum+arr.push(i); 
  }
  
	return sum;
}
        
console.log(sumofallElement(10));

//Output:66

//Q3. Takes an array of numbers and find the second largest number in it and returns that number.

function secondlargest()
{
 
   var arr = [12,3,56,90,10];
    var firstlargest=0;
     var second=0;
    //read the values
    
    for(var i=0;i<=arr.length;i++)
    {
        if(arr[i] > firstlargest)
        {   
        second = firstlargest;
        firstlargest=arr[i];
        }
       else if(firstlargest > arr[i] && arr[i] > second){
           second=arr[i];
       }
  }
  return second;
}

console.log(secondlargest());

//output: 56

/*
Q4. Write a function that takes an array of names eg - 
['Harry', 'Manny', 'bobby', 'Jacob','Harris','laura'] and returns the array with the names, the length of which is more than 5. eg - ['Harris'] 


*/

function name()
{
    arr=['Harry', 'Manny', 'bobby', 'Jacob','Harris','laura'];
    
    let resultArray = [];
  for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= 6){
            resultArray.push(arr[i]);
        }
  }
  return resultArray;

}

console.log(name());

//Output:[ 'Harris' ]

/*
Q5. write a function that creates an array of all even number from 1 – 100
-a[i]%2==0
*/

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

/*Output:
[
   2,  4,  6,  8, 10, 12, 14, 16, 18, 20, 22,
  24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44,
  46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66,
  68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
  90, 92, 94, 96, 98
]

/*
Q6. write a function that creates an array. eg - [[2,4,6,8],[1,3,5,7,9]]
*/

function evenOddNumber(number)
{
    let odd = [];
    let even = [];
    let result=[];
  for(let i = 1; i < number; i++ ){
			if(i%2==0){
			   
            even.push(i); 
			}
			else{
			  odd.push(i);
        
			}
	// take resulting array push even and odd
  }
  result.push(even,odd);
return result;
}
        
console.log(evenOddNumber(10));

//Output:[ [ 2, 4, 6, 8 ], [ 1, 3, 5, 7, 9 ] ]

//Q7. write a function that creates an array of all the even numbers from 1 - 10. eg - [[2,4,6,8]]

function evenNumber(number)
{
    let odd = [];
    let even = [];
  
  for(let i = 1; i < number; i++ )
  {
			if(i%2==0)
			{
			   
            even.push(i); // i = 0, [1,2,3]
			}
		
		
    //parentArray.push(); //[[1,2,3], [4,5,6], [7,8,9]]
  }
return even;
}
        
console.log(evenNumber(10));

//output:[ 2, 4, 6, 8 ]


/*
Q8. write a function that creates an array from 1-5. eg - [[2,4],[3,9],[4,16],[5,25]], here on index 0 i.e.[2,4], 4 is the square of 2. 
likewise 9 is the square of 3 on index 1 i.e. [3,9], and so on...

*/


function perfectsquare()
{
    arr = [];


for(let i=1;i<=5;i++){
  let num = [];
  
  num.push(i,i*i)
  arr.push(num);
  
  
}

return arr;

}

console.log(perfectsquare());

//Output:[ [ 1, 1 ], [ 2, 4 ], [ 3, 9 ], [ 4, 16 ], [ 5, 25 ] ]

//write a function that creates an array eg - [[0],[0,0],[0,0,0],[0,0,0,0],[0,0,0,0,0]]

function numbersofzero()
{
    var parentArray = [];
    
  for(var i = 0; i <5; i++)
  {
  	var childArray = [];
      for(var j = i; j <= 3; j++)
      {
				var count=0;
        childArray.push(count); // i = 0, [1,2,3]'
        
        
      }
      
    	parentArray.push(childArray);
  }
        console.log(parentArray.reverse());

}
      
numbersofzero();

//Output:[ [ 0 ], [ 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0, 0 ] ]


/*
Q10.Write a function to output the alphabets from the 3rd index of this array - 
[['a','b','c'],['d','e','f','g'],['h','i','j','k','l','m'],['o','p','q','r','s','t','u','v','w'],['x','y','z']

*/

function alphabatesreturn()
{
    var arr = [['a','b','c'],['d','e','f','g'],['h','i','j','k','l','m'],['o','p','q','r','s','t','u','v','w'],['x','y','z']];
    let result = [];
   let a=[];
    for (let i = 0; i > arr.length; i++)
    {
         
        result.push(arr[i]);
        
    }
     a.push(arr[3]);
    console.log(a);
}
        

alphabatesreturn();


/* Output:

[ [
    'o', 'p', 'q',
    'r', 's', 't',
    'u', 'v', 'w'
  ] ]

*/








