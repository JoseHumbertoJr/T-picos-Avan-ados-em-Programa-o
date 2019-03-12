const fs = require('fs');
const extract = require('extract-zip')
const archiver = require('archiver')

let opcao = process.argv[2]
var compactador = archiver('zip'); 
var saida = fs.createWriteStream('compactado.zip');
var local =  'C:/Users/José Humberto/Desktop/SI/Tópicos Avançados em Programação/compactador/compactado.zip';
var destino = 'C:/Users/José Humberto/Desktop';

if(opcao == "compactar"){
  saida.on('close', () => {
    console.log(compactador.pointer() + ' tamanho total');
  });
  compactador.pipe(saida);
  compactador.append(fs.createReadStream(local), {name: 'html.txt'});
  compactador.finalize();
} 
else if(opcao == "descompactar"){
  extract(local, {dir: "C:\\temp"}, (err) => {
    console.log(local);
    console.log(destino);
    console.log('descompactado');
    })
}