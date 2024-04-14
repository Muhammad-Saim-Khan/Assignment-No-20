// ================= THE START =================

// PDF 31-40 Start

// Chapter 31 - 34 (Date &amp; Time) Start

// Q1
let dObj = new Date();

// Q2
let dStr = new Date().toString();

// Q3
let day = new Date().getDay();

// Q4
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
alert(dayNames);

// Q5
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let Day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();
let dayOfWeek = currentDate.getDay();
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", Day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);
console.log("Day of Week:", dayOfWeek);

// Q6
let later = new Date(2020, 11, 0);

// Q7
let date1992 = new Date(1992, 1, 2);

// Q8
alert(new Date("1980-01-01").getTime() - new Date("1970-01-01").getTime());

// Q9
let myDate = new Date();
myDate.setFullYear(2025);

// Q10
function changeMonthToJanuary(date) {
  date.setMonth(0);
  return date;
}
let originalDate = new Date();
console.log("Original Date:", originalDate);
let modifiedDate = changeMonthToJanuary(originalDate);
console.log("Modified Date (Month changed to January):", modifiedDate);

// Q11
function setDayOfWeek(date, newDayOfWeek) {
  let currentDayOfWeek = date.getDay();
  let dayDifference = newDayOfWeek - currentDayOfWeek;
  date.setDate(date.getDate() + dayDifference);
  return date;
}
let CurrentDate = new Date("2024-04-14");
console.log("Original Date:", CurrentDate);
let newDate = setDayOfWeek(CurrentDate, 3);
console.log("Modified Date (Day of the week set to Wednesday):", newDate);

// Q12
function changeMinutes(time) {
  let newMinutes = prompt("Enter the new value for minutes:");
  newMinutes = parseInt(newMinutes);
  if (!isNaN(newMinutes)) {
    time.setMinutes(newMinutes);
    return time;
  } else {
    alert("Invalid input for minutes. Please enter a valid number.");
    return null;
  }
}
let currentTime = new Date();
console.log("Current Time:", currentTime);
let modifiedTime = changeMinutes(currentTime);
if (modifiedTime) {
  console.log("Modified Time:", modifiedTime);
} else {
  console.log("Time modification cancelled or failed.");
}

// Q13
function addHours(time, hoursToAdd) {
  let newTime = new Date(time);
  newTime.setHours(newTime.getHours() + hoursToAdd);
  return newTime;
}
let CurrentTime = new Date();
console.log("Current Time:", CurrentTime);
let newTime = addHours(CurrentTime, 3);
console.log("New Time (3 hours added):", newTime);

// Q14
function calculateAge(birthdate) {
  let birthDateObject = new Date(birthdate);
  let currentDate = new Date();
  let age = currentDate.getFullYear() - birthDateObject.getFullYear();
  if (
    currentDate.getMonth() < birthDateObject.getMonth() ||
    (currentDate.getMonth() === birthDateObject.getMonth() &&
      currentDate.getDate() < birthDateObject.getDate())
  ) {
    age--;
  }
  return age;
}
let birthdate = "2005-01-13";
let age = calculateAge(birthdate);
console.log("Age:", age);

// Chapter 31 - 34 (Date &amp; Time) End

// Chapter 35 - 37 (Functions) Start

// Q1
function displayAlert() {}

// Q2
function askName() {
  let userName = prompt("Enter name");
  return userName;
}

// Q3
function mainFunction() {
  functionOne();
  functionTwo();
}
function functionOne() {
  console.log("This is functionOne");
}
function functionTwo() {
  console.log("This is functionTwo");
}
mainFunction();

// Q4
function displayNamePrompt() {
  let name = prompt("Enter name");
  alert("Hello, " + name + "!");
}
displayNamePrompt();

// Q5
function concat(a, b, c) {}

// Q6
function concatenateStrings(str1, str2) {
  let concatenatedString = str1 + str2;
  return concatenatedString;
}
let result = concatenateStrings("Hello, ", "world!");
console.log(result);

