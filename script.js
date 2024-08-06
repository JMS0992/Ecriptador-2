const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// la letra "e" es convertida para "enter"
// la letra "i" es convertida para "imes"
// la letra "a" es convertida para "ai"
// la letra "0" es convertida para "ober"
// la letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}
function encriptar (stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado =stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
           stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
           
        }
    }
    return stringEncriptado
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}
function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado =stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
           stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}
document.querySelector('.copiar').addEventListener('click', function() {
    // Seleccionar el texto en el área de mensaje
    mensaje.select();
    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');
    mensaje.value = "";
});