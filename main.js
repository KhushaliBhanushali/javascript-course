// Logging output
alert('Reload page');

console.log("hello World");
console.error('This is an error');
console.warn('This is a warning');
console.clear();

// Variable - let , const

let age = 20;     //let means we change the value
age = 30;
console.log(age);

const score = 30;   // const means we does't change the value
score = 40;
console.log(score);

//Data Types - String , Numbers , boolean , null , undefined

const name = 'khushi';      // String in "" nd '' 
const age = 25;            // data type not required int or float
const rating = 8.5;
const isCool = true;
const a = null;            
const b = undefined;
let c;

console.log(typeof c);       // check type

const name = 'khushi';
const age = 25;

//Strings
// concatanation - join 2 string

console.log("My name is " +name+" and I am "+age);

// Template string

 const hello = `My name is ${name} and I am ${age}`;     
 console.log(hello);

// String method & properties
const a = 'Hello World!';

//get length
console.log(a.length);

// change case
console.log(a.toUpperCase());
console.log(a.toLowerCase());

//get sunstring
console.log(a.substring(0,5));
console.log(a.substring(0,5).toUpperCase());

// split array
console.log(a.split()); 
console.log(a.split(''));

const b = 'java, php, python';
console.log(b.split(', '));

// Array - variables that holds multiple value 

const numbers = [1,2,3,4,5];
console.log(numbers);

const fruits = ['apple','mango','grapes'];

// get one value- array start at 0
console.log(fruits[1]);
fruits.push('pears');               // value add in last
fruits[4]='banana';                 // value add in perticular index
fruits.unshift('strawberry');       //unshift =value add in starting of index
fruits.pop();                       // delete last value 
console.log(fruits.indexOf('mango'));    //get index
console.log(Array.isArray(fruits));      // check if array
console.log(fruits);

// Object literal

const person = {
  firstName: "khushi",
  lastName: "bhanushali",
  age: 25,
  hobbies: ['music', 'reading', 'singing'],
  address: {
    street: "90 ft road",
    city: "visnagar",
    state: "gujarat"
  }
}

//add property
person.email = "khushi@gmail.com";

console.log(person);

//get array value
console.log(person.hobbies[1]);

//get embedded object
console.log(person.address.city);

//Array of objects
const todos = [
  {
    id: 1,
    text: 'listening music',
    isCompleted: true
  },
  {
    id: 2,
    text: 'reading book',
    isCompleted: false
  }
];
console.log(todos);
console.log(todos[1].text);

// Json is same as upper todos object but variable and string is write in ""
// convert todos to json

const todosJson = JSON.stringify(todos);
console.log(todosJson);

//Loops
//For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(`For loop number: ${i}`);  
}

// While loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
//Loop Through arrays
//For loop
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// For... of loop
for (let todo of todos) {
  console.log(todo.text);
}

// Foreach, map, filter

todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {  // return array
  return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function (todo) {  // return array
  return todo.isCompleted === true;
});
 console.log(todoCompleted);

// CONDITIONALS

// Simple If/Else Statement
const x = 20;

if(x === 15) {
  console.log('x is 15');
} else if(x > 10) {
  console.log('x is greater than 15');
} else {
  console.log('x is less than 15')
}

// Ternary operator / Shorthand if
const color = x > 15 ? 'red' : 'blue';
console.log(color);

// Switch
// color = 'green';

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:  
    console.log('color is not red or blue');
    break;
 }

// Function
function addNums(num1,num2){
    console.log(num1+num2);
}
addNums(6,8);

// get default value
function addNums(num1=2,num2=2){
    console.log(num1+num2);
}
addNums();

// Override the value
function addNums(num1=2,num2=2){
    console.log(num1+num2);
}
addNums(6,8);

// return type
const addNums = (num1,num2)=>{
    return num1+num2;
}
console.log(addNums(6,8));

// write in one line
const addNums = (num1,num2)=> num1+num2;
console.log(addNums(6,8));

// OOP

// Constructor Function

function Person(firstName, lastName, dob) {
        // Set object properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
}
const person1 = new Person('khushi', 'bhanushali', '10-8-1990');  //mm-dd-yy
const person2 = new Person('nisha', 'Soni', '12-8-1990');
console.log(person1);
console.log(person1.firstName);
console.log(person2.dob.getFullYear());


function Person(firstName, lastName, dob) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Set to actual date object using date constructor

    this.getBirthYear = function(){
    return this.dob.getFullYear();
  }
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
}

// Get Birth Year
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  }

  // Get Full Name
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }

// Instantiate an object from the class
const person1 = new Person('khushi', 'bhanushali', '10-8-1990');  //mm-dd-yy
const person2 = new Person('nisha', 'Soni', '12-8-1990');
// console.log(person1);

console.log(person2.getBirthYear());
console.log(person2.getFullName());
console.log(person1);

class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
  
    // Get Birth Year
    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    // Get Full Name
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  const person1 = new Person('khushi', 'bhanushali', '10-8-1990');
 const person2 = new Person('nisha', 'Soni', '12-8-1999');
console.log(person2.getBirthYear());


// Element selectors
 console.log(window);

// Single element selectors
  console.log(document.getElementById('my-form'));
  console.log(document.querySelector('h1'));

// Multiple selectors
  console.log(document.querySelectorAll('.item'));  // List of items
  console.log(document.getElementsByClassName('item'));     //HTMLCollection of list
  console.log(document.getElementsByTagName('li'));         //HTMLCollection of list

// Looping throught grab each list items

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// MAnipulating the DOM

const ul = document.querySelector('.items');
ul.remove();
ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'red';
ul.children[1].innerText = 'hello';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events
// onclick event - when we click on button
const btn = document.querySelector('.btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

//mouseover event - when our mouse pointer over the button
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

// mouseout event - when we drag our mouse button to out
const btn = document.querySelector('.btn');
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

//User Form Script
// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//Listen for form submit
myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '') {
    // Msg show in proper way - in html page
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    //alert('Please enter all fields');   // simple msg print

    //Remove error after 3 seconds(3000 is milisecond)
    setTimeout(()=>msg.remove() , 3000);
  } else {
    //console.log('success'); // simple way to print msg
    //Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild(li);

    //clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}