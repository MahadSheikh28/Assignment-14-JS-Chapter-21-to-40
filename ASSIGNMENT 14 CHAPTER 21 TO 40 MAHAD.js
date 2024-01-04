//Chapter 21 (Changing Case)

//1.Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

var allLower = userInput.toLowerCase();

//2. Convert the string represented by x to lower-case and assign the result to the same variable.

var x = "HELLO WORLD";
x = x.toLowerCase();
alert(x);


//3. Convert the string represented by y to upper-case and assign the result to the same variable
var y = "hello world";
y = y.toUpperCase();
alert(y);


//4. Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.

var originalString = "YourString";
var newLowerCaseString = originalString.toLowerCase();

//5. Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.

var myArray = ["HelloWorld", "FirstString", "SecondElement"];
var indexToConvert = 1;

if (indexToConvert >= 0 && indexToConvert < myArray.length) {
  var newLowerCaseString = myArray[indexToConvert].toLowerCase();
  console.log(myArray[indexToConvert]);
  console.log(newLowerCaseString);
} else {
  console.error();
}

//6. Display in an alert the upper-case version of the string represented by a variable.

var myString = "My, Name";
var upperCaseString = myString.toUpperCase();
alert(upperCaseString);

//7. var cityName = “kaRacHi”; Convert the string represented by a cityName in Capitalisation is the writing of a word with its first varter in uppercase and the remaining varters in lowercase

var cityName = "kaRacHi";
var capitalizedName =
  cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(capitalizedName);

//Chapter 22 - 25 (Strings)
//1. "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.

var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);

console.log(slicedPart);

//2. The number of characters in the string will be assigned to the variable

var sameWords = "captain";
var numberOfCharacters = sameWords.length;
console.log(numberOfCharacters);

//3. The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.

var animal = "elephant";
var middleIndex = Math.floor(animal.length / 2);
var seg = animal.slice(middleIndex - 2, middleIndex + 2);
console.log(seg);

//4. Find the number of characters in the string represented by a variable and assign the number to a second variable

var animal = "elephant";
var numberOfCharacters = animal.length;
console.log(numberOfCharacters);

//5. In a first statement measure how many characters there are in a string "elephant" represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and ssign it to a second variable that hasn't been declared
// beforehand.

var originalString = "elephant";
var characterCount = originalString.length;
var slicedString = originalString[0] + originalString.slice(1, -3);
console.log(slicedString);

//6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);

//7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);

//8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.

var text = "To go or not to go, that is the question.";
var indx = text.lastIndexOf("go");

console.log(indx);

//9. Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string

var text = "This is a sample string.";
var segment = "sample";
var indexNum = 5;

if (text.indexOf(segment) !== -1) {
  var startIndex = text.indexOf(segment);
  var endIndex = startIndex + segment.length;
  var extractedSegment = text.substring(startIndex, endIndex);

  console.log(extractedSegment);
} else {
}

//10. In this string "abcde", what character is at index 2? (Use charAt)

var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);

console.log(characterAtIndex2);

//11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.

var text = "hello every one";
var cha = text.charAt(9);

console.log(cha);

//12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand

var str = "hello every one";
var x = str.charAt(str.length - 1);
console.log(x);

//13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand

var input = "hello jawan pakistan";
var cha = input.charAt(4);
console.log(cha);

//14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character

var yourString = "good morning pakistan";
var particularCharacter = "X";
if (yourString.length >= 3 && yourString.charAt(2) === particularCharacter) {
} else {
}

//15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand. In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.

var yourString = "123";
var charArray = [];

for (var i = 0; i < yourString.length; i++) {
  charArray[i] = yourString.charAt(i);
}
console.log(charArray);

var reply = "Your original reply with 'no'";
var revisedReply = reply.replace("no", "yes");
console.log(revisedReply);

//16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.

var str = "StringWith1";
var newStr = str.replace("1", "one");
console.log(newStr);

//17. If you want all instances replaced, enter 3 characters that need to appear in this statement.var y = x.replace("a", "z");

var x = "banana";
var y = x.replace(/a/g, "z");
console.log(y);

//Chapter 26 (Rounding Numbers)
//1. Form a statement that rounds a number to the nearest integer

var originalNumber = 5.67;
var roundedNumber = Math.round(originalNumber);
console.log(roundedNumber);

//2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

var origNum = 5.67;
var roundNum = Math.ceil(origNum);
console.log(roundNum);

//3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand

var origNum = 5.67;
var roundNum = Math.floor(origNum);
console.log(roundNum);

//4. Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.

