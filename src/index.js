/*
const moduleData = require("./math");
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));

const {add,sub}=require('./math');
console.log(add(1,2));
console.log(sub(1,2));
*/



//대표하는 default 함수는 { 여기안에서 } 불러오지 않는다. 
//import multiply, { add, sub } from "./math.js";   //두개를 합쳐서 import도 가능하다.  
import { add, sub, multiply} from "./math.js";   
import addNtimes from "./math.js";
import { forEach } from "./arrayBuilt-inFunctions.js";
 
console.log(addNtimes(2,3,4));
console.log(forEach());
