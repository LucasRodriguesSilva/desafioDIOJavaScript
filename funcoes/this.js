function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: 'Vera',
  idade: 46
}

const pessoa2 = { 
  nome: 'Anizio',
  idade: 48
}

const pessoa3 = { 
  nome: 'Bruno',
  idade: 27
}

const pessoa4 = { 
  nome: 'Lucas',
  idade: 24
}

console.log(calculaIdade.call(pessoa1, 5));
console.log(calculaIdade.call(pessoa2, 5));
console.log(calculaIdade.apply(pessoa3, [5]));
console.log(calculaIdade.apply(pessoa4, [5]));
