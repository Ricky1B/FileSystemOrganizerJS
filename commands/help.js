function help(){
    console.log(`
        The commands you can use are:
        1. node main.js help : To see the list of commands
        2. node main.js organize path : to organize the files in proper folders on the given path
        3. node main.js tree path : to see a tree of files and folders
    `);
}

module.exports = {
    help:help
}