// Q7
function multiplyAndAssign(a, b, c) {
  var result = a * b * c;
  return result;
}
var x = 2;
var y = 3;
var z = 4;
var resultVariable = multiplyAndAssign(x, y, z);
console.log("The result is:", resultVariable);

// Q8
function calculateAverage(numbers) {
  if (numbers.length === 0) {
  }
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  let average = sum / numbers.length;
  return average;
}
let numbers = [5, 10, 15, 20];
let average = calculateAverage(numbers);
console.log("Average:", average);

// Q9
function calculateSum(a, b) {
  return a + b;
}
let num1 = 10;
let num2 = 20;
let sum = calculateSum(num1, num2);
console.log("Sum:", sum);

// Q10
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  let average = sum / numbers.length;
  return average;
}
let Numbers = [5, 10, 15, 20];
let Average = calculateAverage(Numbers);
console.log("Average:", Average);

// Q11
function add(a, b) {
  return a + b;
}
let Result = add(5, 3);
console.log("Result:", Result);

// Q12
function letterCounts(word) {
  let counts = {};
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (/[a-zA-Z]/.test(char)) {
      char = char.toLowerCase();
      counts[char] = (counts[char] || 0) + 1;
    }
  }
  return counts;
}
let word = "Hello World";
let counts = letterCounts(word);
console.log("Letter Counts:", counts);

// Q13
function setYear(date, year) {
  date.setFullYear(year);
  return date;
}
let Currentdate = new Date();
console.log("Original Date:", Currentdate);
let modifieddate = setYear(Currentdate, 2025);
console.log("Modified Date (Year set to 2025):", modifieddate);

// Q14
function calculateAge(dateOfBirth) {
  let dob = new Date(dateOfBirth);
  let currentDate = new Date();
  let age = currentDate.getFullYear() - dob.getFullYear();
  if (
    currentDate.getMonth() < dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
}
let dateOfBirth = "2005-01-13";
let Age = calculateAge(dateOfBirth);
console.log("Age:", Age);

// Q15
function checkPresence(word, array) {
  return array.includes(word);
}
let wordToFind = "zaid";
let namesArray = [
  "zaid",
  "haris",
  "raza",
  "abubakar",
  "hassan",
  "hussain",
  "fatima",
];
let presence = checkPresence(wordToFind, namesArray);
console.log("Presence of", wordToFind + ":", presence);

// Q16
function repeatLetter(letter, times) {
  return letter.repeat(times);
}
let repeated = repeatLetter("a", 10);
console.log(repeated);

// Q17
function reverseArray(arr) {
  return arr.reverse();
}
let array = ["a", "b", "c", "d", "e"];
let reversedArray = reverseArray(array);
console.log("Reversed Array:", reversedArray);

// Chapter 35 - 37 (Functions) End

// Chapter 38 (Local vs. Global Variables) Start

// Q1
function calculateSum(a, b) {
  let result = a + b;
  return result;
}
let num3 = 5;
let num4 = 10;
let sum1 = calculateSum(num3, num4);
console.log("Sum:", sum1);

// Q2
let globalVariable = 10;
function accessGlobalVariable() {
  console.log("Global variable value:", globalVariable);
}
accessGlobalVariable();

// Chapter 38 (Local vs. Global Variables) End

// Chapter 39, 40 (Switch Statements) Start

// Q1
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("You chose apple.");
    break;
  case "banana":
    console.log("You chose banana.");
    break;
  case "orange":
    console.log("You chose orange.");
    break;
  default:
    console.log("You chose something else.");
}

// Q2
let cityName = prompt("Enter the name of your city:");
cityName = cityName.toLowerCase();
switch (cityName) {
  case "london":
    alert("You're in London!");
    break;
  case "paris":
    alert("You're in Paris!");
    break;
  case "new york":
    alert("You're in New York!");
    break;
  case "tokyo":
    alert("You're in Tokyo!");
    break;
  default:
    alert("You're not in a recognized city.");
}

// Chapter 39, 40 (Switch Statements) End

// PDF 31-40 End

// ================= THE END =================
