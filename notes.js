// Link our variable "button" to a DOM element
var button = document.getElementById("someButton")
// add a DOM eventListener to that variable.
button.addEventListener("click", whatToDoOnClick);
// here we define the whatToDoOnClick function
function whatToDoOnClick() {
    alert("You Did it!");
    (function (param1, param2) {
        console.log("I'm an immediate function!");
    })("arg1", "arg2");

}

var a = "Hi";
var b = 38;
function test() {
  console.log("test")
}
function add() {
  console.log("add")
}
test();

let ab = true
if (!ab) {
    console.log("true")
} else
console.log("false")
/*
( function() {
    var a = "Hi";
    var b = 38;
    function test() {
      //some codes here
    }
    function add() {
      //some codes here
    }
    test();
 }());

*/
// Here we have a function called "Outer"
function Outer() {
    // There is a count variable that is scoped to the function
    var count = 0;
    // There is an inner function that increments count and then console.logs it
    function inner() {
        // increment count
        count++
        // console.log count
        console.log(count);
    }
    // return the inner function! We can return a function!
    return inner
}
// counter is now the function returned from invoking Outer
var counter = Outer();
// if we invoke the counter function
counter() // this will console.log "1"
counter() // this will console.log "2"
counter() // this will console.log "3"
counter() // this will console.log "4"
// So that means that the count variable still exists! 
// and it is being changed even though we aren't inside of the Outer function!
// What if we try to access count out here?
//console.log(count) // doesn't work!

function ninjaBelt(ninja, beltColor) {
    console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
}
ninjaBelt('Eileen', 'black');

function ninjaBelt(ninja) {
    return function belt(beltColor) { //note the closure here!
        console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
    }
}
ninjaBelt('Eileen')('black'); //note the double invocation here.
