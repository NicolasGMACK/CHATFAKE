document.addEventListener("DOMContentLoaded", () => {
    console.log("Minha página carregou");

    const inputMsg = document.querySelector('#inputMensagem');
    console.log(inputMsg);

    inputMsg.placeholder = "Digite a sua mensagem!"

    const buttons = document.querySelectorAll(".cursor--pointer");
    console.log(buttons);

    const buttonSend = document.querySelector(".cursor--pointer[src*='send']")
    console.log(buttonSend);

    //buttonSend.classList.add("minha-classe-modulo-um");

    function enviarAlerta() {
        const texto = inputMsg.value.trim();
        if(texto === ""){
            alert("Ainda não possui msg.");
        } else{        
        alert(texto);
        }
    }

    buttonSend.addEventListener("click", () => {
        enviarAlerta();
    });

 inputMsg.addEventListener("keypress", (event)=> {
    if (event.key === "Enter") {
            enviarAlerta();
        }
        })






})