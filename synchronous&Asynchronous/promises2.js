/*working with both promise and 
callback*/

//F1 is a callback function
const f1 = () => {
  console.log("f1");
};

const f2 = () => {
  console.log("f2");
};
const main = () => {
  console.log("main");
  setTimeout(f1, 0);

  //anonymous function used
  new Promise((resolve, reject) => {
    resolve("I am a  promise"); //this goes to job que

    //another way to execute "executor function"
  }).then((resolve) => console.log(resolve));
  //f2();
};

//main();

function f3() {
  console.log("f3");
}

console.log("Let's do it!");

setTimeout(function () {
  console.log("in settimeout");
}, 0);

f3();
f3();
f3();
f3();

function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function f3() {
  console.log("f3");
}

function f4() {
  console.log("f4");
}

console.log("Let's do it!");

setTimeout(function () {
  f1();
}, 0);

f4();

setTimeout(function () {
  f2();
}, 5000);

setTimeout(function () {
  f3();
}, 3000);
