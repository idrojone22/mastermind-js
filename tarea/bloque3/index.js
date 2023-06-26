const readline = require('readline');
const moment = require('moment');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Que edad tienes?: ', (answerAge) => {
    rl.question('¿Cual es tu nombre?: ', (answerName) => {
        if (answerAge < 18) {
            console.log('Hola ' + answerName + ', eres menor de edad, largo de aqui.');
        } else {
            console.log('Hola ' + answerName + ', pudes entrar, gracias por venir.')
        }
        console.log('Tienes ' + answerAge + ' años.');
        rl.close();
    });
});