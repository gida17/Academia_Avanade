function botao(){
    //alert("Vc apertou o botão");
    document.getElementById("titulo").innerHTML = "TESTE";
    

}

function redimencionar(){
    //window.open("https://www.google.com/");//Outra janela

    window.location.href = "https://www.google.com/"; //Na mesma janela
}

function trocar(){
    document.getElementById("mouseMove").innerHTML = "<b>Vc passou o mouse</b>";
}

function voltar(){
    document.getElementById("mouseMove").innerHTML = "Passe o mouse";
}