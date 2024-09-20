function findLargest(a, b, c) {
    // Check which number is the largest using relational operators
    if (a >= b && a >= c) {
        return a; // a is the largest or tied as the largest
    } else if (b >= a && b >= c) {
        return b; // b is the largest
    } else {
        return c; // c is the largest
    }
}

// Prompt the user to input three numbers
const num1 = parseInt(prompt("Enter the First Number:"));
const num2 = parseInt(prompt("Enter the Second Number:"));
const num3 = parseInt(prompt("Enter the Third Number:"));

// Call the findLargest function and alert the result
alert("The largest number is: " + findLargest(num1, num2, num3));

