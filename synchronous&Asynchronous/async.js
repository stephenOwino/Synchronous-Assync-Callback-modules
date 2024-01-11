const printMe = () => {
  console.log("print me");
};

const test = () => {
  console.log("test");
};
setTimeout(printMe, 5000);
test();
