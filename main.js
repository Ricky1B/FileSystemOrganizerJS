const help = require("./commands/help");
const organize = require("./commands/organize");

let inputArr = process.argv.slice(2);

let command = inputArr[0];
let path = inputArr[1];

switch(command){
    case "tree":
        //call tree function
        break;
    case "organize":
        organize(path);
        break;
    case "help":
        help.help();
        break;
    default:
        console.log("Command not recognized")
        break;
}


