/* 
   Intruction:
   1. Run code use command Control + ⌥ Option + N
*/

console.log("Hello Shilpa");
/* Data Types:
   undefined, null, boolean, string, symbol, number, and object
*/

// var can be used throughtout the program
var myName = "Shilpa";
// we can change vale of var
myName = 21;

// let can be used only in the scope in which it is declared
let name = "JavaScript";

// value of const can never change
const pi = 3.14;
// if try to change the value of const, will get an error
// pi = 22;

// We can end the line with a semicolon ';'. But it is not necessary to use the semicolon at the end.

var a;
var b = 2;
console.log("a = ", a);
console.log("b = ", b);

a = 7;
b = a;

console.log("a = ", a);
console.log("b = ", b);

// Add two numbers
var sum = 10 + 0;
console.log("Sum = ", sum);
sum = 10 + 10;
console.log("Sum = ", sum);

// Subtraction
var difference = 45 - 5;
console.log("Difference = ", difference);

// Multiplication
var product = 4 * 7;
console.log("Product = ", product);

// Division
var quotient = 15 / 0;
console.log("Quotient = ", quotient);
quotient = 15 / 7;
console.log("Quotient = ", quotient);

// Increment Decrement
var num = 87;
console.log("Num = ", num);
num++;
console.log("Num = ", num);
num--;
console.log("Num = ", num);

// Decimal number
var decimalNum = 0.009;
console.log("Decimal number = ", decimalNum);

// Remainder
var remainder = 10 % 3;
console.log("Remainder = ", remainder);

// Compound Assignment with Augmented Addition
// a = a + 12;
var a1 = 10;
a1 += 12;

// b = b - 10
var b1 = 10;
b1 -= 10;

// c = c * 2;
var c1 = 10;
c1 *= 2;

// Declare String Variables

var myFirstName = "Shilpa";
var myLastName = "Chaudhary";

var myStr = 'I am a "double quoted" string inside "double quote".';
console.log(myStr);

myStr = "I am a \"double quoted\" string inside 'single quote'.";
console.log(myStr);

// Escape Sequences in Strings
/*
CODE OUTPUT
\' single quote
\" double quote 
\\ backslash
\n newline 
\r carriage return
\t tab
\b backspace
\f form feed
*/

var myStr1 = "First Line\n\t\\Second Line\nThird Line";
console.log(myStr1);

// Concatenating String with Plus Operator

var str = "I come First. " + "I come second.";
console.log(str);

var str1 = "This is the start. " + "This is the end.";
console.log(str1);

// Concatenating String with Plus Equals Operator

str += str1;
console.log(str);
console.log(str1);

// Constructing Strings with Variables

var name1 = "Shilpa";
var str2 = "Hello, my name is " + name1 + ", how are you?";

console.log(str2);

// Appending Variables to Strings

var anAdjective = "awesome!!";
var str3 = "Burger is ";
str3 += anAdjective;

console.log(str3);

// Find length of String

var firstNameLength = 0;
firstName = "Shilpa";

firstNameLength = firstName.length;
console.log(firstNameLength);

// Bracket Notation to Find First Character in String

var firstLetterOfLastName = "";
var lastName = "Chaudhary";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);
console.log(lastName[3]);

// String Immutability
myStr = "Jello World";
myStr[0] = "H"; // No effect

console.log(myStr);
// We can change the string but not the individual character of the string
myStr = "Hello World";
console.log(myStr);

// Bracket Notation to Find Last Character in String
str = "Hello World";
var lastLetterOfString = 0;
lastLetterOfString = str[str.length - 1];

console.log(lastLetterOfString);

function wordBkanks(myNoun, myAdj, myVerb) {
  var result = "";
  result += "The " + myAdj + " " + myNoun + " " + myVerb + " to the store.";
  return result;
}

console.log(wordBkanks("dog", "big", "ran"));

function funAdd(a, b) {
  console.log(a + b);
}

function funSub(a, b) {
  console.log(a - b);
}

funAdd(10, 5);
funSub(10, 5);

function fun1() {
  oopsGlobal = 5;
}

var myGlobal = 10;

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal" + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal" + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();
