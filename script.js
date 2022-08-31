

function encriptar() {
    var texto = document.getElementById("inputTexto").value.tolowerCase();


    var txtCifrado = texto.replace (/e/igm, "enter");
    var txtCifrado = texto.replace (/o/igm, "ober");
    var txtCifrado = texto.replace (/i/igm, "ines");
    var txtCifrado = texto.replace (/a/igm, "ai");
    var txtCifrado = texto.replace (/u/igm, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementsById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


function desencriptar() {
    var texto = document.getElementById("inputTexto").value.tolowerCase();


    var txtCifrado = texto.replace (/enter/igm, "e");
    var txtCifrado = texto.replace (/ober/igm, "o");
    var txtCifrado = texto.replace (/ines/igm, "i");
    var txtCifrado = texto.replace (/ai/igm, "a");
    var txtCifrado = texto.replace (/ufat/igm, "u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementsById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.Select();
    document.execCommand("copy");
    alert ("¡Se copió!")
}