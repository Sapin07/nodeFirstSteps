const rl = require('readline');

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question((pergunta), (resposta) => resolve(resposta))
        } catch (error){
            reject(error)
        }
    }),
    close: prompt.close
}

async function askUser(){
    const numero = await promptPromise.question('Qual seu numero favorito? ');
    console.log(`O dobro do seu numero favorito e: ${parseInt(numero)*2}`);

    const cor = await promptPromise.question('Qual sua cor favorita? ');
    console.log(`sua cor favorita e: ${cor}`);
    promptPromise.close();
}

askUser()
