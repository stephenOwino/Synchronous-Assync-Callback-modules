console.log("hey stephen");

//aliases help us to give a file a name of our choice to avoid naming conflic
//as "add" bellow is an alias

//import { sum as add, sub } from "./calc.js";

//you can give any name
/*import { default as myChannelName } from "./steve.js";*/

//we can also import the above default file as
//instead of writting much cod

//use of combineExport

import * as combine from "./combineExport.js";

console.log(combine.calc.sum(2, 3));
console.log(combine.channelName());
