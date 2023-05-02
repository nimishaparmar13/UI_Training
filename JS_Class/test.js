const prompt=require('prompt-sync')();

/*
Q1: Write a function, create a variable and assign it some value (you can also pass it as parameter). Write the code in the function to find out if the value of that variable is a string or number or Boolean.


*/


function variable_type(str)
{
    
    return typeof str;
}

console.log(variable_type(true));
console.log(variable_type(123));
console.log(variable_type('nimisha'));

/* output:boolean
number
string */

/*
Q2: Write a function to find and return the sum of all the composite numbers from 25 to 50.
 Composite numbers are not prime numbers

*/


function composite_number()
{
    for(var i=20;i<=50;i++)
        {
            var count=0;
             for( var j=20;j<=50;j++)
            {
                 if(i%j == 0)
                    {
                    count++;
                    }
        
            }

            if(count != 2)
            {   
                document.write(i);

            }
        }
}

composite_number();


/*
output:
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
41
43
45
47
49

*/


/*
Q3: Write a function to output the exact pattern shown below using nested loops. Pattern is for 2 weeks and each week has 7 daysWeek: 1
    Days: 2
    Days: 4
    Days: 6
Week: 2
    Days: 2
    Days: 4
    Days: 6



*/

function week_pattern()

{
    for(var i=1;i<=2;i++)
    {
        console.log('Week:', i);
        
        for(var j=2 ;j <= 6; j += 2)
        {
            console.log('Days:', j);
            
        }
       
    }
    
    
}

week_pattern();


/*

Output:Week: 1
Days: 2
Days: 4
Days: 6
Week: 2
Days: 2
Days: 4
Days: 6

*/




/*
/*
Q4. Write a function, pass two parameters as strings. The strings should have white spaces as shown in example
Str1: ‘    LET ME SHOW YOU    ‘
Str2: ‘    How it is done         ‘
Result: ‘Let me show you, how it is done’
Produce the exact result as shown above and also Keep in mind that H of how was upppercase in Str2 which is lowercase in result.
Your function should be able to accept any pair of strings like above.         

*/

function string_function(str1, str2)
{
  var result= '';
  var str= str1.trim();
  var str3=str2.trim();
  
    result=str.concat(" ", ',',str3).toLowerCase();
    
    console.log(result);

}
string_function('    LET ME SHOW YOU    ','    How it is done         ');

//output:let me show you ,how it is done
