const prompt=require('prompt-sync')();

//Q8. Takes a string and returns the reversed string.

function reverse_string(str)
{
 
    var s2="";

    for(var i=str.length-1;i>=0;i--)
        {
    
        s2=s2+str.charAt(i);
    
        }

 return(s2);

}

console.log(reverse_string('hello'));

/*Q9. Takes a number but as a string and returns the sum of all digits.
  //Example: '4356' returns 18 because 4 + 3 + 5 + 6 is 18
*/


function sumofdigits(s)
{
 
    var sum = 0;

    for(let h = 1; h <= s.length; h++)
        
        {
        sum = sum + parseInt(h);   
        }
        
    return(sum);
}

document.write(sumofdigits('1234'));


//output:
//10


//Q10. Takes a string and returns the string with last character removed.
  //Example:- for 'hello' as input return 'hell'

  function removedstring(s)
  {
   
        var s2='';
      for(let h = 1; h <= s.length; h++)
          {
              s2=s.slice(0,s.length-1);
             
          }
          
        return(s2);
  }
  
  document.write(removedstring('Nimisha'));

  //output:Nimish


  //Q11. find the number of vowels in the string and returns the count. For example: 'john doe' will return 3. 
  //two 'o's and 1 'e'.
  //(Hint: a, e , i , o , u are vowels)


  function vowelscount(str, count)

  {
  
      for(let i = 0; i <= str.length; i++)
          {
      
              var s=str.charAt(i)
              if( s== 'a'|| s == 'e'|| s == 'i' || s == 'o' || s == 'u')
              {
                  count++;
              }
         
          }
  
      return(count);
  
  }
  
  document.write(vowelscount('krunal', 0));

//Output:Enter the string:Hello
//2
