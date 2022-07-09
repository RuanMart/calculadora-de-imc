function formulario() {
	const form = document.querySelector(".form");
	const resultado = document.querySelector(".resultado");
	let pessoas = [];

	function recebeEventoForm(evento) {
		evento.preventDefault();

		const nome = form.querySelector(".nome");
		const sobrenome = form.querySelector(".sobrenome");
		const peso = form.querySelector(".altura");
		const altura = form.querySelector(".peso");

		pessoas.push({
			nome: nome.value,
			sobrenome: sobrenome.value,
			peso: peso.value,
			altura: altura.value,
		});

		console.log(pessoas);

		resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} pesa ${altura.value} Kg e tem 
		${peso.value} de altura</p>`;
	}

	form.addEventListener("submit", recebeEventoForm);
}
formulario();
