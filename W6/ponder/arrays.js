let courses = ["WDD131", "ITM220", "WDD231", "CSE212"];

// arrays start with index 0
console.log(courses[0]);
console.log(courses[4]);

// javascript will allow a mixed type array like this, but you shouldn't do it.
// let coursesAndGPA = ["WDD131", 3.7, "ITM 220", 4];

// Javascript object: has key and as many values as you like.
let courseAndGPA = {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner"
}
// prints all items in the object
console.log(courseAndGPA)
// prints selected item in the object
console.log(courseAndGPA.courseGPA);

// an array of objects
let coursesAndGPA = [
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner",
        assignments: [
            {
                assignmentName: "W01 Prove",
                assignmentGrade: 89
            }
        ]
    },
    {
        courseName: "WDD231",
        courseGPA: 4,
        professor: "Brother Warner"
    }
]
// Challenge: Retreive the course name for the second item in the array of objects and print to screen
console.log(coursesAndGPA[1].courseName);

// Retrieve the assignment name for the first assignment in the first course in the array. 
console.log(coursesAndGPA[0].assignments[0].assignmentName);

// Looping through the array, displaying the course name and associated GPA for each. 
for(let i = 0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseName);
    console.log(coursesAndGPA[i].courseGPA);
}

// Looping through with a foreach loop
coursesAndGPA.forEach(item => console.log(item.courseName));
// This is the same function, but spread out
coursesAndGPA.forEach(item => {
    console.log(item.courseName);
});

let body = document.querySelector('body');

// build out HTML dynamically based on array contents
let dynamicHTML = `
    <div>
        <h1>${courseAndGPA.courseName}</h1>
        <h2>${courseAndGPA.courseGPA}</h2>
    </div>
`;

coursesAndGPA.forEach(course => {
    let dynamicHTML = `
        <div>
            <h1>${course.courseName}</h1>
            <h2>${course.courseGPA}</h2>
        </div>
`;
    body.innerHTML += dynamicHTML;
});
    