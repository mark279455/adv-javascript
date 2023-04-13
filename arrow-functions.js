/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    return a + b;
}

console.log("addTwoNumbers(3, 5) = "+addTwoNumbers(3, 5));

// Arrow Function With Parameters
const AFaddTwoNumbers = (a, b) => {
    return a + b;
}

console.log("AFaddTwoNumbers(3, 5) = " + AFaddTwoNumbers(3, 5));

// Single Line Arrow Function With Parameters
const SLAFaddTwoNumbers = (a, b) => a + b;

console.log("SLAFaddTwoNumbers(3, 5) = " + SLAFaddTwoNumbers(3, 5));


// Implicit Returns

// Returning Multiple Lines
