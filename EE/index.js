const EventEmitter = require("events");
const emitter = new EventEmitter();


emitter.on("soaltest", (args) => {
    console.log("received", args.called);
})
emitter.on("soaltest", (args) => {
    console.log("received again", args.called);
})

emitter.emit("soaltest", { called: 1 });
emitter.emit("soaltest", { called: 2 });
emitter.emit("soaltest", { called: 3 });


