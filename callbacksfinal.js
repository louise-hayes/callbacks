var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

function log(msg, callback){
    console.log(msg);
    callback();
}

// Write a function that runs a function argument if
// its other argument is truthy.

function runFunction(fn, shouldIrun){
    if(shouldIrun){
        fn();
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

function functionWithAVal(fn, val){
    return fn(val);
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo uusing callbacks anywhere? Where?

fs.writeFile('./log.text', 'utf8', (err)=>{
    if(err){
        console.log(err);
    }
    console.log("I'm inside the callback here");
})




