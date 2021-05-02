// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = +prompt("Enter a number");
if(number % 2 === 0) {
  alert(`The number is even`);
} else {
  alert(`The number is odd`);
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = +prompt("Enter a number");
let num2 = +prompt("Enter second number");
if(num1 > num2) {
  alert(`${num1} is max value`);
}
else{
  alert(`${num2} is max value`);
}
// 3. Convert the above code using`?` terniary operator

number % 2 === 0 ? 
  alert(`The number is even`)
  :
  alert(`The number is odd`);


  num1 > num2 ?
  alert(`${num1} is max value`)
  :
  alert(`${num2} is max value`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let user = prompt("what is your house name?");
if (user === "stark"){
  alert("winter is coming");
}
else if(user === "lannister"){
  alert("A lannister always pays his debt");
}else{
  alert("All men must die");
}
// 5. Convert the above code using`?` terniary operator
let user = prompt("what is your house name?");
user === "stark"? alert("winter is coming") : user === "lannister" ? alert("A lannister always pays his debt")
:
alert("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = prompt("Number of month?");
switch(month){
  case "jan":
    alert("The number of days are 31");
    break;
  case "march":
    alert("The number of days are 31");
    break;
  case "may":
    alert("The number of days are 31");
    break;
  case "july":
    alert("The number of days are 31");
    break;
  case "sep":
    alert("The number of days are 30");
    break;
  case "nov":
    alert("The number of days are 30");
    break;
  case "feb":
    alert("The number of days are 29");
    break;
  case "april":
    alert("The number of days are 30");
    break;
  case "june":
    alert("The number of days are 30");
    break;
  case "aug":
    alert("The number of days are 31");
    break;
  case "oct":
    alert("The number of days are 31");
    break;
  case "dec":
    alert("The number of days are 31");
    break;
  default:
    alert("Match Not Found");
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = +prompt("Enter your salary");

if (salary <= 20000){
  alert(`${salary - (10 / 100) * salary}`);
}
else if (salary <= 40000){
  alert(`${salary - (20 / 100) * salary}`);
}
else if (salary > 50000){
  alert(`${salary - (30 / 100) * salary}`);
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = +prompt("Enter your marks");

if (marks > 100){
  alert(`Marks can't be greater than 100`);
}
else if (marks > 80 && marks < 100){
  alert(`Grade A`);
}
else if (marks > 50 && marks < 80){
  alert(`Grade B`);
}
else if (marks > 30 && marks < 50){
  alert(`Grade C`);
}
else if (marks > 0){
  alert(`Grade D`);
}


let marks = +prompt("Enter your marks");
switch(true){
  case(marks > 100):
  alert(`Marks can't be greater than 100`);
  break;
  case(marks > 80 && marks < 100):
  alert(`Grade A`);
  break;
  case(marks > 50 && marks < 80):
  alert(`Grade B`);
  case(marks > 30 && marks < 50):
  alert(`Grade C`);
  case(marks > 0):
  alert(`Grade D`);
  default:
    alert("Match Not Found");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside?");
if(weather === "sunny"){
  alert("Wear a T-shirt");
}
else if (weather === "rainy"){
  alert("Don't forget to take your raincoat");
}
else if (weather === "hot"){
  alert("Get a hanky");
}
else if (weather === "freezing"){
  alert("Get your sweater on");
}
else{
  alert("Not a valid input");
}