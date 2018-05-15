/*

Crear una función padding-left que se encarga de meter caracteres de relleno en un cadena por el lado izquierdo hasta llegar a un tamaño deseado. Toma 3 parámetros:
	- La cadena inicial
	- Un tamaño final
	- Un valor del padding, por defecto es un espacio
Ejemplo: padding-left('hola', 6, 'x') devuelve 'xxhola'
Si el tamaño final es menor o igual que la cadena inicial, se devuelve sin tocar la inicial.

*/

function paddingLeft(string, finalSize, defaultValuePadding) {
	let finalString = '';
	if (string.length < finalSize){
		let paddingCharacters = finalSize - string.length;
		for (var i = 0; i < paddingCharacters; i++) {
			finalString += " ";
		}
		finalString += string;
	}
	if (string.length >= finalSize){
		finalString = string;
	}
	return finalString;
}
module.exports = paddingLeft;
