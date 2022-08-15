// Capturar evento de submit do formulário
const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const inputPeso = e.target.querySelector("#peso"); // pega o valor do peso no input
	const inputAltura = e.target.querySelector("#altura"); // pega o valor da altura no input

	const peso = Number(inputPeso.value); // converte o valor do peso para número
	const altura = Number(inputAltura.value); // converte o valor da altura para número

	if (!peso) {
		// se o peso não for válido
		setResultado("Peso inválido", false);
		return;
	}

	if (!altura) {
		// se a altura não for válida
		setResultado("Altura inválida", false);
		return;
	}

	const imc = getImc(peso, altura); // calcula o imc
	const nivelImc = getNivelImc(imc); // calcula o nível do imc

	const msg = `Seu IMC é ${imc} (${nivelImc}).`; // cria a mensagem de resultado

	setResultado(msg, true); // seta o resultado na tela
});

// função que retorna o nível do imc

function getNivelImc(imc) {
	const nivel = [
		// array com os níveis do imc
		"Abaixo do peso",
		"Peso normal",
		"Sobrepeso",
		"Obesidade grau 1",
		"Obesidade grau 2",
		"Obesidade grau 3",
	];

	if (imc >= 39.9) return nivel[5]; // se o imc for maior ou igual a 39.9, retorna o nível 5
	if (imc >= 34.9) return nivel[4]; // se o imc for maior ou igual a 34.9, retorna o nível 4
	if (imc >= 29.9) return nivel[3]; // se o imc for maior ou igual a 29.9, retorna o nível 3
	if (imc >= 24.9) return nivel[2]; // se o imc for maior ou igual a 24.9, retorna o nível 2
	if (imc >= 18.5) return nivel[1]; // se o imc for maior ou igual a 18.5, retorna o nível 1
	if (imc < 18.5) return nivel[0]; // se o imc for menor que 18.5, retorna o nível 0
}

// função que calcula o imc e retorna o resultado

function getImc(peso, altura) {
	const imc = peso / altura ** 2;
	return imc.toFixed(2);
}

function criaP() {
	// função que cria um parágrafo
	const p = document.createElement("p");
	return p;
}

function setResultado(msg, isValid) {
	// função que seta o resultado na tela
	const resultado = document.querySelector("#resultado");
	resultado.innerHTML = ""; // limpa o resultado

	const p = criaP();

	if (isValid) {
		// se o resultado for válido
		p.classList.add("paragrafo-resultado");
	} else {
		// se o resultado não for válido
		p.classList.add("bad");
	}

	p.innerHTML = msg; // seta a mensagem no parágrafo
	resultado.appendChild(p); // adiciona o parágrafo ao resultado
}
