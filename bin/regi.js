const {exec, spawn} = require('child_process')

const rootPath = "library/regi"
module.exports = {
    createWorkspace,
    copy,
    commit,
    activate,
    exportDeliveryUnit,
    importDeliveryUnit,
    generateExportName
}

function createWorkspace(){
    const workspaceName = "__empty__"
    const hostname = ''
    const username = ''
    const password = ''
    const command = `${rootPath}/regi create ws ${workspaceName} --host=${hostname} --user=${username} --passwd=${password} `;
    //const command = `${rootPath}/regi help create workspace `;
    exec(command, result)
    return `regi create workspace`;
}
function copy(){
    const command = `${rootPath}/regi help create workspace`;
    exec(command, result)
    console.log('copying...')
    return `copy `
}

function commit(){
    const command = `${rootPath}/regi help create workspace`;
    exec(command, result)
    console.log('committing...')
    return `regi commit`;
}

function activate(){
    const command = `${rootPath}/regi help create workspace`;
    exec(command, result)
    console.log('activating...')
    return `regi activate`;
}

function exportDeliveryUnit(filename){
    const command = `${rootPath}/regi help create workspace`;
    exec(command, result)
    console.log('export delivery unit')
    return `regi export ${filename}`;
}

function importDeliveryUnit(filename){ 
    const command = `${rootPath}/regi help import`;
    exec(command, result)
    console.log('import delivery unit')
    return `regi import ${filename}`;
}

function result(error, stdout, stderr) {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
}

function generateExportName(name, tenent, prefix){
    if(!name){  
        throw new Error("Could not find name");        
    }
    if(!tenent){    
        throw new Error("Could not find tenent"); 
    }
    prefix = prefix || "DU"
    const fileType = '.tgz'
    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}${currentDate.getMonth()+1}${currentDate.getDate()}`;
    const time = `${currentDate.getHours()}${currentDate.getMinutes()}`;
    return [prefix, name, date, time, tenent].join('_') + fileType;
}