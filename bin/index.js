const { program } = require('commander');
const figlet = require('figlet');
const {regiMigrate, regiImport, regiExport,regiHelp} = require('./regi.js');
const package = require('../package.json');
const config = require('./config')

program
    .name(package.name)
    .description(package.description)
    .version(package.version)

program
    .command('migrate')
    .description('migrate folder to hana package')
        .argument('<package>', 'package')
        .option('-s, --source <src>', 'source')
        .option('-u, --username <username>', 'username', config.username)
        .option('-p, --password <password>', 'password', config.password)
        .option('-h, --hostname <hostname>', 'hostname', config.hostname)
        .option('-d, --debug', 'debug mode', config.debug)
        .action((paths, options) => 
            regiMigrate({package: paths, ...options, ...config.regi})
        )

program
    .command('import')
    .description('migrate folder to hana package')
        .argument('<deliveryunit>', 'deliveryunit')
        .option('-u, --username <username>', 'username', config.username)
        .option('-p, --password <password>', 'password', config.password)
        .option('-h, --hostname <hostname>', 'hostname', config.hostname)
        .option('-d, --debug', 'debug mode', config.debug)
        .action((paths, options) => 
            regiImport({package: paths, ...options, ...config.regi})
        );

program
    .command('export')
    .description('migrate folder to hana package')
        .argument('<package>', 'package')
        .option('-u, --username <username>', 'username', config.username)
        .option('-p, --password <password>', 'password', config.password)
        .option('-h, --hostname <hostname>', 'hostname', config.hostname)
        .option('-d, --debug', 'debug mode', config.debug)
        .action((paths, options) => 
            regiExport({package: paths, ...options, ...config.regi})
        );

program
    .command('regi-help')
    .description('migrate folder to hana package')
        .action((paths, options) => 
            regiHelp({package: paths, ...options, ...config.regi})
        );
        
console.log("%s\n", figlet.textSync(package.name));

program.parse(process.argv);

const options = program.opts();
