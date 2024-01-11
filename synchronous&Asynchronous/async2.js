const f1 = () => {
  //callback function
  console.log("f1");
};
const f2 = () => {
  console.log("f2");
};
const main = () => {
  console.log("main");
  setTimeout(f1, 0);
};
