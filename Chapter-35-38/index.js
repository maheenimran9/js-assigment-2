/* 1. Write a function that displays current date & time in your 
browser. */

// function showDateTime(){
//   var now = new Date();
//   document.writeln(now);
// }

// showDateTime();

/* 2. Write a function that takes first & last name and then it 
greets the user using his full name.*/ 

/* 2. Greet User with Full Name */

// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Hello " + fullName);
// }

// greetUser("Maheen", "Imran");

/* 3. Write a function that adds two numbers (input by user) 
and returns the sum of two numbers. */

// function addNumber(num1, num2){
//     return num1 + num2;
// }

// var a = +prompt("Enter First Number");
// var b = +prompt("Enter Second Number");

// var results = addNumber(a, b);
// alert("Sum is : " + results)

/* 4. Calculator:  
Write a function that takes three arguments num1, num2 
& operator & compute the desired operation. Return and 
show the desired result in your browser. */

// function calculator(num1, num2, operator) {

//     if (operator === "+") {
//         return num1 + num2;
//     }
//     else if (operator === "-") {
//         return num1 - num2;
//     }
//     else if (operator === "*") {
//         return num1 * num2;
//     }
//     else if (operator === "/") {
//         return num1 / num2;
//     }
//     else {
//         return "Invalid operator";
//     }
// }

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var op = prompt("Enter operator (+, -, *, /)");

// var answer = calculator(num1, num2, op);

// alert("Result: " + answer);

/* 5. Write a function that squares its argument. */ 

// function square(num) {
//     return num * num;
// }

// var number = +prompt("Enter a number");
// var result = square(number);

// alert("Square is: " + result);

/* 6. Write a function that computes factorial of a number.  */

// function factorial(num) {
//     var result = 1;

//     for (var i = 1; i <= num; i++) {
//         result = result * i;
//     }

//     return result;
// }

// var number = +prompt("Enter a number");
// alert("Factorial is: " + factorial(number));

/* 7. Write a function that take start and end number as inputs 
& display counting in your browser.  */

// function factorial(num) {
//     var result = 1;

//     for (var i = 1; i <= num; i++) {
//         result = result * i;
//     }

//     return result;
// }

// var number = +prompt("Enter a number");
// alert("Factorial is: " + factorial(number));

/* 8. Write a nested function that computes hypotenuse of a 
right angle triangle.  
Hypotenuse2 = Base2 + Perpendicular2 
Take base and perpendicular as inputs. 
Outer function : calculateHypotenuse() 
Inner function: calculateSquare()  */

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(num) {
//         return num * num;
//     }

//     var hypotenuse = Math.sqrt(
//         calculateSquare(base) + calculateSquare(perpendicular)
//     );

//     return hypotenuse;
// }

// var b = +prompt("Enter base");
// var p = +prompt("Enter perpendicular");

// alert("Hypotenuse is: " + calculateHypotenuse(b, p));

/* 9. Write a function that calculates the area of a rectangle. 
A = width * height 
Pass width and height in following manner: 
i. Arguments as value 
ii. Arguments as variables  */

// function area(width, height) {
//     return width * height;
// }

// document.write("Area (values): " + area(5, 10) + "<br>");

// var w = 7;
// var h = 4;

// document.write("Area (variables): " + area(w, h));

/* 10. Write a JavaScript function that checks whether a passed 
string is palindrome or not?   
A palindrome is word, phrase, or sequence that reads the same backward as 
forward, e.g., madam.  */

// function isPalindrome(str) {

//     var check = str.toLowerCase();
//     var reversed = check.split("").reverse().join("");

//     if (check === reversed) {
//         return "Yes, it's a palindrome";
//     } else {
//         return "No, it's not a palindrome";
//     }
// }

// var word = prompt("Enter a word");
// alert(isPalindrome(word));

/* 11. Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the 
string in upper case.  
EXAMPLE STRING : 'the quick brown fox'  
EXPECTED OUTPUT : 'The Quick Brown Fox' */

// function toTitleCase(str) {

//     var words = str.toLowerCase().split(" ");

//     for (var i = 0; i < words.length; i++) {
//         words[i] =
//             words[i].charAt(0).toUpperCase() +
//             words[i].slice(1);
//     }

//     return words.join(" ");
// }

// var input = prompt("Enter a sentence");
// alert(toTitleCase(input));

/* 12. Write a JavaScript function that accepts a string as a 
parameter and find the longest word within the string.  
EXAMPLE STRING : 'Web Development Tutorial'  
EXPECTED OUTPUT : 'Development' */

// function findLongestWord(str) {

//     var words = str.split(" ");
//     var longest = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }

//     return longest;
// }

// var input = "Web Development Tutorial";
// alert("Longest word: " + findLongestWord(input));

/* 13. Write a JavaScript function that accepts two arguments, a 
string and a letter and the function will count the number of 
occurrences of the specified letter within the string.  
Sample arguments : 'JSResourceS.com', 'o' */

// function countLetter(str, letter) {

//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }

//     return count;
// }

// alert(countLetter("JSResourceS.com", "o"));

/* 14. The Geometrizer Create 2 functions that calculate properties of a circle, using 
the definitions here. 

Create a function called calcCircumference: 

• Pass the radius to the function. 
• Calculate the circumference based on the radius, and output 
"The circumference is NN". 

Create a function called calcArea: 

• Pass the radius to the function. 
• Calculate the area based on the radius, and output "The area 
is NN". 

Circumference of circle = 2πr 
Area of circle = πr2 */

// function calcCircumference(radius) {

//     var circumference = 2 * Math.PI * radius;

//     document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }

// calcCircumference(5);


// /* 14. Area of Circle */

// function calcArea(radius) {

//     var area = Math.PI * radius * radius;

//     document.write("The area is " + area.toFixed(2));
// }

// calcArea(5);