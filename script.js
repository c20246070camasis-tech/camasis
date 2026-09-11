console.log('Hello world.');
const Myname = "CJ H CAMASIS";
console.log('NAME: ' + Myname);
let age = "20";
console.log('AGE: ' + age);
let number = "09123456789";
console.log('NUMBER: ' + number);
let address = "Barangay X Estado, victorias City";
console.log('ADDRESS: ' + address);

function greet(name) {
    return `Good Morning ${name}!`;
}
console.log(greet("Rene"));




function mdas(num1, num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let sub = num1 - num2;

    return (`values: ${num1} and ${num2}.\n product ${m},\n quotient ${d}, \n sum ${a},\n difference ${sub}`);
}
console.log(mdas(5, 3))

//query selector

const heading = document.querySelector("h1")

console.log(heading);


const contactHeading = document.querySelector("#contact h2");

console.log(contactHeading);


const projectHeading = document.querySelector("#services h2");

console.log(projectHeading);


//Text Context

heading.textContent = "My portfolio";

contactHeading.textContent = "Let's Connect!";

projectHeading.textContent = "My Projects";

//.style
heading.style.color = "purple";