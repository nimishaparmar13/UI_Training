//Q1. Have two integer variables and print greatest among them. You can prompt those two numbers from the user


function greaterNumber(num1,num2)
{
if(num1>=num2)
    {
    console.log('Number1 is greter number:', num1);
    }

else
    {
    console.log('Number2 is greter number:',num2); 
    }
    
}

greaterNumber(10,12);

/*Output:
Number1 is greter number: 12 */

/*  Q2. Given a score variable as an integer number write if, else, else if conditions to 
print the grade as follows
a. Below 25 - print F 
b. 25 to 45 - print E
c. 45 to 80 - print D
f. Above 80 - print A*/

function grade(score)
{
    if(score<25)
        {
        console.log('F'); 
        }
    else if(score<=25 || score<45)
    {
    console.log('E'); 
    }
    else if(score<=45 || score<80)
    {
    console.log('D'); 
    }

    else if(score>80)
    {
    console.log('A'); 
    }
    else
    {
        console.log('invalid score');
    }
    
}

grade(45);

//output:45
//D

/*Q3 Make a variable age with some number.
            If the person is below 21 print "Illegal to drink"
            If the person is 21 or above print "Legal Age"
            If the person is above 90 print "Too old to drink" 
*/


function drink(age)
{
if(age<21)
    {
    console.log('Illegal to drink'); 
    }
else if(age>=21 && age<90)
    {
    console.log('Legal Age'); 
    }
else if(age>=90)
    {
    console.log('Too old to drink'); 
    }

else
    {
    console.log('invalid age');
    }
    
}

drink(45);

//output:Legal Age

//Q4. Given a number, check if that number is even or odd.


function evenOddNumber(number)
{
if(number%2==0)
    {
    console.log("Number is Even:",number);
    }
else
    {
    console.log("Number is Odd:",number);
    }
}

evenOddNumber(120);


//*Output: Number is Even: 120

/* Q5. In US you can get a license at age 16. Adam is 17 years old and Tom is 15 years old.
Write if-else statement to check who between the two is at or older than the legal driving age in US.*/

function eligible()
{
    var age= prompt('Enter the age:');
if(age>=16)
    {
    console.log('person is eligible to get Driving License');
    }

else
    {
    console.log('person is not eligible to get Driving License');
    }
}

eligible();

/* Output: Enter the age:12
person is not eligible to get Driving License
/*

/* Q6. Given the age of the student, find out whether that student attends elementary, middle or high school. 
let the expected Age start the  high school is 14 and above, age for middle school is above 8 and the age for elementary school is above 4 years.*/

function studentage()
{
var student_age= prompt('Enter the age of the student:');

if(student_age >= 4 && student_age <8 )
    {

    console.log('Student is attending Elementary School'); 

    }

else if(student_age>=8 && student_age<14)
    {

    console.log('Student is attending Middle School');

    }
else if(student_age>= 14)
    {
    console.log('Student is attending High School');
    }

else{
    console.log('wrong age');
    }
}

studentage();

/*
output:
Enter the age of the student:22
Student is attending High School

*/

/*
7. Fred is 25 years old, Greg is 26 years old and Harris is 28 years old. 
Find out who is the oldest brother and who is the youngest among the three.
*/

function youngest()
{
var fred=25, greg=26, harris=28;

if(fred <= greg && fred<= harris)
{
    console.log('fred is the youngest among the three:',fred);
}

else if(greg <= fred && greg <= harris)
{
    console.log('greg is the youngest among the three',greg);
}

else
{
    console.log('fred is the youngest among the three:',harris);
}
}

youngest();

/* Output:
fred is the youngest among the three: 25

*/


/*

Q8. Tornadoes are categorized in 5 different levels, depending upon the speed of winds. they are categorized as EF1 if the wind speed is above 80 mph, EF2 if the wind is above 120 mph, EF3 if the wind is above 150, EF4 if wind is above 185 and EF5 if the wind crosses 200 mph. 
There was a tornado in Oklahoma city with swirling winds of 184 mph. What category of tornado was it? 

*/
function speed(speed)
{
if(speed >= 80 && speed <120)
    {
    console.log('EF1 category');
    }
else if(speed >= 120 && speed < 150)
    {
    console.log('EF2 category');
    }

else if(speed >= 150 && speed < 185)
    {
    console.log('EF3 category');
    }
else if(speed >= 185 && speed < 200)
    {
    console.log('EF4 category');
    }
else 
    {
    console.log('EF5 category');
    }
    
}

speed(120);

//output:EF2 category

/*
Q9. Given a number, if that number is a three digit number, print 3, if the number is a two digit number, print 2 or else print 1
*/

function printDigits()
{
var digit= prompt('Enter the digit:');

if(digit>0){
    console.log(digit.toString().length) ;
}
else{
    console.log('Digit number is not correct');
}

}
printDigits();

/*
Output:Enter the digit:2345
4

Output2:
Enter the digit:34yhs
Digit number is not correct
*/