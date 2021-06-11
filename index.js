/* First Javascript Code */

console.log('Learning javascript');

/*  VARIABLES  */
/*
    Cannot be a reserved keyword because
    Shouold be meaningful
    Cannot start with a number (1name)
    Cannot contain a space or hyphen (-)
    Are case-sensitive
 */
let name = 'Luke'; // String  Literal
let age = 19; // Number Literal 
let isApproved = false; // Boolean Literal
let firstName = undefined;
let selectColor = null;

/* Constants */
const lastName = 'Smith';

/* OBJECTS */
let person = {
    name: 'Luke',
    age: '19',
};

person.name = 'John'; // Dot Notation

let selection = 'name'; // Bracket Notation
person['selection'] = 'Mary';

/* ARRAYS */
let selectedColors = ['Black', 'Blue', 'Red'];
selectedColors[2] = 1;
console.log(selectedColors);

/* Functions & Parameters */

function greet(name, lastName) // Performing a task
{
    console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value 
function square(number) {
    return number * number;
}

// Calling a function
console.log(square(2));

// Arguments
greet('John', 'Smith');
greet('Mary ', 'Jones');


