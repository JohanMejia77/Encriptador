function encriptar(){
    var texto = document.querySelector(".text").value.toLowerCase();
    var txtCifrado = texto.replace(/e/mg, "enter");
    txtCifrado = txtCifrado.replace(/o/mg, "ober");
    txtCifrado = txtCifrado.replace(/i/mg, "imes");
    txtCifrado = txtCifrado.replace(/a/mg, "ai");
    txtCifrado = txtCifrado.replace(/u/mg, "ufat");

    document.querySelector(".nothing_message").style.display = "none";
    document.querySelector(".enter_text").style.display = "none";
    document.querySelector(".no_text").style.backgroundImage = "none";
    document.querySelector(".no_text").style.padding = "10px 15px";

    document.querySelector(".answer").style.display = "block";
    document.querySelector(".message").innerHTML = txtCifrado;

}
function desencriptar(){
    var texto = document.querySelector(".text").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/mg, "e");
    txtCifrado = txtCifrado.replace(/ober/mg, "o");
    txtCifrado = txtCifrado.replace(/imes/mg, "i");
    txtCifrado = txtCifrado.replace(/ai/mg, "a");
    txtCifrado = txtCifrado.replace(/ufat/mg, "u");

    document.querySelector(".nothing_message").style.display = "none";
    document.querySelector(".enter_text").style.display = "none";
    document.querySelector(".no_text").style.backgroundImage = "none";
    document.querySelector(".no_text").style.padding = "10px 15px";

    document.querySelector(".answer").style.display = "block";
    document.querySelector(".message").innerHTML = txtCifrado;
}
function copiar(){
    var textarea = document.querySelector(".message");
    textarea.select();
    document.execCommand("copy");
    

    document.querySelector(".nothing_message").style.display = "block";
    document.querySelector(".enter_text").style.display = "block";
    document.querySelector(".no_text").style.backgroundImage = "url(image.png)";
    document.querySelector(".no_text").style.padding = "85px 15px";

    document.querySelector(".answer").style.display = "none"; 
}
