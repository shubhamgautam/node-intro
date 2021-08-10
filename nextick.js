const { nextTick } = require("process");


setImmediate(() => console.log("immeidate")) //next loop
setTimeout(() => { console.log("timeout") }, 1000); // next loop
nextTick(() => console.log("tick")); // same loop

//immediate, tick, timeout +1

