const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Si aparece en consola la tabla'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'numero de hasta la tabla'
        }
    })
    .check((argv, options) => {
        //console.log('yargs', argv);
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero';
        }

        return true;
    })
    .argv;

module.exports = argv;