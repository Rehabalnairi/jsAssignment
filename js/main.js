//Create a class called Human with basic properties such as name, age, and ID. 
class Human {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

class Engineer extends Human {
    constructor(name, age, id, title, departmentId, salary, workingHours) {
        super(name, age, id);
        this.title = title;
        this.departmentId = departmentId;
        this.salary = salary;
        this.workingHours = workingHours;
    }
}

// 3. Engineer objects
const engineers = [
    new Engineer("Ahmed Ali", 28, 1, "Software Engineer", "D101", 1200, "40 hrs/week"),
    new Engineer("Sara Mohammed", 32, 2, "Network Engineer", "D202", 1400, "45 hrs/week")
];

const container = document.getElementById("engineer-container");

engineers.forEach((eng, index) => {
    const div = index === 0 ? container : container.cloneNode(true);

    div.querySelector(".name").textContent = eng.name;
    div.querySelector(".title").textContent = eng.title;
    div.querySelector(".age").textContent = eng.age;
    div.querySelector(".department").textContent = eng.departmentId;
    div.querySelector(".salary").textContent = eng.salary;
    div.querySelector(".hours").textContent = eng.workingHours;

    if (index !== 0) {
        document.body.appendChild(div);
    }
});
console.log("JavaScript is working!");
console.log(engineers);
console.log(document.getElementById("engineer-container"));

