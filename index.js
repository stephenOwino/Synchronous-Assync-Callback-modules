//this is called static import ,static export
//static import is not conditional like ,if this ,else that.you will get an error

//import { sayHi, sayHola } from "./greetings.js";

//dynamic import,this returns a promise.see bellow

//you can use this code anywhere .top centre,bottom

const { sayHi, sayHola } = await import("./greetings.js");

//how to handle multiple imports

const promises = Promise.all([
  await import("./greetings.js"),
  await import("./calc.js"),
]);
//console.log(promises);

promises.then((result) => {
  //console.log(result);

  console.log(result[1].sum(4, 4));
});
