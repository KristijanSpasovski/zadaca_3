// Example using a for loop to iterate over an array
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Example using a for-in loop to iterate over an object's properties
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Example using a for-of loop to iterate over the elements of an array
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// Get the list of items
const itemList = document.getElementById("itemList");

for (let listItem of itemList.children) {
  console.log(listItem.textContent);
}

//Homework

// Example using a combination of loops to calculate and print squares of numbers

// Array of numbers
const nums = [2, 5, 8, 10];

// Investigate for a method that exists on arrays, with help of which
// we can add element to the end of an array!
// Calculate squares using a for loop and use that method to fill the squares array
const squares = [];
for (let i = 0; i < nums.length; i++) {
  squares.push(nums[i] * nums[i]);
}

// Create new array, then calculate squares using a for-of loop, and fill the new array
// Declare new var "newSquares" here and assign empty array to it here!
const newSquares = [];
for (let square of squares) {
  newSquares.push(square);
}

// Print squares using a for loop with the help of console.log
for (let i = 0; i < newSquares.length; i++) {
  console.log(newSquares[i]);
}
