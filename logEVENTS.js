const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromisess = require("fs").promises
const path = require("path");
const { log } = require("console");


const logEvents = async(message)=>{
const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
const logItem= `${dateTime}\t${uuid()}\t${message}\n`

console.log( logItem)

try {
    if(!fs.existsSync(path.join(__dirname,'logs'))){
     await fsPromisess.mkdir(path.join(__dirname,'logs'))

    }
    await fsPromisess.appendFile(path.join(__dirname,'logs','eventLog.txt'),logItem)
}catch(err){
    console.log(err)
}


}

module.exports = logEvents

//console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

//const x = uuid()


