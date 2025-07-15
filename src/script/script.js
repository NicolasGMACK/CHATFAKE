document.addEventListener("DOMContentLoaded", () => {
    console.log("Minha página carregou");

    const inputMsg = document.querySelector('#inputMensagem');
    console.log(inputMsg);

    inputMsg.placeholder = "Digite a sua mensagem!"

    const buttons = document.querySelectorAll(".cursor--pointer");
    console.log(buttons);

    const buttonSend = document.querySelector(".cursor--pointer[src*='send']")
    console.log(buttonSend);

    const listaMensagens = document.querySelector(".div--messages");
    console.log(listaMensagens);
    //buttonSend.classList.add("minha-classe-modulo-um");

    function enviarAlerta(tipo) {
        const texto = inputMsg.value.trim();
        if(texto === ""){
            alert("Ainda não possui msg.");
        } else{ 
        adicionarMensagem(tipo, texto);
        }
    }
    
    function adicionarMensagem(tipoMensagem, texto){
        const mensagemElement = document.createElement("div");
        mensagemElement.classList.add("message");

        if (tipoMensagem === "enviada") {
            mensagemElement.classList.add('you');
        } else {
            mensagemElement.classList.add("other");
        }

        mensagemElement.innerText = texto;

        listaMensagens.appendChild(mensagemElement);
    }

    buttonSend.addEventListener("click", () => {
        enviarAlerta("recebida");
        
    });

 inputMsg.addEventListener("keypress", (event)=> {
    if (event.key === "Enter") {
            enviarAlerta("enviada");
        }
        })






})