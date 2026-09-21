// How to manipulate the DOM (Document Object Model) with JavaScript

// Grab our h1 from the page
let heading = document.querySelector("h1");

console.log(heading);

// Change the text of the element
heading.textContent = "Changed the heading to something else!";

// Change the text color
heading.style.color = "#0000FF";
heading.style.color = "blue";

//Pick your own style and change it
heading.style.outlineStyle = "solid";
heading.style.outlineColor = "black";

// Retrieve an ID element from the page - these both do the same exact thing, just in different ways - developer's choice
document.getElementById("topics").style.color = "red";
document.querySelector("#topics").style.color = "red";

// Select the img tag
let image = document.querySelector("img");

// Displays the src of the image in the console
console.log(image.getAttribute("src"));

// Changes the src of the image (now it's a different image)
image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0LDAf4hKuwJ72Ba2W7eBNj78y2SUc4nGk93Z9pPBX_Zb9RZbT49eMe9JGYMpHJMlRbjC0tr-p-EOln3ZvJa0K0vE28zeTf5pWGCQyQ&s=10");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                