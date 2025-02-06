const path = require('node:path');
const fs = require('node:fs');
const env = require('dotenv');
env.config();

const filePath = path.join(process.cwd(),'texto.txt')
const fileOutPath = path.join(process.cwd(),'textoComLinhas.txt')


fs.readFile(filePath, {}, (erro,dados)=>{
    if (erro){
        console.log('erro na leitura');
        return;
    }
    
    const texto = dados.toString();
    const linhas = texto.split('\n');

    const linhasAjustadas = linhas.map((Linha, index, arrayDeLinhas) => `${index + 1} - ${Linha}`);

    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro)=> {
        if (erro){
            console.log("erro na escrita");
        }
        console.log(`arquivo salvo no bucket: ${process.env.BUCKET}`)
    })
})