var origNum = 5.67;
var roundedNum = Math.round(origNum);
console.log(roundedNum);

//5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand

var originalNumber = 0.5;
var roundedNumber = Math.floor(originalNumber);
console.log(roundedNumber);

//Chapter 27 (Random Numbers)
//1. Convert a random number generated by JavaScript to a number in the range 1 to 50

var randomFraction = Math.random();
var randomNumberInRange = Math.floor(randomFraction * 50) + 1;
console.log(randomNumberInRange);

//2. Generate a random number and assign it to a variable that hasn't been declared beforehand.

var randomNumber = Math.random();
console.log(randomNumber);

//3. You have to create a dice in JavaScript with the use of pseudo random number

function rollDice() {
  var diceResult = Math.floor(Math.random() * 6) + 1;
  return diceResult;
}
var result = rollDice();
console.log(result);

//4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number

//2. Write a JavaScript function to convert the string "123" to an integer.

function convertStringToInteger() {
  var stringNumber = "123";
  var integerNumber = parseInt(stringNumber);

  return integerNumber;
}

var result = convertStringToInteger();
console.log(result);

//3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?

var stringDecimal = "123.45";
var floatNumber = parseFloat(stringDecimal);
console.log(floatNumber);

//4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

function isConvertibleToNumber(str) {
  var integerNumber = parseInt(str);
  var isInteger = !isNaN(integerNumber);
  var floatNumber = parseFloat(str);
  var isFloat = !isNaN(floatNumber);

  return isInteger || isFloat;
}

console.log(isConvertibleToNumber("123")); 
console.log(isConvertibleToNumber("123.45")); 




//5. How can you convert a number to a string in JavaScript?

var number = 123;
var stringNumber = number.toString();
console.log(stringNumber);

//6. Write a JavaScript function to convert the number 42 to a string.

function convertNumberToString() {
  var number = 42;
  var stringNumber = number.toString();
  return stringNumber;
}
var result = convertNumberToString();
console.log(result);

//7. Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?

var decimalString = "3.14";
var integerNumber = parseInt(decimalString);
console.log(integerNumber);



//Chapter 30 (Controlling the length of decimals)
//1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand

var num = 12.3456789;
var newNum = num.toFixed(4).toString();
console.log(newNum);



//2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable

var num = 12.3456789;
num = Number(num.toFixed(2));
console.log(num); 



//3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.

var num = 123.456;
var numString = num.toFixed(2).toString();
if (numString.length > 4) {
  console.log("more than 4 characters.");
} else {
  console.log("4 or fewer characters.");
}

//4. Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal places and converted to a string.

var originalNumber = 123.4567890123456;
var roundedString = originalNumber.toFixed(2).toString();
alert(roundedString);



//Chapter 31 - 34 (Date & Time)
//1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand

var dObj = new Date();
console.log(dObj);

//2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand;
var dObj = new Date();
var dStr = dObj.toISOString();
console.log(dStr);

//3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.

var d = new Date();
var day = d.getDay();
console.log(day);



//4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index

var d = new Date();
var day = d.getDay();

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
alert(dayNames[day]);


//5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);

//6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand

var later = new Date(2020, 11, 31); 
console.log(later);

//7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand

var myDate = new Date(1992, 1, 2); 
console.log(myDate);

//8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980

alert(new Date(1980, 0, 1).getTime());



//9. How do you change the year of a date in JavaScript?

var myDate = new Date();
myDate.setFullYear(2023);
console.log(myDate);

//10. Write a JavaScript function to change the month of a given date to January.

function changeMonthToJanuary(date) {
  return new Date(date.getFullYear(), 0, date.getDate());
}

const date = new Date("2023-12-31");
const newDate = changeMonthToJanuary(date);
console.log(newDate);

//11. What is the method to change the day of the week for a specific date in JavaScript?

const date = new Date("2023-12-31");
date.setDate(date.getDate() + (1 - date.getDay()));
console.log(date);

//12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

function changeMinutes(time, newMinutes) {
  var newTime = new Date(time);
  newTime.setMinutes(newMinutes);
  return newTime;
}

var time = "2024-01-03T22:45:54.000Z";
var newTime = changeMinutes(time, 30);
console.log(newTime);

//13. Write a JavaScript function to add a specific number of hours to a given time.

function addHours(time, hours) {
  var newTime = new Date(time);
  newTime.setHours(newTime.getHours() + hours);
  return newTime;
}

var time = "2024-01-03T22:45:54.000Z";
var newTime = addHours(time, 3);
console.log(newTime);

