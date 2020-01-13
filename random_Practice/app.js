// HTML
// Give five examples of an HTML element.
// <div></div>, <p></p>, <span></span>, <body></body>, <h1></h1>

// Give five examples of an HTML attribute.
// href="", src="", and any inline CSS attributes (width, height, background, etc.)

// What does it mean to “nest elements”?
// <body>
//    <p>
//        <span>
//            <a></a>
//        </span>
//    </p>
//</body>

// What does it mean to be a child, sibling, or parent element in HTML?
// Child, Sibling, Parent all refers to the level organization of nested elements.

// What elements are required to set up an HTML page? 
// <!DOCTYPE html>, <head>, <body>, <link (css)... <title> would be good too

// What element(s) do you know of that are used as a container for other elements?
// <div>, <header>, <footer>, <section>

// Which element is used to link to other webpages?
//<link href="">

// Which element is used to place an image on your webpage?
//<img src="">

// What are the elements used to make lists in HTML?
//<ul>, <ol>

// CSS
// If you had many elements that needed the same styling, how would you style them?  Why?
// Tag
// ID
// Class
// verbal answer?

// What is the order of specificity when it comes to CSS styling? (From most specific to least)
// Inline => tag=> id => class
// Tag => inline => class => id
// Class => id => inline => tag
// MY ANSWER (inline => id => class => tag)

// What is one way you know how to center text in an element?
// text-align: center

// JavaScript
// Data Types
// What are the 5 main data types in JavaScript?
// numbers, strings, booleans, arrays, objects

// Out of the 5 main data types, which are Primitive and which are Complex?
//Primitive: numbers, strings, booleans?
//Complex: arrays, objects

// How would you access the 2nd item in an array called recipes?
// Ex:   var recipes = [“flour”, “spice”]
// (recipes[1])

// How would you access the “name” property of an object called person?
// Ex:   var person = { name: “joe”, age: 20 }
// person.name

// Explain to the best of your knowledge the difference between primitive and complex data types.
// Primitive data types are set and cannot mean anything besides what they are defined as meaning
// Complex data types are a collection of data that have information contained within them that can be redefined or manipulated?

// What are the values that the data type Boolean can be?
// true or false

// Conventions
// Which of the following would be an array, and which would be a boolean?  Remember proper naming conventions.
// recipes = array
// recipe = array?
// isRecipe = boolean
// recipeItem = boolean?

// What is global scope?
// an attribute or property that effects the whole document?

// Conditionals
// What are conditional statements used for?
// conditional statements are used to call functions or manipulate data of some sort

// What are 4 conditional statements?
// if, else if, else, for, while

// What happens if an "if" statement is true?
// the follow code is executed

// What would be required for an if-else statement to reach the "else if" conditional statement?
// the parameters were not met for the previous code to have been executed

// When would you use the "if" conditional statement?
// When would you use the "else if" conditional statement?
// When would you use the "else" conditional statement?

// Loops
// When iterating over an array, what number do you typically begin your iterations at?  Why?
// i=0, so that you begin at the 0 index of the array

// What are the 3 statements required when creating a for loop & what do each of them do?
// where to begin (i=0), condition for the iteration (how long => i<.array.length)

// What data type does ‘i’ represent in a for loop?
// the iteration it is currently on.

// Functions
// To the best of your knowledge, what is the difference between a function expression and a function declaration?
// The declaration is when you want to name the function so that you can call it when you need it
// the expression is the point at which you would call it (these don't actually need to be named)

// Which symbols are used to call a function?
// ()

// What is global scope vs local scope? Show something defined in a local scope.
// not sure how to define this... global would be "document" local could be document.getElementById(idName)?

// Can functions call other functions? If so, when would this be useful?
// for sure. if you need a more complex set of things to happen but you want to name each function seperate from the others

// DOM
// What does interacting with the DOM in Javascript allow us to do?
// you can manipulate the html and css using the js file - this could change the elements on the page however you might want.

// Why would we need to use JavaScript to manipulate the DOM when we could just type it into the HTML/CSS files directly?
// because the site users can't do that but you would still want them to be able to dynamically interact with the page.

// What does DOM stand for?
// Document Object Model

// In your own words, what is the DOM?
// It is the current displayed page and all of its corresponding features

// What are two ways you could add text to an element you created in JavaScript?
// append or preppend the .innerHTML("") or change the .textContent("")

// If you need a button to be able to respond to a user clicking it, what will you need to add to it?
// you would need an button.addEventListener("click",) in your JS or directly in the html use the onClick attribute

// Show Me
// --------^

// Write a function declaration named “calibrateScale” that expects two values, “unit” and “howMany”.
function calibrateScale(unit, howMany){
    console.log(howMany + " " + unit)
}
// Now call that function and pass in the data “pounds” and 0.
calibrateScale("pounds", 0)

// Which of these are arguments and which are parameters?
// the "unit, howMany" are parameters, the "pounds, 0" are arguments

// Write an object named “door” that has the properties “height” and “width” set to any value you wish.
var doors={
    height : "100 inches",
    width : "32 inches",
}

// Write an array named “animals” that has at least 3 strings in it.
var animals = ["dog", "cat", "wallabee"]

// If you had an array that looked like this:
var houses = ["brick", "brown stone", "small", "wooden"]
// Write a for-loop and that would iterate over this array and console log every house type.
for(i=0;i<houses.length;i++){
    console.log(houses[i])
}

// What is the syntax for giving every element with the class “red” the background color of red? ( Write the css you would need to do this ).
//document.getElementsByClassName("red").style.backgroundColor("red")

// Write a function that takes a string as an argument and returns that string with the letter “s” added to the end of it.  Console.log the returned value.
function S(word){
    console.log(word + "s")
}
S("string")

// Write a function that takes an array as an argument and returns the last element of that array.  The array size can be any size between 1 - 100.
var lArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function letters(){
    for(i=0;i<lArray.length;i++){
        if(i=lArray.length-1){
            console.log(lArray[i])
        }
    }  
}
letters()

// Write a function to assign numbers a school grade value. The function should take 1 argument, the number value. Your function should console log a grade for the number value provided, either "A", "B", "C", "D", or "F". Can you take it a step further and account for +’s and -’s (ex: A+, A, A-)!
// answer?

//  Write a function that: Takes one argument, a number. Has a for loop that iterates from 0-10. Each number in the for loop (0-10) will be multiplied by the number given as a parameter to the function log to the console “0 multiplied by 11 equals 0”, “1 multiplied by 11 equals 11”, “2 multiplied by 11 equals 22”, etc.
//answer?

// In HTML create a <div> element. In CSS style that div so that it appears as a box on the DOM
// check

// Create a button in HTML.  Bring that button into Javascript.  Add an event listener to that button using JS techniques so that when the button is clicked it executes a for loop.
// document.getElementById("button").addEventListenodener("click", letters)

// How would you create an h1 element in JavaScript?
// answer?

var numbers = [1,2,3]
function lastNumber(arr){
    return arr[arr.length -1]
}
lastNumber(numbers)