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

    const respostasParaOBot = [
        "Olá, tudo bem?",
        "Como você está?",
        "Qual o seu nome?",
        "Meu nome é O Novo BOT",
        "Faço curso da ONP",
        "Quer conversar cmg?"
    ];

    function enviarMensagem() {
        const texto = inputMsg.value.trim();
        if(texto === ""){
            alert("Ainda não possui msg.");
        } else{ 
        adicionarMensagem("enviada", texto);
        inputMsg.value = "";

        //setTimeout -> Executa algo uma única vez, após um intervalo de tempo
        //setInterval -> Executa algo em um intervalo de tempo
        setTimeout(respoderMsg, 2000);
    }
    }

    function respoderMsg() {
        const posicao = Math.floor(Math.random() * respostasParaOBot.length);
        const msgDoBOT = respostasParaOBot[posicao];
        adicionarMensagem("recebida", msgDoBOT);
    }
    
    function adicionarMensagem(tipoMensagem, texto){


        const mensagemElement = document.createElement("div");
        mensagemElement.classList.add("message", "fade-in");

        if (tipoMensagem === "enviada") {
            mensagemElement.classList.add('you');
        } else {
            mensagemElement.classList.add("other");
        }

        mensagemElement.innerText = texto;

        listaMensagens.appendChild(mensagemElement);
        
        setTimeout(() => {
            mensagemElement.classList.remove("fade-in");
        }, 500);
    }

    buttonSend.addEventListener("click", () => {
        enviarMensagem();
        
    });

 inputMsg.addEventListener("keypress", (event)=> {
    if (event.key === "Enter") {
            enviarMensagem();
        }
        })






})