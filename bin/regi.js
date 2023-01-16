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
    //const command = `${rootPath}/regi create ws ${workspaceName} --host=${hostname} --user=${username} --passwd=${password} `;
    const command = `${rootPath}/regi help create workspace `;
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
    const command = `${rootPath}/regi help commit`;
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
    const command = `${rootPath}/regi help transport deliveryUnit`;
    //const command = `${rootPath}/regi help export deliveryUnit`;
    //const command = `${rootPath}/regi help export deliveryUnit $deliveryUnit $filename`;
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

function getCurrentDateTime(){
    const currentDate = new Date();
    const date = currentDate.getFullYear()+String(currentDate.getMonth()+1).padStart(2,0)+String(currentDate.getDate()).padStart(2,0)
    const time = `${currentDate.getHours()}${currentDate.getMinutes()}`;
    return [date, time].join('_');
}

function generateExportName(name, tenent, prefix){
    if(!name){  
        throw new Error("Could not find name");        
    }
    if(!tenent){    
        throw new Error("Could not find tenent"); 
    }
    return [prefix || 'DU', name, getCurrentDateTime(), tenent].join('_') + '.tgz';
}