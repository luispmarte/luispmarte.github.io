function changenick() {
var nombre;
nombre = prompt("Nuevo Usuario");
const usuario = document.getElementById("idusuario");
usuario.value = nombre;
}


function cambiarFondoDocumentonegro() {
let body = document.getElementsByTagName('body')[0];
let colorbtnuno = document.getElementsByClassName('btn_home')[0];
let colorbtndos = document.getElementsByClassName('btn_home_var2')[0];
let creditidiv = document.getElementById("creditidivi2");

}

function cambiarFondoDocumentoblanco() {
let body = document.getElementsByTagName('body')[0];
let colorbtnuno = document.getElementsByClassName('btn_home')[0];
let colorbtndos = document.getElementsByClassName('btn_home_var2')[0];
let creditidiv = document.getElementById("creditidivi2");

}

function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$imgPreview = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$imgPreview.src = objectURL;
                
}