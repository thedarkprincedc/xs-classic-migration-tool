const path = require('path');
const os = require('os');
const moment = require('moment');

const exePath = {
    win32: { executable_dir: `${__dirname}/executable/windows` },
    darwin: { executable_dir: `${__dirname}/executable/osx` },
    linux: { executable_dir: `${__dirname}/executable/linux` }
}
const osPath = [process.env.PATH, path.resolve(`${__dirname}/executable`)]

const config = {
    regi: {
        path: (os.platform() == 'win32') ? osPath.join(';') : osPath.join(':'),
        browser: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
        workspace: './.regi_workspace',
        script_dir: `${__dirname}/scripts`,
        executable_dir: `${__dirname}/executables`,
        timestamp: moment().format('MMDDYYYY_hhmmss')
    },
    hostname: process.env.REGI_HOST,
    username: process.env.REGI_USER,
    password: process.env.REGI_PASSWD,
    debug: process.env.DEBUG || false
}

module.exports = config;