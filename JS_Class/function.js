const prompt=require('prompt-sync')();

//Q1: Find out all the even numbers from 1 - 100?

function evenOddNumber(){

    for(var i=1; i<=100;i++)
        {
            if(i%2==0)
            {
            document.write('Number is Even:',i);
            }
        }

}
evenOddNumber();

/* Output:
Number is Even: 2
Number is Even: 4
Number is Even: 6
Number is Even: 8
Number is Even: 10
Number is Even: 12
Number is Even: 14
Number is Even: 16
Number is Even: 18
Number is Even: 20
Number is Even: 22
Number is Even: 24
Number is Even: 26
Number is Even: 28
Number is Even: 30
Number is Even: 32
Number is Even: 34
Number is Even: 36
Number is Even: 38
Number is Even: 40
Number is Even: 42
Number is Even: 44
Number is Even: 46
Number is Even: 48
Number is Even: 50
Number is Even: 52
Number is Even: 54
Number is Even: 56
Number is Even: 58
Number is Even: 60
Number is Even: 62
Number is Even: 64
Number is Even: 66
Number is Even: 68
Number is Even: 70
Number is Even: 72
Number is Even: 74
Number is Even: 76
Number is Even: 78
Number is Even: 80
Number is Even: 82
Number is Even: 84
Number is Even: 86
Number is Even: 88
Number is Even: 90
Number is Even: 92
Number is Even: 94
Number is Even: 96
Number is Even: 98
Number is Even: 100

*/

//Q2: Find out all the multiples of 3 and 5 in the range 50 - 100?

function multiples()

{

    for( var i=50; i<=100;i++)
    {
        if(i%3==0 && i%5==0)
        {
            document.write('Multiples number of 3 and 5:',i);
        }
    }
    
}
    multiples();

/*
Output:Multiples number of 3 and 5: 60
Multiples number of 3 and 5: 75
Multiples number of 3 and 5: 90

*/

//Q3: Find out all the perfect squares from 1 - 100?

function perfectSquare()
{
    for ( var i = 1; i <= 100; i++)
        {
        for (var j = 1; j <= i;j++)
            {
                 if (j ** 2 == i)
                {
                document.write('perfect square:',i);
                }
            }
            
        }

}

perfectSquare();


/*
Output:
perfect square: 1
perfect square: 4
perfect square: 9
perfect square: 16
perfect square: 25
perfect square: 36
perfect square: 49
perfect square: 64
perfect square: 81
perfect square: 100

*/

//Q4: Find out all the prime numbers from 0 - 100?

function prime()
{
    for(var i=1;i<=100;i++)
        {
            var count=0;
             for( var j=1;j<=i;j++)
            {
                 if(i%j==0)
                    {
                    count++;
                    }
        
            }

            if(count==2)
            {   
                document.write(i);

            }
        }
}

prime();

/* Output:
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97

*/

//Q5: Find out all the numbers that are not divisible by 2 or 4 or 6 or 8 in the range of 1-100?
function divisibleBy()
{
    for(var i=1; i<=100;i++)
        {
            if(i%2 !==0 && i%4 !==0 && i%6 !==0 && i%8 !==0)
            {
                document.write(i);
            }
        }
}
divisibleBy();

/*Output:
1
3
5
7
9
11
13
15
17
19
21
23
25
27
29
31
33
35
37
39
41
43
45
47
49
51
53
55
57
59
61
63
65
67
69
71
73
75
77
79
81
83
85
87
89
91
93
95
97
99
*/

//Q6: Find out all the numbers that are divisible by 2 and 10 in range 1-100?

function divisiblebyTwoTen()
    {
        for(var i=1; i<=100;i++)
            {
                if(i%2==0 && i%10==0)
                    {
                     document.write('Multiples number of 2 and 10:',i);
                    }
            }
    }

divisiblebyTwoTen();

/*
Output:
Multiples number of 2 and 10: 10
Multiples number of 2 and 10: 20
Multiples number of 2 and 10: 30
Multiples number of 2 and 10: 40
Multiples number of 2 and 10: 50
Multiples number of 2 and 10: 60
Multiples number of 2 and 10: 70
Multiples number of 2 and 10: 80
Multiples number of 2 and 10: 90
Multiples number of 2 and 10: 100

*/


//Q7: Output the fibonacci series from 1-50?

function fibonacci()
{
    var n1=0,n2=1,n3;

		for(var i=2;i<10;++i)
         {
			
			 n3=n1+n2;    
			  document.write(n3);    
			  n1=n2;    
			  n2=n3; 
		}
}

fibonacci();

/*Output:1
2
3
5
8
13
21
34

*/

//Q8. Takes a string and returns the reversed string.

function reverse_string(str)
{
 
    var s2="";

    for(var i=str.length-1;i>=0;i--)
        {
    
        s2=s2+str.charAt(i);
    
        }

 document.write(s2);

}

reverse_string('this is my first string');

//output:gnirts tsrif ym si siht

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
        
    document.write(sum);
}

sumofdigits('1234567');


//output:Enter the string:1234567
//28

//Q10. Takes a string and returns the string with last character removed.
  //Example:- for 'hello' as input return 'hell'

function removedstring(s)
{
 
      var s2='';
    for(let h = 1; h <= s.length; h++)
        {
            s2=s.slice(0,s.length-1);
           
        }
        
      document.write(s2);
}

removedstring('Nimisha');

//Output:Enter the string:Nimisha
//Nimish

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

    document.write(count);

}

vowelscount('nimisha', 0);

//Output:Enter the string:Hello
//3
