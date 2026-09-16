
// Declare a variable
let age = 23;

// Like print in python - sends it to the console
console.log(age);

// Age can be reassigned
age = 26;

console.log(age);

// A constant variable - unchangeable (immutable) unlike normal variables
const name = "Alyssa McBride";

// This won't work because constants can't be changed:
// name = "Dr Java";

const policyDisclaimer = "Just because you give us money, doesn't mean we have to give it back to you";

const username = "billybob";

// Scope = where you can reference a variable by name

if(age == 22) {
    // In blocks (surrounded by curly brackets), you are now in a new scope
    // can reference username because it is up a level
    console.log(username)

    let favoriteColor = "blue";
}

// This would fail because we have left the scope of the curly braces, or block:
// console.log(favoriteColor)

// grab our H1 from the DOM and color it blue using CSS.
document.querySelector("h1").style.color = "Blue";