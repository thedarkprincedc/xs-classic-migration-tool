const {exec} = require('child_process')
const path = require('path')

const regiPath = path.join(__dirname, '../library/regi')
//console.log('>>%s', regiPath)
//const rootPath = path.join(__dirname, '../../library')
//console.log(rootPath)

//const rootPath = "/Users/brett/Projects/xs-migration/library"

module.exports = {
    createWorkspace,
    copy,
    commit,
    activate,
    exportDeliveryUnit,
    importDeliveryUnit,
    generateExportName
}

function createWorkspace(options){
    if(!options.hostname){
        throw new Error("No hostname supplied")
    }
    if(!options.username){
        throw new Error("No username supplied")
    }
    if(!options.password){
        throw new Error("No password supplied")
    }
    const command = `${regiPath} create ws ${options.workspace} --host=${options.hostname} --user=${options.username} --passwd=${options.password}`;
    exec(command, result)
}
function copy(){
    const command = `${regiPath} help create workspace`;
    exec(command, result)
}

function commit(){
    const command = `${regiPath} help commit`;
    exec(command, result)
}

function activate(){
    const command = `${regiPath} help create workspace`;
    exec(command, result)
}

function exportDeliveryUnit(filename){
    const command = `${regiPath} help export deliveryUnit $deliveryUnit $filename`;
    exec(command, result)
}

function importDeliveryUnit(filename){ 
    const command = `${regiPath} help import`;
    exec(command, result)
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