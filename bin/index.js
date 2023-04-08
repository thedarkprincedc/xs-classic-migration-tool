const { program } = require('commander');
const {regiMigrate} = require('./regi.js')
const figlet = require('figlet');
const package = require('../package.json');
console.log(figlet.textSync(package.name));
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
        .option('-u, --username <username>', 'username', process.env.REGI_USER)
        .option('-p, --password <password>', 'password', process.env.REGI_PASSWD)
        .option('-h, --hostname <hostname>', 'hostname', process.env.REGI_HOST)
        .option('-d, --debug', 'debug mode', false)
        .action((paths, options) => 
            regiMigrate({package: paths, ...options, ...config.regi})
        )

program
    .command('import')
    .description('migrate folder to hana package')
        .argument('<deliveryunit>', 'deliveryunit')
        .option('-u, --username <username>', 'username', process.env.REGI_USER)
        .option('-p, --password <password>', 'password', process.env.REGI_PASSWD)
        .option('-h, --hostname <hostname>', 'hostname', process.env.REGI_HOST)
        .option('-d, --debug', 'debug mode', false)
        .action((paths, options) => 
            regiImport({package: paths, ...options, ...config.regi})
        );

program
    .command('export')
    .description('migrate folder to hana package')
        .argument('<package>', 'package')
        .option('-u, --username <username>', 'username', process.env.REGI_USER)
        .option('-u, --username <username>', 'username', process.env.REGI_USER)
        .option('-p, --password <password>', 'password', process.env.REGI_PASSWD)
        .option('-h, --hostname <hostname>', 'hostname', process.env.REGI_HOST)
        .option('-d, --debug', 'debug mode', false)
        .action((paths, options) => 
            regiExport({package: paths, ...options, ...config.regi})
        );
   
program.parse(process.argv);
const options = program.opts();