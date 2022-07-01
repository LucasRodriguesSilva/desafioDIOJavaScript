var calc = function(operacao, a, b) {
	return operacao(a, b);
}

var soma = function(a, b) {
	return a + b;
}

var subtrair = function(a, b) { 
  return a - b;
}

console.log(calc(subtrair, 2, 3));

// desestruturação

let pessoa = {
  nome: "Lucas",
  idade: 24,
  caracteristicas: {
    corCabelo: "Cabelo Preto",
    corOlhos: "olhos preto Claro"
  }
}

function idade({idade}) {
  return idade;
}

console.log(idade(pessoa));

function corCabelo({caracteristicas: {corCabelo: corCabelo}}) {
  console.log(corCabelo);
}

corCabelo(pessoa);