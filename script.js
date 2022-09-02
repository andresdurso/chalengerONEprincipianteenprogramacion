const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value=textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    btnCopy.style.display = "block"

}

function encriptar(stringEncriptada) {
let matrizCodigo =[["e", "enter"],["i", "ines"],["a", "ai"], ["o", "ober"],["u","ufat"]];
stringEncriptada=stringEncriptada.toLowerCase();

for(let i=0; i <matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][o])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][o], matrizCodigo [i][1])
        }
    }
    
}
return stringEncriptada;

function copiar() {
    mensaje.select();
    Navigator.clipboar.writeText(mensaje.value)
    mensaje.value="";
    alert("Texto Copiado")
}