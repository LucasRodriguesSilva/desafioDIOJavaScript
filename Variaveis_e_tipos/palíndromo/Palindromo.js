function verificarPalindromo (string) {
    if (!string) return "string não existe";

    let invertido = string.split("").reverse().join("");

    if (string === invertido) {
        console.log("Uau a palavra \"" + string + "\" é um palíndromo!!!");
    }  else {
        console.log("a palavra \"" + string + "\" não é um palíndromo!!!")
    }
}

verificarPalindromo("kaiak");
