const { exec } = require('node:child_process');

function hostnameValidation(hostname){
    return /([\d]+\.[\d]+\.[\d]+\.[\d]+|[A-Z0-9]+\:[\d]+)/ig.test(hostname)
}

function regiMigrate(options){
    const command = `${options.script_dir}/regi-migrate.sh`
    const opts = {
        env: {
            PATH: options.path,
            REGI_WORKSPACE: options.workspace,
            REGI_PACKAGE: options.package,
            REGI_SOURCE: options.source,
            REGI_HOST: options.hostname,
            REGI_USER: options.username,
            REGI_PASSWD: options.password
        }
    }
    if(!hostnameValidation(options.hostname)){
        throw new Error('hostname not formatted correctly')
    }
    exec(command, opts, (error, stdout, stderr) => {
        if(error){
            console.error(`exec error: ${error}`)
            return;
        }
        console.log(stdout)
        console.log(stderr)
    })
}

function regiExport(option){
    const command = `${options.script_dir}/regi-export.sh`;
    const opts = {
        env: {
            PATH: options.path,
            REGI_DELIVERY_UNIT: options.deliveryunit,
            REGI_DU_FILENAME: options.filename || `du-${options.deliveryunit}-${options.timestamp}.tgz`,
            REGI_PACKAGE: options.package,
            REGI_HOST: options.hostname,
            REGI_USER: options.username,
            REGI_PASSWD: options.password
        }
    }
    exec(command, opts, (error, stdout, stderr) => {
        if(error){
            console.error(`exec error: ${error}`)
            return;
        }
        console.log(stdout)
        console.log(stderr)
    })
}

function regiImport(option){
    const command = `${options.script_dir}/regi-import.sh`;
    const opts = {
        env: {
            PATH: options.path,
            FILENAME: option.filename,
            REGI_HOST: options.hostname,
            REGI_USER: options.username,
            REGI_PASSWD: options.password
        }
    }
    exec(command, opts, (error, stdout, stderr) => {
        if(error){
            console.error(`exec error: ${error}`)
            return;
        }
        console.log(stdout)
        console.log(stderr)
    })
}

module.exports = {
    regiMigrate: regiMigrate,
    regiExport: regiExport,
    regiImport: regiImport
}