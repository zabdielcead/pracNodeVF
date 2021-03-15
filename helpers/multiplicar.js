const fs = require('fs');
const colors = require('colors');
// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {
//         let salida = '';

//         console.log('=================');
//         console.log(`TABLA ${base}`);
//         console.log('================');

//         for (let i = 1; i <= 10; i++) {
//             salida += ` ${base} x ${i} = ${base * i}\n`;
//         }


//         // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//         //     if (err) throw err;
//         //     console.log(`tabla-${base}.txt creado`);
//         // });
//         try {


//             fs.writeFileSync(`tabla-${base}.txt`, salida); // si sucede un error se atraparia con un try catch
//             resolve(`tabla-${base}.txt`)
//         } catch (err) {
//             reject(err);
//         }


//         //console.log(`tabla-${base}.txt creada`);

//     })
// }

const crearArchivo = async(base = 5, listar, hasta = 10) => {

    try {


        let salida = '';

        console.log('================='.blue);
        console.log(`TABLA del`, colors.blue(base));
        console.log('================'.yellow);

        for (let i = 1; i <= hasta; i++) {
            salida += ` ${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log(salida.rainbow);
        }
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // });



        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); // si sucede un error se atraparia con un try catch
        return `tabla-${base}.txt`;




    } catch (err) {
        throw err;
    }
    //console.log(`tabla-${base}.txt creada`);


}
module.exports = {
    crearArchivo: crearArchivo
}