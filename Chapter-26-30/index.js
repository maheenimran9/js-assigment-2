/* 1. Write a program that takes a positive integer from user & 
display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number */

// var num = +prompt("Enter a positive integer");

// if ( isNaN(num) || num < 0) {
//     alert("Invalid input please enter a positive integer");
// } else {
//     var roundValue = Math.round(num);
//     var floorValue = Math.floor(num);
//     var ceilValue = Math.ceil(num);

//     document.writeln("Number: " + num + "<br>");
//     document.writeln("Round Value: " + roundValue + "<br>");
//     document.writeln("Floor Value: " + floorValue + "<br>");
//     document.writeln("Ceil Value: " + ceilValue + "<br>");
// }

/* 2. Write a program that takes a negative floating point 
number from user & display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number */

// var num = +prompt("Enter a negative integer");

// if ( isNaN(num) || num > 0) {
//     alert("Invalid input please enter a negative integer");
// } else {
//     var roundValue = Math.round(num);
//     var floorValue = Math.floor(num);
//     var ceilValue = Math.ceil(num);

//     document.writeln("Number: " + num + "<br>");
//     document.writeln("Round Value: " + roundValue + "<br>");
//     document.writeln("Floor Value: " + floorValue + "<br>");
//     document.writeln("Ceil Value: " + ceilValue + "<br>");
// }

/* 3. Write a program that displays the absolute value of a 
number. 
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

// var num = +prompt("Enter a number");

// if(isNaN(num)){
//   alert("Enter a valid number please dont use a-z")
// } else{
//   var absoluteValue = Math.abs(num);
//   document.writeln("Absolute number is " + absoluteValue)
// }

/* 4. Write a program that simulates a dice using random() 
method of JS Math class. Display the value of dice in your 
browser.: */

// var dice = Math.floor(Math.random()*6) + 1;
// document.writeln("Dice rolled " + dice)

/* 5. Write a program that simulates a coin toss using random() 
method of JS Math class. Display the value of coin in your 
browser */

// var coin = Math.floor(Math.random() * 2) + 1; // 1 or 2
// document.writeln("Coin toss: " + (coin === 1 ? "Heads" : "Tails"));

/* 6. Write a program that shows a random number between 1 
and 100 in your browser. */

// var num = Math.floor(Math.random() * 100) + 1 ;
// document.writeln("Random number between 1 to 100 is : " + num);

/* 7. Write a program that asks the user about his weight. Parse 
the user input and display his weight in your browser. 
Possible user inputs can be: 
a. 50 
b. 50kgs 
c. 50.2kgs 
d. 50.2kilograms */

// var input = prompt("Enter your weight in kgs..");
// var weight = parseFloat(input);

// if (isNaN(weight)) {
//   alert("Enter a valid number");
// } else {
//   document.writeln("The weight of user is : " + weight + " Kilograms");
// }

/* 8. Write a program that stores a random secret number from 
1 to 10 in a variable. Ask the user to input a number 
between 1 and 10. If the user input equals the secret 
number, congratulate the user. */

// var secretNumber = Math.floor( Math.random() * 10 ) + 1;
// var userGuess = prompt("Enter a secret number");

// if( userGuess === secretNumber){
//   alert("Congratulations you guess a secret number correct 🎉");
// } else {
//     alert("Wrong guess. The secret number was: " + secretNumber);
// }

