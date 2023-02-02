function encriptar(){
    var texto = document.querySelector(".text").value.toLowerCase();
    var txtCifrado = texto.replace(/e/mg, "enter");
    var txtCifrado = txtCifrado.replace(/o/mg, "ober");
    var txtCifrado = txtCifrado.replace(/i/mg, "imes");
    var txtCifrado = txtCifrado.replace(/a/mg, "ai");
    var txtCifrado = txtCifrado.replace(/u/mg, "ufat");

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
    var txtCifrado = txtCifrado.replace(/ober/mg, "o");
    var txtCifrado = txtCifrado.replace(/imes/mg, "i");
    var txtCifrado = txtCifrado.replace(/ai/mg, "a");
    var txtCifrado = txtCifrado.replace(/ufat/mg, "u");

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
    document.querySelector(".no_text").style.backgroundImage = "url(/Muñeco.png)";
    document.querySelector(".no_text").style.padding = "85px 15px";

    document.querySelector(".answer").style.display = "none"; 
}