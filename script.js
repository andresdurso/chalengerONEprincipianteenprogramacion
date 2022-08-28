

function encriptar() {
    var texto = document.getElementById("inputTexto").value.tolowerCase();


    var txtCifrado = texto.replace (/e/ign, "enter");
    var txtCifrado = texto.replace (/o/ign, "ober");
    var txtCifrado = texto.replace (/i/ign, "ines");
    var txtCifrado = texto.replace (/a/ign, "ai");
    var txtCifrado = texto.replace (/u/ign, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementsById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


function desencriptar() {
    var texto = document.getElementById("inputTexto").value.tolowerCase();


    var txtCifrado = texto.replace (/enter/ign, "e");
    var txtCifrado = texto.replace (/ober/ign, "o");
    var txtCifrado = texto.replace (/ines/ign, "i");
    var txtCifrado = texto.replace (/ai/ign, "a");
    var txtCifrado = texto.replace (/ufat/ign, "u");

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