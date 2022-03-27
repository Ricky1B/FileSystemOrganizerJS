const fs = require("fs");
const path = require("path");

function tree(dirpath){
    let pathExists = fs.existsSync(dirpath);
    let isDir = !(fs.lstatSync(dirpath).isFile());

    if(!isDir || !pathExists){
        console.log("Directory does not exist!");
        return;
    }

    treeHelper(dirpath,"");
}

function treeHelper(dirpath,indent){
    
    if(path.basename(dirpath)==='.git'){
        return;
    }
    console.log(indent+path.basename(dirpath)+"--|");
    let allElements = fs.readdirSync(dirpath);
    indent += "\t";

    for(let i=0;i<allElements.length;i++){
        let element = allElements[i];
        
        let elementPath = path.join(dirpath,element);

        //check if file or directory
        let isFile = fs.lstatSync(elementPath).isFile();
        if(isFile){
            let fileName = path.basename(elementPath);
            console.log(indent+"|____"+fileName);
        }
        else{
            treeHelper(elementPath,indent)
        }

    }
}

module.exports = tree;