// ================= THE START =================

// Chapter 38-44 FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS Start

// Q1
function power(a, b) {
  if (b < 0) {
    return 1 / power(a, -b);
  } else if (b === 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
}
let base = 2;
let exponent = 3;
let result = power(base, exponent);
console.log(base + " raised to the power of " + exponent + " is " + result);

// Q2
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
let inputYear = prompt("Enter a year:");
inputYear = parseInt(inputYear);
if (isNaN(inputYear)) {
  console.log("Invalid input. Please enter a valid year.");
} else {
  if (isLeapYear(inputYear)) {
    console.log(inputYear + " is a leap year.");
  } else {
    console.log(inputYear + " is not a leap year.");
  }
}

// Q3
function calculateSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}
function calculateTriangleArea(a, b, c) {
  let s = calculateSemiPerimeter(a, b, c);
  let expression = s * (s - a) * (s - b) * (s - c);
  if (expression >= 0) {
    let area = Math.sqrt(expression);
    return area;
  } else {
    return NaN;
  }
}
let sideA = 3;
let sideB = 4;
let sideC = 5;
let area = calculateTriangleArea(sideA, sideB, sideC);
if (!isNaN(area)) {
  console.log("Area of the triangle:", area);
} else {
  console.log("Invalid triangle. Cannot calculate area.");
}

// Q4
function calculateAverageAndPercentage(subject1, subject2, subject3) {
  const totalMarks = subject1 + subject2 + subject3;
  const averageMarks = calculateAverage(subject1, subject2, subject3);
  const percentage = calculatePercentage(totalMarks);
  return { averageMarks, percentage };
}
function calculateAverage(subject1, subject2, subject3) {
  return (subject1 + subject2 + subject3) / 3;
}
function calculatePercentage(totalMarks) {
  return (totalMarks / 300) * 100;
}
function mainFunction() {
  const subject1 = 85;
  const subject2 = 90;
  const subject3 = 80;
  const result = calculateAverageAndPercentage(subject1, subject2, subject3);
  console.log(`Average Marks: ${result.averageMarks}`);
  console.log(`Percentage: ${result.percentage}%`);
}
mainFunction();

// Q5
function findIndex(inputString, character) {
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === character) {
      return i;
    }
  }
  return -1;
}
const inputString = "Hello, World!";
const character = "o";
console.log(
  `Index of "${character}" in "${inputString}": ${findIndex(
    inputString,
    character
  )}`
);

// Q6
function removeVowels(sentence) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    if (!vowels.includes(sentence[i])) {
      newSentence += sentence[i];
    }
  }
  return newSentence.trim();
}
const sentence = "This is a sample sentence.";
console.log(`Sentence after removing vowels: ${removeVowels(sentence)}`);

// Q7
function countVowelPairs(text) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i = 0; i < text.length - 1; i++) {
    const currentChar = text[i];
    const nextChar = text[i + 1];
    if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
      switch (currentChar + nextChar) {
        case "ae":
        case "AE":
        case "ea":
        case "EA":
        case "ei":
        case "EI":
        case "ui":
        case "UI":
          count++;
          break;
        default:
          break;
      }
    }
  }
  return count;
}
const text = "Pleases read this application and give me gratuity";
console.log(
  `Number of occurrences of two vowels in succession: ${countVowelPairs(text)}`
);

// Q8
function kmToMeters(km) {
  return km * 1000;
}
function metersToFeet(meters) {
  return meters * 3.28084;
}
function feetToInches(feet) {
  return feet * 12;
}
function inchesToCentimeters(inches) {
  return inches * 2.54;
}
function printDistanceConversions(km) {
  const meters = kmToMeters(km);
  const feet = metersToFeet(meters);
  const inches = feetToInches(feet);
  const centimeters = inchesToCentimeters(inches);
  console.log(`Kilometers: ${km}`);
  console.log(`Meters: ${meters.toFixed(2)}`);
  console.log(`Feet: ${feet.toFixed(2)}`);
  console.log(`Inches: ${inches.toFixed(2)}`);
  console.log(`Centimeters: ${centimeters.toFixed(2)}`);
}
const distanceInKm = 10;
printDistanceConversions(distanceInKm);

// Q9
function calculateOvertimePay(hoursWorked) {
  if (hoursWorked <= 40) {
    return 0;
  }
  const overtimeHours = hoursWorked - 40;
  const overtimePay = overtimeHours * 12;
  return overtimePay;
}
const hoursWorked = 45;
console.log(`Overtime Pay: Rs. ${calculateOvertimePay(hoursWorked)}`);

// Q10
function calculateNotes(amount) {
  const hundredNotes = Math.floor(amount / 100);
  const fiftyNotes = ((amount - hundredNotes * 100) / 50).toFixed(0);
  const tenNotes = (
    (amount - hundredNotes * 100 - fiftyNotes * 50) /
    10
  ).toFixed(0);
  return {
    hundred: hundredNotes,
    fifty: fiftyNotes,
    ten: tenNotes,
  };
}
const amountToWithdraw = 850;
console.log(calculateNotes(amountToWithdraw));

// Chapter 38-44 FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS End

// ================= THE END =================
