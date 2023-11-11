// Exercise 1.
// 1. Declare two variables, x and y, and assign values to them.
// 2. Use an assignment operator to add x and y and store the result in x.
// 3. Use an assignment operator to multiply x by 2.
// 4. Print the final value of x.

let x = 5;
let y = 10;
x = x + y; // x += y //15
x *= 2; //30
console.log(x);

// Exercise 2.
// 1. Declare a variable num and assign it an initial value.
// 2. Use numeric operators to increase the value of num by 5.
// 3. Use numeric operators to decrease the value of num by 2.
// 4. Print the final value of num.

let num = 10;
num = num + 5;
num = num - 2;
console.log("The final value of num is: " + num);

// Exercise 3.
// 1. Declare two variables, firstName and lastName, and assign them your first and last name.
// 2. Concatenate these two variables to form a full name and store it in a new variable fullName.
// 3. Print the fullName variable.

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + lastName;
console.log(fullName);

// Exercise 4.
// 1. Declare two variables, a and b, and assign them values of different data types.
// 2. Use equality operators to check if a is equal to b.
// 3. Use equality operators to check if a is not equal to b.

let a = 5;
let b = "5";

let c = a == b;
console.log(c);

// Exercise 5.
// 1. Declare three variables, isRaining, isSunny, and isCold, and assign them boolean values.
// 2. Use logical operators to create a condition: "It's a nice day if it's not raining, it's sunny, and it's not cold."
// 3. Print the result of the condition.

let isRaining = false;
let isSunny = true;
let isCold = false;
let isNiceDay = !isRaining && isSunny && !isCold;
console.log("It's a nice day: " + isNiceDay);

// Exercise 6.
// 1. Declare a variable and assign it a value of any data type.
// 2. Use the typeof operator to check the type of the variable.
// 3. Print the result.

let myVar = 5;
let typeOfmyVar = typeof myVar;
console.log(myVar);
