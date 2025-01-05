// Write a JavaScript program that displays the largest number among two entered numbers.

// The steps of the given code are:

// 1. We create an array that contains two numbers.
// 2. We define a variable where the largest number will be displayed.
// Initially, we assume that the largest number is the first entered number.
// 3. We loop through the entire array using a for loop.
// 4. Inside the for loop, we create a condition that checks each number in the array and compares it with the current largest number.
// If any number is greater than the current largest number, that number will become the new largest.

// let arr = [4, 6];
// console.log("This is the array where we need to find the largest number: ", arr[0], arr[1], ".");
// console.log("**********************************************************************")

// let theLargestNumber = arr[0];
// console.log("We assume that the largest number in the array is the first entered number, which is: ", theLargestNUmber, ".");
// console.log("**********************************************************************")

// for (let i = 0; i < arr.length; i++){

//    console.log("Checking through the condition if the number is greater than the current largest number: ", arr[i], " > ", theLargestNumber, ".");
//    console.log("**********************************************************************")

//    if (arr[i] > theLargestNumber){

//         theLargestNUmber = arr[i];

//    }

// }

// console.log("After the checks inside the loop, we found that the largest number in the array is:  ", theLargestNumber, ".");
// console.log("**********************************************************************");

//**********************************************************************************************************************************************************************//

// There is another way to solve this task, which is if we want the user to enter their desired numbers, and then check which one is the largest.

// Steps to solve the task:

// 1. Create an empty array.
// 2. Create a for loop through which we will ask the user to enter two desired numbers, which will then be added to the empty array.
// 3. Create a variable where we assume that the largest number is the first entered number in the array.
// 4. Create another for loop in which we go through the entire array and, using a condition, check if a number is greater than the current largest number.

// let arr = [];


// for (let i = 0; i < 2; i++) {
    
//   let userInput = prompt("Enter the Desired Number");
//   arr.push(parseFloat(userInput));
//   console.log("User input number is: ", userInput, ".");
//   console.log("**********************************************************************");

// }

// console.log("The numbers entered by the user are: ", arr);
// console.log("**********************************************************************");

// let theLargestNumber = arr[0];

// console.log("We assume that the current largest number is the first entered number: ", arr[0], ".");
// console.log("**********************************************************************");

// for (let i = 0; i < arr.length; i++) {

//   console.log("Checking if the number is greater than the current largest number: ", arr[i], " > ", theLargestNumber);
//   console.log("**********************************************************************");  

//   if (arr[i] > theLargestNumber) {

//     theLargestNumber = arr[i];

//   }

// }

// console.log("After the checks inside the loop, we found that the largest number in the array is:  ", theLargestNumber, ".");

