import { callbackify } from "util";

var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

// when it calls the fuction you passed in ---it is called a callback

var function1 = function(func2,message) {
    console.log(message);
    func2();
}

// Write a function that runs a function argument if
// its other argument is truthy.

var val=true;

var function3 = function(func2,val) {
    if (val) {
        func2();
    }
}
// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

var function4 = function(func2,val) {
    return function() {
        return func2(value);
    };
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo uusing callbacks anywhere? Where?





    fs.writeFile("log.txt", content, function (err) {

        // If the code experiences any errors it will log the error to the console.
        if (err) {
            console.log(error);
        } else
            // We will then print the contents of data
            console.log("content Added");

        // 
    });








function func2(){
    console.log("func2");
}
