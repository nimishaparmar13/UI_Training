//Q1. Have two integer variables and print greatest among them. You can prompt those two numbers from the user

function greatestNumber()
{
 
   var arr = [12,3,56,90,10];
   var nums=[];
    //read the values
    
    for(var i=0;i<=arr.length;i++)
    {
        if(arr[i] > arr[i+1])
        {   
        nums = arr[i];;
        }
       
  }
  return nums;
}

console.log(greatestNumber());


//ouput:90
/*  Q2. Given a score variable as an integer number write if, else, else if conditions to 
print the grade as follows
a. Below 25 - print F 
b. 25 to 45 - print E
c. 45 to 80 - print D
f. Above 80 - print A*/

function grade(s)

{
    var score=[];
    score.push(s);
    if(score<25)
    {
            return('F'); 
    }
    else if(score<=25 || score<45)
    {
        return('E'); 
    }
    else if(score<=45 || score<80)
    {
        return('D'); 
    }

    else if(score>80)
    {
        return('A'); 
    }
    else
    {
        return('invalid score');
    }
    
}

console.log(grade(45));

//output:D


/*Q3 Make a variable age with some number.
            If the person is below 21 print "Illegal to drink"
            If the person is 21 or above print "Legal Age"
            If the person is above 90 print "Too old to drink" 
*/

function drink(a)
{
    
    var age=[];
    
    age.push(a);
if(age<21)
    {
        return('Illegal to drink'); 
    }
else if(age>=21 && age<90)
    {
        return('Legal Age'); 
    }
else if(age>=90)
    {
        return('Too old to drink'); 
    }

else
    {
    return('invalid age');
    }
    
}

console.log(drink(45));

//output:Legal Age


//Q4. Given a number, check if that number is even or odd.


function evenOddNumber(number){
    var arr = [];
    
    arr.push(number);
    
    
    if(arr%2==0)
    {
    return "Number is Even";
    }
    else
    {
    return "Number is Odd";
    }

}
console.log(evenOddNumber(123));

//output:Number is Odd

/* Q5. In US you can get a license at age 16. Adam is 17 years old and Tom is 15 years old.
Write if-else statement to check who between the two is at or older than the legal driving age in US.*/

function eligible(number){
    var age = [];
    
    age.push(number);
   
    if(age>=16)
    {
    return('person is eligible to get Driving License');
    }

    else
    {
   return('person is not eligible to get Driving License');
    }
}

console.log(eligible(19));

//output:person is eligible to get Driving License


/* Q6. Given the age of the student, find out whether that student attends elementary, middle or high school. 
let the expected Age start the  high school is 14 and above, age for middle school is above 8 and the age for elementary school is above 4 years.*/


function studentage(age)
{
var student_age= [];

student_age.push(age);

if(student_age >= 4 && student_age <8 )
    {

    return('Student is attending Elementary School'); 

    }

else if(student_age>=8 && student_age<14)
    {

    return('Student is attending Middle School');

    }
else if(student_age>= 14)
    {
    return('Student is attending High School');
    }

else{
    return('wrong age');
    }
}

console.log(studentage(12));

//output:Student is attending Middle School

/*
Q8. Tornadoes are categorized in 5 different levels, depending upon the speed of winds. they are categorized as EF1 if the wind speed is above 80 mph, EF2 if the wind is above 120 mph, EF3 if the wind is above 150, EF4 if wind is above 185 and EF5 if the wind crosses 200 mph. 
There was a tornado in Oklahoma city with swirling winds of 184 mph. What category of tornado was it? 

*/
function speed(s)
{
    var speed=[];
    speed.push(s);
if(speed >= 80 && speed <120)
    {
    return('EF1 category');
    }
else if(speed >= 120 && speed < 150)
    {
   return('EF2 category');
    }

else if(speed >= 150 && speed < 185)
    {
    return('EF3 category');
    }
else if(speed >= 185 && speed < 200)
    {
    return('EF4 category');
    }
else 
    {
   return('EF5 category');
    }
    
}

console.log(speed(120));


//Output:EF2 category

/*
Q9. Given a number, if that number is a three digit number, print 3, if the number is a two digit number, print 2 or else print 1
*/

function printDigits(d)
{
var digit= [];
digit.push(d);

if(digit>0){
    return(digit.toString().length) ;
}
else{
   return('Digit number is not correct');
}

}
console.log(printDigits('123'));


//output:3

