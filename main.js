const help = require("./commands/help");
const organize = require("./commands/organize");
const tree = require("./commands/tree");

let inputArr = process.argv.slice(2);

let command = inputArr[0];
let path = inputArr[1];

switch(command){
    case "tree":
        tree(path);
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


