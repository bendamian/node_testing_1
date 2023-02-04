const logEvents = require('./logEVENTS')

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

//initialize the object
myEmitter = new MyEmitter()

myEmitter.on('log', (msg)=> logEvents(msg))

setTimeout(()=>{ //emit events
    myEmitter.emit('log', 'Log event emitted')


},2000)