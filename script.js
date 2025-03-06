console.log("Hello World! learning javascript ");
if (confirm("are you sure you want to quit")) {
  alert("Hello World!");
} else {
  alert("Now Quitting!");
}
var a = 1;
let b = 2;
const c = a + b;
function myFun() {
  const myBookElement = document.getElementById("myBook");
  if (myBookElement !== null) {
    myBookElement.innerHTML = "Content changed!";
  }
}
