function arrayParFicaComZero(numero) {

    for (var i = 0; i < numero.length; i++) {

        let imparOuPar = numero[i]%2;
        
        if (imparOuPar === 0) {
            console.log(`O número (${numero[i]}) vai ser 0`);
            numero[i] = 0;
        }
    }

    console.log("");

}

function verArray(nomeArray) {
    
    if (nomeArray.length !== 0) {
        for (let j = 0; j < nomeArray.length; j++) {
            console.log(nomeArray[j]);
        }
    } else {
        console.log("Este array é vazio então o número é -1");
    }

    console.log("");

}

let array = [1,3,4,6,80,33,23,90];

verArray(array);
arrayParFicaComZero(array);
verArray(array);

let arrayVazio = [];

arrayParFicaComZero(arrayVazio);
verArray(arrayVazio);