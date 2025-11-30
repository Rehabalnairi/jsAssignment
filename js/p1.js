//Each student should be stored as an object with the following properties: 
//name 
//age 
// grade 
// city 

const students = [
  { name: "rehab", age: 26, grade: "A", city: "Muscat" },
  { name: "Ali", age: 22, grade: "B", city: " Muscat" },
    { name: "Maryam", age: 23, grade: "C", city: "Muscat" },
    { name: "fatma", age: 21, grade: "B", city: "Muscat" },
    { name: "Aya", age: 20, grade: "A", city: "Muscat" }
];
//Store all students together inside one array called students.
console.log(students);

/*Create a function called printStudent(student) that prints: 
Name: ... 
Age: ... 
Grade: ... 
City: ... 
Call this function for every student using a loop.*/
function printStudent(student) {
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Grade: ${student.grade}`);
  console.log(`City: ${student.city}`);
  console.log('-------------------');
}

students.forEach(function(student) {
  printStudent(student);
});


/* Add a New Student 
Use spread operator to copy the students array 
and add a new student object at the end. 
Store the new array in a variable called updatedStudents.*/
const newStudent = { name: "Omar", age: 24, grade: "A", city: "Muscat" };
const updatedStudents = [...students, newStudent];
console.log(updatedStudents);

/*Use destructuring to extract the name and grade of the first student: 
const { name, grade } = students[0]; 
Print them.*/
const { name, grade } = students[0];
console.log(`Name: ${name}, Grade: ${grade}`);  


/*Using if / else, check: 
 If the student’s grade ≥ 90 → print "Excellent" 
 If grade ≥ 75 → print "Good" 
 If grade ≥ 50 → print "Pass" 
 Else → print "Fail" 
Also use a switch statement to print a message depending on the student’s city: 
Example: 
If city = "Cairo" → “City: Cairo” 
If city = "Alex" → “City: Alexandria” 
Otherwise → “City: Other”*/
students.forEach(function(student) {
    const gradeValue = student.grade.charCodeAt(0); // Convert grade letter to a numeric value for comparison
    if (gradeValue <= 65) { // A
        console.log(`${student.name}: Excellent`);
    } else if (gradeValue <= 66) { // B
        console.log(`${student.name}: Good`);
    } else if (gradeValue <= 67) { // C
        console.log(`${student.name}: Pass`);
    } else {
        console.log(`${student.name}: Fail`);
    }
    switch (student.city.trim()) {
        case "Cairo":
            console.log("City: Cairo");
            break;
        case "Alex":
            console.log("City: Alexandria");
            break;
        default:
            console.log("City: Other");
    }
    console.log('-------------------');
});

/* Array Methods 
Using the students array, do the following: 
 Add a student using push() 
 Remove the last student using pop() 
 Add a student to the beginning using unshift() 
 Remove the first student using shift() 
 Create a new small array using slice() 
 Check if a student name exists using includes() (Hint: create an array of names only)*/
students.push({ name: "Lina", age: 25, grade: "B", city: "Muscat" });
console.log("After push:", students);

students.pop();
console.log("After pop:", students);
students.unshift({ name: "Samir", age: 27, grade: "C", city: "Muscat" });
console.log("After unshift:", students);
students.shift();
console.log("After shift:", students);  
const smallArray = students.slice(0, 3);
console.log("Small array:", smallArray);
const namesArray = students.map(student => student.name);
const nameExists = namesArray.includes("Ali");
console.log("Does the name 'Ali' exist?", nameExists);

