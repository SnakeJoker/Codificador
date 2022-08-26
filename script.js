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
	} else if (comprovar == 1) {
		ocultarB = document.getElementById("copiar").style.display = "none";
	}
}

function btnEncriptar() {
	comprovar = 0;
	const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	mensaje.style.backgroundImage = "none";
	inputTexto.value = textoEncriptado;
}

function btnDesencriptar() {
	const textoDesencriptado = desencriptar(inputTexto.value);
	inputTexto.value = textoDesencriptado;
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
	comprovar = 1;
	mensaje.select();
	navigator.clipboard.writeText(mensaje.value);
	inputTexto.value = "";
	mensaje.value = "";
}

setInterval(ocultarBoton, 10);