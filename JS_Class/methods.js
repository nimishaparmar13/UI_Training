// map, reduce and filter for arrays

let array1 = ['toyota', 'honda', 'subaru', 'GMC', 'buick'];
let array2 = [2, 4, 6, 8];

//1st way
let result2 = array1.filter(function(element) {
  if (element.length > 5) {
  	return element;
}
});
document.write('filter 1st way: ', result2);
document.write('<br />');

//2nd way
let result1234 = array1.filter((element) => {
  if(element.length > 5){
  	return element;
  }
});
document.write('filter 2nd way: ', result1234);
document.write('<br />');

// 3rd way
let result123 = array1.filter((element) => element.length > 5);
document.write('filter 3rd way: ', result123);

/* let array2 =  ['toyota', 'honda', 'subaru', 'GMC', 'buick']; */
document.write('<br />');

//4th way (standard way, not used much)
function checkResultArray(element) {
	//fewfewfewfewfew
	return element.length > 5;
}
let result1 = array1.filter(checkResultArray);
document.write('filter 4th way: ', result1);
document.write('<br />');


// map
let mapResult = array2.map((element) => element*element);
document.write(mapResult);
document.write('<br />');


//reduce
let reduceResult = array2.reduce((accumulator, element) => accumulator + element);
document.write(reduceResult);

function A(array1){
	//let result = array1.filter((element) => element.length > 5);
	//return result;
}

A(['toyota', 'honda', 'subaru', 'GMC', 'buick']);