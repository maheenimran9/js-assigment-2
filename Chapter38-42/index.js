/* 1. Write a custom function power ( a, b ), to calculate the value of 
a raised to b. */

// function power(a, b){
//     var result = 1;
//     for(var i = 1; i <=b ; i++){
//         result = result * a;
//     }
//     return result;
// }

// alert(power(2,3));

/* 2. Any year is entered through the keyboard. Write a function to 
determine whether the year is a leap year or not. 
Leap years ..., 2012, 2016, 2020, … */

// function isLeapYear(year){
//     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//        return "leap year";
//     } else{
//         return "Not a leap year";
//     }
// }

// var year = +prompt("Enter a year");
// alert(isLeapYear(year));

/* 3. If the lengths of the sides of a triangle are denoted by a, b, and 
c, then area of triangle is given by 
area = S(S − a)(S − b)(S − c) 
where, S = ( a + b + c ) / 2 
Calculate area of triangle using 2 functions */

// function calcS(a, b, c){
//    return (a + b + c) / 2 ;
// } 
// function triangleArea(a, b, c){
//     var s = calcS(a, b, c);
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// alert(triangleArea(3, 4, 5)); 
/* 4. Write a function that receives marks received by a student in 3 
subjects and returns the average and percentage of these 
marks. there should be 3 functions one is the mainFunction 
and other are for average and percentage. Call those functions 
from mainFunction and display result in mainFunction. */

// function average(m1, m2, m3){
//     return(m1 + m2 + m3) / 3 ;
// }

// function percentage(m1, m2, m3){
//     return((m1 + m2 + m3) / 300) * 100;
// }

// function mainFunction(m1, m2, m3){

//     var avg = average(m1, m2, m3);
//     var per = percentage(m1, m2, m3); 

//     document.write("Average " + avg + "</br>");
//     document.write("Percentage: " + per + "%");
// }
 
// mainFunction(80, 90, 100);

/* 5. You have learned the function indexOf. Code your own custom 
function that will perform the same functionality. You can code 
for single character as of now. */
 
/* 6. Write a function to delete all vowels from a sentence. Assume 
that the sentence is not more than 25 characters long. */
 
/* 7. Write a function with switch statement to count the number of 
occurrences of any two vowels in succession in a line of text. 
For example, in the sentence 
FUNCTIONS, switch statements, while… do-while loops | JAVASCRIPT 
“Pleases read this application and give me gratuity” 
Such occurrences are ea, ea, ui. */

/* 8. The distance between two cities (in km.) is input through the 
keyboard. Write four functions to convert and print this 
distance in meters, feet, inches and centimeters. */

/* 9. Write a program to calculate overtime pay of employees. 
Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
worked above 40 hours. Assume that employees do not work 
for fractional part of an hour. */

/* 10. A cashier has currency notes of denominations 10, 50 and 
100. If the amount to be withdrawn is input through the 
keyboard in hundreds, find the total number of currency notes 
of each denomination the cashier will have to give to the 
withdrawer. */