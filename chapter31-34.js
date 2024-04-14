// ================= THE START =================

// Chapter 31-34 DATE METHODS Start

// Q1
var currentDate = new Date();
document.write(currentDate);

// Q2
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var today = new Date().getMonth();
var currentMonth = monthNames[today];
alert(currentMonth);

// Q3
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var day = new Date().getDay();
alert(days[day].slice(0, 3));

// Q4
var date = new Date();
var day = date.getDay();
if (day === 0 || day === 6) {
  alert("Its Fun day");
}

// Q5
var today = new Date();
var dayOfMonth = today.getDate();
if (dayOfMonth < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

// Q6
var currentDate = new Date();
var millisecondsSince1970 = currentDate.getTime();
var minutesSinceMidnight1970 = millisecondsSince1970 / 60000;
document.write(
  "<br>Current date:- " +
    currentDate +
    "<br>Milliseconds Since 1970:- " +
    millisecondsSince1970 +
    "<br>Minutes Since Midnight 1970:- " +
    minutesSinceMidnight1970
);

// Q7
var now = new Date().getHours();
if (now < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// Q8
var laterDate = new Date(2020, 11, 31);
alert(laterDate);

// Q9
var ramadanStart = new Date(2015, 5, 18);
var now = new Date();
var diffMilliseconds = now - ramadanStart;
var diffDays = Math.floor(diffMilliseconds / 86400000);
alert("Number of days past since 1st Ramadan 2015:" + diffDays);

// Q10
var beginningOf2015 = new Date(2015, 0, 1);
var currentDate = new Date();
var timeDifference = currentDate.getTime() - beginningOf2015.getTime();
var secondsElapsedSince2015 = Math.floor(timeDifference / 1000);
document.write(
  "On reference date:- " + currentDate + " ",
  secondsElapsedSince2015 +
    "seconds has been passed since since the beginning of 2015"
);

// Q11
var currentDate0 = new Date();
var currentDate1 = new Date();
var currentHour = currentDate1.getHours();
currentDate1.setHours(currentHour + 1);
document.write(
  "Current Date:- ",
  currentDate0 + "1hour ago it was: " + currentDate1
);

// Q12
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date 100 years back: " + currentDate);

// Q13
var age = +prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);

// Q14
var customerName = prompt("Enter your name:");
var currentMonth = prompt("Enter the current month:");
var numberOfUnits = +prompt("Enter the number of units consumed:");
var chargesPerUnit = +prompt("Enter the charges per unit:");
var latePaymentSurchargeRate = +prompt(
  "Enter the late payment surcharge rate:"
);
var netAmountPayable = numberOfUnits * chargesPerUnit;
netAmountPayable = Math.round(netAmountPayable * 100) / 100;
var latePaymentSurcharge = (netAmountPayable * latePaymentSurchargeRate) / 100;
latePaymentSurcharge = Math.round(latePaymentSurcharge * 100) / 100;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
grossAmountPayable = Math.round(grossAmountPayable * 100) / 100;
document.write("<h2>K-Electric Bill</h2>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Current Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + numberOfUnits + "</p>");
document.write("<p>Charges per Unit: " + chargesPerUnit.toFixed(2) + "</p>");
document.write(
  "<p>Net Amount Payable (within Due Date): " +
    netAmountPayable.toFixed(2) +
    "</p>"
);
document.write(
  "<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>"
);
document.write(
  "<p>Gross Amount Payable (after Due Date): " +
    grossAmountPayable.toFixed(2) +
    "</p>"
);

// Chapter 31-34 DATE METHODS End

// ================= THE END =================
