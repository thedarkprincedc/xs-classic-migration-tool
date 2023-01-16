const regi = require('./regi');

function runCreateWorkspace(options){
    try {
        regi.createWorkspace()
        console.log(options)
    } catch(error){
        if(options.debug){
            console.error(error.stack)
        } else {
            console.error("Error: %s", error.message)
        }
    }
}

function runConfiguration(options){
    try {
        regi.createWorkspace()
        console.log(options)
    } catch(error){
        if(options.debug){
            console.error(error.stack)
        } else {
            console.error("Error: %s", error.message)
        }
    }
}

function runClone(options){
    try {
        console.log(options)
    } catch(error){
        if(options.debug){
            console.error(error.stack)
        } else {
            console.error("Error: %s", error.message)
        }
    }
}

function runSynchronization(options){
    try{
        regi.copy(options.source, options.destination);
        regi.commit();
        regi.activate();
    } catch(error){
        if(options.debug){
            console.error(error.stack)
        } else {
            console.error("Error: %s", error.message)
        }
    }
}

function runImport(paths, options){
    try {
        regi.importDeliveryUnit()
    } catch(error){
        if(options.debug){
            console.error(error.stack)
        } else {
            console.error("Error: %s", error.message)
        }
    }
}

function runExport(paths, options){
    try {
        regi.exportDeliveryUnit()
    } catch(error){
        if(options.debug){
            console.error(error.stack)
        } else {
            console.error("Error: %s", error.message)
        }
    }
}

module.exports = {
    runCreateWorkspace,
    runConfiguration,
    runClone,
    runSynchronization,
    runImport,
    runExport
}

// function defaultExportName(appName, tenent, prefix){
//     prefix = prefix || 'DU'
//     tenent = tenent || null

//     const currentDate = new Date();
//     const dateString = [
//         currentDate.getFullYear(),
//         currentDate.getMonth(),
//         currentDate.getDay(),
//         '_',
//         currentDate.getHours(),
//         currentDate.getMinutes()
//     ].join('')
   
//     return [prefixName, appName, dateString, tenent].join('_') + `.tgz`;
// }

// const host = (!options.host) ? `${options.hostname}:${options.port}@${options.tenant}` : options.host;

// if(!validateConnectionString(options.host)){
//     throw new Error('HANA connection string not formatted correctly')
// }

// function validateConnectionString(connectionString){
//     return /[A-Z0-9]+\:[0-9]+\@[A-Z0-9]+/ig.test(connectionString);
// }

// function validateUsernamePassword(hostname, username, password){

// }

//console.log(options)