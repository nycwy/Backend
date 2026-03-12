const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (username) => {
    console.log(`Hello ${username}! Welcome to events in NodeJs`);
});

eventEmitter.once('notifyUser', (username) => {
    console.log(`${username} joined!`);
});

eventEmitter.on("greet", (username) => {
    console.log(`Hey ${username}! How are you`);
});

eventEmitter.emit("notifyUser", "Santosh");
// eventEmitter.emit("notifyUser", "Santosh Khatri");

// eventEmitter.emit("greet", "Santosh");
eventEmitter.emit('greet', "Santosh Khatri");