// Javascript object

const aCourse = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    sections:
    [
        // arrays in javascript are accessed by the index, there is no key or name for each variable
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        { 
            sectionNum: 2,
            roomNum: 'STC 221',
            enrolled: 9,
            days: 'MWF',
            instructor: 'Bro Warner'
        }
    ],
    enrollStudent : function(sectionNumber) {
        console.log(this.name);
    }
};

console.log(aCourse.name);

aCourse.enrollStudent(1);

// event listener when button is pressed
document.querySelector("#enrollStudent").addEventListener("click", (e) => {
    // when pressed, find section number they entered
    let sectionNumber = document.querySelector("#sectionNumber").value.trim();
    // increment enrollment of that section by 1
    aCourse.sections.forEach(section => {
        // is this section the section they want to update?
        if(section.sectionNum == sectionNumber) {
            // Increase the enrollment by 1 of just that section
            section.enrolled += 1;
        }

        console.log(section.sectionNum);
        console.log(section.enrolled);
    });
    // re-render the table with updated data
    renderSections(aCourse.sections);
});
