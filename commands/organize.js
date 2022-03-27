const fs = require("fs");
const path = require("path");

let types = {
    media: ["mp4","mkv","mp3","cam"],
    archives: ["zip","rar","tar","iso"],
    documents: ["docx","doc","pdf","txt","xlsx","xls","csv","ps","tex"],
    app: ["exe",".apk","pkg"],
    images: ["jpg","jpeg","png","img"]
}

function organize(srcPath){
    if(srcPath == undefined){
        srcPath = process.cwd();
    }
    
    let organizedFiles = path.join(srcPath,'organized_files');

    //check if organized-files folder already exists or not
    if(!fs.existsSync(organizedFiles)){
        fs.mkdirSync(organizedFiles);
    }
    
    //get all the files on tha path: that are to be organzied
    let allFiles = fs.readdirSync(srcPath);

    for(let i=0;i<allFiles.length;i++){

        let filePath = path.join(srcPath,allFiles[i]);

        //cheking if the given filePath is a file or folder
        let isFile = fs.lstatSync(filePath).isFile();

        if(isFile){
            //get the extension of file
            let ext = path.extname(allFiles[i]).split(".")[1];

            //get folder Name
            let folderName = getFolderName(ext);

            //copy the file from src to destination
            let destPath = path.join(organizedFiles,folderName);
            copyFileToDest(filePath,organizedFiles,folderName);

        }
    }
}

function getFolderName(ext){
    for(let type in types){
        
        if(types[type].includes(ext)){
            return type;
        }
    }
}

function copyFileToDest(srcPath, destPath){

    if(!fs.existsSync(destPath)){
        fs.mkdirSync(destPath);
    }
    let fileName = path.basename(srcPath);
    destPath = path.join(destPath,fileName);
    fs.copyFileSync(srcPath,destPath);
}

module.exports = organize;