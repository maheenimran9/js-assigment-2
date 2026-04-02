/* 1. Write a program that takes two user inputs for first and 
last name using prompt and merge them in a new variable 
titled fullName. Greet the user using his full name.*/ 

//   var firstName = prompt("Enter Your First Name..!");
//   var lastName = prompt("Enter Your Last Name..!");

//   var fullName = firstName + " " + lastName;

//   alert(" Welcome " + fullName + " to our website");

/* 2. Write a program to take a user input about his favorite 
mobile phone model. Find and display the length of user 
input in your browser */

// var phoneModel = prompt("Enter your favourite mobile phone specifications");
// var inputLength = phoneModel.length;

// document.writeln("My favourite phone is " + phoneModel + "</br>");
// document.writeln("Output length is " + inputLength);

/* 3. Write a program to find the index of letter “n” in the word 
“Pakistani” and display the result in your browser . */

// var word = "Pakistani";
// var index = word.indexOf("n");

// document.writeln("String : " + word + "</br>");
// document.writeln("Index of 'n' is : " + index );

/*4. Write a program to find the last index of letter “l” in the 
word “Hello World” and display the result in your browser.*/

// var word = "Hello world";
// var index = word.indexOf("l");

// document.writeln("String : " + word + "</br>")
// document.writeln("Idex of l is ; " + index)

/*5. Write a program to find the character at 3rd index in the 
word “Pakistani” and display the result in your browser.*/

// var word = "Pakistani";
// var character = word.charAt("3");

// document.writeln("String : " + word + "</br>");
// document.writeln("Character at index 3 : " + character);

/*6. Repeat Q1 using string concat() method. */

// var firstName = prompt("Enter Your First Name..!");
// var lastName = prompt("Enter Your Last Name..!");

// var fullName = firstName.concat(" ", lastName);
// alert("Hello " + fullName);

/*7. . Write a program to replace the “Hyder” to “Islam” in the 
word “Hyderabad” and display the result in your browser. */ 

// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");

// document.writeln("City : " + city + "</br>");
// document.writeln("After Replacement : " + newCity);

/* 8. Write a program to replace all occurrences of “and” in the 
string with “&” and display the result in your browser. */

// var message = "Ali and Sami are best friends. They play cricket & football together."; 
// document.writeln(message);

/* 9. Write a program that converts a string “472” to a number 
472. Display the values & types in your browser.*/

// var str = "472";
// var num = Number(str);

// document.writeln("Value : " + str + "</br>");
// document.writeln("Type : " + typeof str + "<br><br>");

// document.writeln("Value : " + num + "</br>");
// document.writeln("Type : " + typeof num + "</br>");

/* 10. Write a program that takes user input. Convert and 
show the input in capital letters.*/

// var userInput = prompt("Write one word");
// var changeUser = userInput.toUpperCase();

// document.writeln("Original user input : " + userInput + "</br>");
// document.writeln("Upper case : " + changeUser);

/* 11. Write a program that takes user input. Convert and 
show the input in title case. */ 

// var userInput = prompt("Write anyword");
// var changeTittle = userInput.totittlecase

/* 12. Write a program that converts the variable num to 
string. */

/* 12. Convert Number to String */

// var num = 234;
// var str = String(num);

// document.writeln("Value: " + num + "<br>");
// document.writeln("Type: " + typeof num + "<br><br>");

// document.writeln("Value: " + str + "<br>");
// document.writeln("Type: " + typeof str);

/* 13. Write a program to take user input and store username 
in a variable. If the username contains any special symbol 
among [@ . , !], prompt the user to enter a valid username. */

// var input = prompt("Write your name");

// if(input.includes("@") || input.includes(",") || input.includes(".") || input.includes("!")){
//   alert("Enter a valid name please dont waste our time")
// }else{
//   var userName = input;
//   alert("Your username is " + userName);
// }

/* 14. You have an array  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not. 
Note: Perform case insensitive search. Whether the user 
enters cookie, Cookie, COOKIE or coOkIE, program 
should inform about its availability. Example: */
