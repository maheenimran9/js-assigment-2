/* 1. Write a program that displays current date and time in 
your browser. */

// var date = new Date();
// document.writeln(date);

/* 2. Write a program that alerts the current month in words. 
For example December. */

// var month = new Date();
// var monthIndex = month.getMonth();

// var months = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
// ];

// var currentMonth = months[monthIndex];

// document.writeln("Current month: " + currentMonth);

/* 3. Write a program that alerts the first 3 letters of the current 
day, for example if today is Sunday then alert will show 
Sun. */

// var day = new Date();
// var currentDay = day.getDay();

// var dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = dayIndex[currentDay];

// document.writeln("Today is : " + today );

/* 4. Write a program that displays a message “It’s Fun day” if 
its Saturday or Sunday today. */

// var day = new Date();
// var currentDay = day.getDay();

// var dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = dayIndex[currentDay];

// if( today === "Sunday" || today === "Saturday"){
//  alert("Its fun day ");
// } else{
//     alert("Focus on your work");
// }

/* 5. Write a program that shows the message “First fifteen 
days of the month” if the date is less than 16th of the month 
else shows “Last days of the month” */

// var date = new Date();
// var onlyDate = date.getDate();
// var messageOne = "First Fifteen days of the month";
// var messageTwo = "Last days of the month"

// if(onlyDate <= "15"){
//  alert(messageOne);
// } else if(onlyDate === "16"|| onlyDate <= "30" ){
//   alert(messageTwo);
// }

/* 6. Write a program that determines the minutes since 
midnight, Jan. 1, 1970 and assigns it to a variable that 
hasn't been declared beforehand. Use any variable you like 
to represent the Date object. */

// var date = new Date();
// var oldMinutes = date.getTime();

// document.writeln("Current Date : " + date + "</br>");
// document.writeln("Since midnight Jan/1/1970 : " + oldMinutes + "</br>")

/* 7. Write a program that tests whether it's before noon and 
alert “Its AM” else “its PM”. */

// var now = new Date();
// var hour = now.getHours();

// if (hour < 12) {
//     alert("Its AM");
// } else {
//     alert("Its PM");
// }

/* 8. Write a program that creates a Date object for the last day 
of the last month of 2020 and assigns it to variable named 
laterDate. */

// var laterDate = new Date(2020, 11, 31);

// document.write(laterDate);

/* 9. Create a date object of the starting date of this Ramadan 
and alert the number of days past since 1st Ramadan? 
Note: 1st Ramadan was on June 18, 2015 */

// var ramadanDate = new Date("June 18, 2015");
// var today = new Date();

// var diff = today - ramadanDate;
// var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));

// alert(daysPassed + " days have passed since 1st Ramadan");

/* 10. Write a program that displays in your browser the 
seconds that elapsed between the reference date and the 
beginning of 2015. */

// var refDate = new Date();
// var start2015 = new Date("Jan 1, 2015");

// var diff = refDate - start2015;
// var seconds = Math.floor(diff / 1000);

// document.write("Seconds since Jan 1, 2015: " + seconds);

/* 11. Create a Date object for the current date and time. 
Extract the hours, reset the date object an hour ahead and 
finally display the date object in your browser. */

// var now = new Date();

// document.write("Current date: " + now + "<br>");

// now.setHours(now.getHours() + 1);

// document.write("1 hour later: " + now);

/* 12. Write a program that creates a date object and show the 
date in an alert box that is reset to 100 years back? */

// var now = new Date();

// now.setFullYear(now.getFullYear() - 100);

// alert("100 years back, it was: " + now);

/* 13. Write a program to ask the user about his age. Calculate 
and show his birth year in your browser. */

// var age = prompt("Enter your age");

// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("Your age is: " + age + "<br>");
// document.write("Your birth year is: " + birthYear);

/* 14. Write a program to generate your K-Electric bill in your 
browser. All the amounts should be rounded off to 2 
decimal places. Display the following fields: 
a. Customer Name 
b. Current Month 
c. Number of units 
d. Charges per unit 
e. Net Amount Payable (within Due Date) 
f. Late Payment Surcharge 
g. Gross Amount Payable (after Due Date) 
Where, 
Net Amount Payable (within Due Date) = Number of units * Charges per unit 
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */

// var customerName = "Maheen Imran";
// var currentMonth = "April";
// var units = 410;
// var chargesPerUnit = 16;

// var netAmount = units * chargesPerUnit;
// var lateSurcharge = 350;
// var grossAmount = netAmount + lateSurcharge;

// // display
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + currentMonth + "<br>");
// document.write("Units: " + units + "<br>");
// document.write("Charges per unit: " + chargesPerUnit + "<br><br>");

// document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
// document.write("Late Payment Surcharge: " + lateSurcharge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));