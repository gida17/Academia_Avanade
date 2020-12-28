function botao(){
    //alert("Vc apertou o botão");
    document.getElementById("titulo").innerHTML = "TESTE";
    

}

function redimencionar(){
    //window.open("https://www.google.com/");//Outra janela

    window.location.href = "https://www.google.com/"; //Na mesma janela
}

function trocar(elemento){
    //document.getElementById("mouseMove").innerHTML = "<b>Vc passou o mouse</b>";
    elemento.innerHTML = "<b>Vc passou o mouse</b>";
}

function voltar(elemento){
    //document.getElementById("mouseMove").innerHTML = "<b>Vc passou o mouse</b>";
    elemento.innerHTML = "Passe o mouse";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}