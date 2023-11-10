const eventEmitter = require('events');

// Creat emitter class
class MyEmitter extends eventEmitter {

}
// init abj
const emitterObj = new MyEmitter();

// Event listner 
emitterObj.on('event', () => console.log("Event Fired!"));

// init event 
emitterObj.emit('event');