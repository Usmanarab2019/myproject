console.log("Hello World! learning javascript ");
if (confirm("are you sure you want to quit")) {
  alert("Hello World!");
} else {
  alert("Now Quitting!");
}
var a = 1;
let b = 2;
var a = 22;
b = 44;
const c = a + b;
// const c = 12;
const d = null;
const obj = {
  name: "Amit",
  age: 25,
  children: [
    {
      name: "John",
      age: 11,
    },
    {
      name: "ade",
      age: 8,
    },
    {
      name: "bose",
      age: 2,
    },
  ],
};
console.log(obj);
function myFun() {
  const myBookElement = document.getElementById("myBook");
  if (myBookElement !== null) {
    myBookElement.innerHTML = "Content changed!";
  }
}
