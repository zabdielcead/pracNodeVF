const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');
//para jecutarlo es con comando -> node app
console.clear();

//console.log(process.argv);


console.log('baseee: yargs', argv.base);
console.log('listarrrr: yargs', argv.listar);

// instalar paquetes en nuestra aplicacion es con ayuda de npm
//crear package.json  -> npm init
//en el package.json se agrego en scripts node app --base=3 y para ejecutarlo es npm run base3

// ejecutar con args node app --base=3  node app -b=4
// ejecutar node app -b=7 -l=true -h=11



crearArchivo(argv.base, argv.listar, argv.hasta)
    .then((nombreArchivo) => {
        console.log(nombreArchivo, 'creado');
    }).catch((err) => {
        console.log(err);
    });