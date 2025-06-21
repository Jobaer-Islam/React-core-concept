console.log("object");

const root = document.getElementById("myDiv");
let count = 0;
root.innerHTML = `Hello HTML ${count}`;

function handleIn() {
    count++;
    root.innerHTML = `Hello HTML ${count}`;
}