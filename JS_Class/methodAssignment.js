//1. Takes an list with numbers and first squares all the numbers and multiplies all the squares to get one product.

function square(s){
    let mapResult = s.map((element) => element**2).reduce((multiple1, element) => multiple1 * element);;// find all square

    return(mapResult);
    
    }
    let arr =[2, 4, 6, 8];
    console.log(square(arr));

    //Output:147456

    //2. Takes an array of strings and keeps strings that have vowels 'a' and 'i' in them and removes all others as a new array.

    function vowels(array1)
    {
        let vowel=/[ai]/;
    let result2 = array1.filter(element => vowel.test(element));//The test() method tests for a match in a string.
      console.log(result2);
      let result= array1.filter(element => ! vowel.test(element));
      console.log(result);
    }
    
    arr= ['java','c','C++', 'javascript','python','c#'];
    vowels(arr);

/*Output:[ 'java', 'javascript' ]
[ 'c', 'C++', 'python', 'c#' ]
*/

/**
 3. Takes an list of lists like this -> [ [3,46,7,8], [4,6,8,10], [6,7,8,8], [24,6]] and returns only the list that has even numbers in it.//example return value will be -> [[4,6,8,10], [24,6]]
 */
 function evenNumberList(list1){

    const result = list1.filter(list => list.filter(num => num % 2 == 0).length == list.length);
    return(result);
    }
    const list1 = [[3, 46, 7, 8], [4, 6, 8, 10], [6, 7, 8, 8], [24, 6]];
    console.log(evenNumberList(list1));


  //output:[ [ 4, 6, 8, 10 ], [ 24, 6 ] ]

//4. Takes an list of dictionaries with each dictionary containing a key called 'name' and returns an list with those names.
//Example: Input ->  [ {name: "john"},{name: "bob"},{name: "mary"},{name: "doe"}]
// Output -> ["john", "bob", "mary", "doe"]

function name(){
    
    let array2=[ {name: "john"},{name: "bob"},{name: "mary"},{name: "doe"}];
    let mapResult = array2.map((element) => element.name);
    return(mapResult);
    }
    
    console.log(name());


    //Output:[ 'john', 'bob', 'mary', 'doe' ]

    //5. Takes an list of numbers and returns true if all the numbers in the list are even , otherwise returns false. Remember no Loops!

    let numbers = [2, 4, 5];
    let isEven = numbers.every(function (e) {
        return e % 2 == 0;
    });
    
    console.log(isEven);;//entire list

/**
 Output: false
 */

/**
 Interview question

Write a function to merge these two data given below with ID being the primary key
cardetails1 = [{id:1, name:'bmw', model:'sedan'}, {id:2, name:'merced', model:'sedan'}, {id:3, name:'porche', model:'roadster'}];

carDetails2 = [{id:1, condition:'new', year:'2021'}, {id:2, condition:'used', year:'2017'}, {id:3, condition:'salvage', year:'2020'}];

Resulting data should be :
result = [{id:1, name:'bmw', model:'sedan', condition:'new', year:'2021'}, {id:2, name:'merced', model:'sedan', condition:'used', year:'2017'}, {id:3, name:'porche', model:'roadster', condition:'salvage', year:'2020'}];
 */

function mergeArrayObjects(arr1,arr2){
    let start = 0;
    let merge = [];
  
    while(start < arr1.length){
      if(arr1[start].id == arr2[start].id){
           //pushing the merged objects into array
          merge.push({...arr1[start],...arr2[start]});// spread operator ( ... ) -allows us to quickly copy all or part of an existing array.
      }
      //incrementing start value
      start = start+1
    }
    return merge;
  }
  
  cardetails1 = [{id:1, name:'bmw', model:'sedan'}, {id:2, name:'merced', model:'sedan'}, {id:3, name:'porche', model:'roadster'}];
  
  carDetails2 = [{id:1, condition:'new', year:'2021'}, {id:2, condition:'used', year:'2017'}, {id:3, condition:'salvage', year:'2020'}];
  
  console.log(mergeArrayObjects(cardetails1,carDetails2));

  /**
   Output:
   [
  {
    id: 1,
    name: 'bmw',
    model: 'sedan',
    condition: 'new',
    year: '2021'
  },
  {
    id: 2,
    name: 'merced',
    model: 'sedan',
    condition: 'used',
    year: '2017'
  },
  {
    id: 3,
    name: 'porche',
    model: 'roadster',
    condition: 'salvage',
    year: '2020'
  }
]
   */
