const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

var ocultarB = (document.getElementById("copiar").style.display = "none");
comprovar = 1;

//`la letra "e" es convertida para "enter"`
//`la letra "i" es convertida para "imes"`
//`la letra "a" es convertida para "ai"`
//`la letra "o" es convertida para "ober"`
//`la letra "u" es convertida para "ufat"`

function ocultarBoton() {
	if (comprovar == 0) {
		ocultarB = document.getElementById("copiar").style.display = "block";
	} else {
		ocultarB = document.getElementById("copiar").style.display = "none";
	}
}

function btnEncriptar() {
	comprovar = 0;
	const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	mensaje.style.backgroundImage = "none";
	inputTexto.value = "";
}

function btnDesencriptar() {
	comprovar = 0;
	const textoDesencriptado = desencriptar(inputTexto.value);
	mensaje.style.backgroundImage = "none";
	mensaje.value = textoDesencriptado;
	inputTexto.value = "";
}

function encriptar(stringEncriptada) {
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	stringEncriptada = stringEncriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(
				matrizCodigo[i][0],
				matrizCodigo[i][1]
			);
		}
	}
	return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(
				matrizCodigo[i][1],
				matrizCodigo[i][0]
			);
		}
	}
	return stringDesencriptada;
}

function copiar() {
	const mensaje1 = mensaje.value;
	navigator.clipboard.writeText(mensaje1);
	inputTexto.value = "";
	mensaje.value = "";
}

setInterval(ocultarBoton, 10);
