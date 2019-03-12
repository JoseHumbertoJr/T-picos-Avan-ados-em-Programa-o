const fs = require('fs');
const archiver = require('archiver');

var saida = fs.createWriteStream('arquivoCompactado.zip');
saida.path('C:/Users/José Humberto/Desktop/SI');
var compactado = archiver('zip');
let destino = process.argv[3];

ext(origem, {dir: 'C:/Users/José Humberto/Desktop/SI'}, (err) => {
    console.log('descompactado');
})