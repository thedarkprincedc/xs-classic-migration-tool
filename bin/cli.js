const { program } = require('commander');
const figlet = require('figlet');
const package = require('../package.json');

const app =  require('./app')

console.log(figlet.textSync(package.name));

const DEFAULT = {
    HANA_SOURCEDIR: process.cwd(),
    HANA_WORKSPACE: '__empty__'
}

program
    .name(package.name)
    .description(package.description)
    .version(package.version)

program
    .command('config')
    .description('creates a local configuration file')
        .option('-s, --source <type>', 'source directory', process.env.XSHANA_SOURCEDIR || DEFAULT.HANA_SOURCEDIR)
        .action((options) => 
            app.runConfiguration(options)
        );

program
    .command('createworkspace')
    .description('creates a local hana workspace')
        .option('-s, --source <type>', 'source directory', process.env.XSHANA_SOURCEDIR || DEFAULT.HANA_SOURCEDIR)
        .option('-w, --workspace <type>', 'workspace', process.env.XSHANA_WORKSPACE || DEFAULT.HANA_WORKSPACE)
        .option('-h, --hostname <type>', 'hostname', process.env.XSHANA_HOSTNAME)
        .option('-u, --username <type>', 'username', process.env.XSHANA_USERNAME)
        .option('-p, --password <type>', 'password', process.env.XSHANA_PASSWORD)
        .action((options) => 
            app.runCreateWorkspace(options)
        );

program
    .command('clone')
    .description('creates a local hana workspace')
        .action((options) => 
            app.runClone(options)
        );

program
    .command('sync')
    .description('synchronizes file systems with hana')
        .option('-s, --source <type>', 'source directory', process.env.XSHANA_SOURCEDIR || DEFAULT.HANA_SOURCEDIR)
        .option('-c, --connection <type>', 'hana connections string ex. "hostname:port@tenent"', process.env.XSHANA_HOSTNAME)
        .option('-p, --package <type>', 'hana package', process.env.XSHANA_PACKAGE)
        .option('-hu, --user <type>', 'hana username', process.env.XSHANA_USERNAME)
        .option('-hp, --password <type>', 'hana password', process.env.XSHANA_PASSWORD)
        .option('-d, --debug', 'debug mode', process.env.XSHANA_DEBUG)
        .action((options) => 
            app.runCreateWorkspace(options)
        );

program
    .command('export')
    .description('export delivery unit to file systems')
        .argument('<path>', 'string to path to export')
        .option('-d, --debug', 'debug mode', process.env.XSHANA_DEBUG)
        .action((paths, options) => 
            app.runExport(paths, options)
        );

program
    .command('import')
    .description('import delivery unit to file systems')
        .argument('<path>', 'string to path to import')
        .option('-d, --debug <type>', 'debug mode', process.env.XSHANA_DEBUG)
        .action((paths, options) => 
            app.runImport(paths, options)
        );

program.parse();

const options = program.opts();