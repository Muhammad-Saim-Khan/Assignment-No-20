// ================= THE START =================

// Chapter 35-38 FUNCTION Start

// Q1
var currentDate = new Date();
document.write(currentDate);

// Q2
function fullName() {
  var firstName = prompt("Enter first name");
  var lastname = prompt("Enter last name");
  document.write(firstName + " " + lastname);
}
fullName();

// Q3
function sum() {
  var num1 = +prompt("Enter num1");
  var num2 = +prompt("Enter num2");
  document.write(num1 + num2);
}
sum();

// Q4
document.write("<h2>Calculator</h2>");
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operator = prompt("Enter the operator (+, -, *, /):");
function calculator(num1, num2, operator) {
  var result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error: Division by zero";
      }
      break;
    default:
      result = "Error: Invalid operator";
  }
  return result;
}
var result = calculator(num1, num2, operator);
document.write("Result: " + result);

// Q5
function square() {
  var num3 = +prompt("Enter a number for square");
  var square1 = num3 * num3;
  document.write(square1);
}
square();

// Q6
var number = +prompt("Enter a number to calculate its factorial:");
var result = factorial(number);
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
document.write("Factorial of " + number + " is: " + result);

// Q7
var startNum = +prompt("Enter the starting number:");
var endNum = +prompt("Enter the ending number:");
function displayCounting(start, end) {
  if (start <= end) {
    for (var i = start; i <= end; i++) {
      document.write(i + "<br>");
    }
  } else {
    for (var i = start; i >= end; i--) {
      document.write(i + "<br>");
    }
  }
}
displayCounting(startNum, endNum);

//  Q8
var base = +prompt("Enter the base of the right triangle:");
var perpendicular = +prompt("Enter the perpendicular of the right triangle:");
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(x) {
    return x * x;
  }
  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);
  return hypotenuse;
}
var result = calculateHypotenuse(base, perpendicular);
document.write("Hypotenuse of the right triangle is: " + result.toFixed(2));

// Q9
function calculateArea1(width, height) {
  return width * height;
}
function calculateArea2() {
  var width = arguments[0];
  var height = arguments[1];
  return width * height;
}
var width1 = +prompt("Enter width 1");
var height1 = +prompt("Enter height 1");
var area1 = calculateArea1(width1, height1);
document.write("Area calculated with arguments as values: " + area1 + "<br>");
var width2 = prompt("Enter width 2");
var height2 = prompt("Enter height 1");
var area2 = calculateArea2(width2, height2);
document.write("Area calculated with arguments as variables: " + area2);

// Q10
var word = prompt("Enter a word....");
var update = "";
for (var i = word.length - 1; i >= 0; i--) {
  update += word[i];
}
if (word === update) {
  document.write("it is a plaindrome word..");
} else {
  document.write("it is not a plaindrome word..");
}

// Q11
function capitalizeFirstLetter(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
var inputString = "the quick brown fox";
var outputString = capitalizeFirstLetter(inputString);
document.write("Original string: " + inputString + "<br>");
document.write("Converted string: " + outputString);

// Q12
function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }
  return longestWord;
}
var inputString = "Web Development Tutorial";
var longestWord = findLongestWord(inputString);
document.write(
  "Longest word in the string '" + inputString + "' is: " + longestWord
);

// Q13
function countOccurrences(str, letter) {
  str = str.toLowerCase();
  letter = letter.toLowerCase();
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
var inputString = "JSResourceS.com";
var letterToCount = "o";
var occurrences = countOccurrences(inputString, letterToCount);
document.write(
  "Number of occurrences of '" +
    letterToCount +
    "' in '" +
    inputString +
    "': " +
    occurrences
);

// Q14
var radius = +prompt("Enter the radius of the circle:");
function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write("The circumference is " + circumference.toFixed(2) + "<br>");
}
function calcArea(radius) {
  var area = Math.PI * radius * radius;
  document.write("The area is " + area.toFixed(2));
}
calcCircumference(radius);
calcArea(radius);

// Chapter 35-38 FUNCTION Start

// ================= THE END =================
