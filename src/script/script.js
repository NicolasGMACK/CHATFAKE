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
        const mensagemBloco = document.createElement("div");
        mensagemBloco.classList.add("flex");
        mensagemBloco.classList.add("flex--direction--row");
        mensagemBloco.classList.add("width--100");


        const mensagemElement = document.createElement("div");
        mensagemElement.classList.add("flex");
        mensagemElement.classList.add("flex--direction--column");
        mensagemElement.classList.add("message");

        if (tipoMensagem === "enviada") {
            mensagemBloco.classList.add('justify--content--end');
            mensagemElement.classList.add('you');
        } else {
            mensagemBloco.classList.add('justify--content--start');
            mensagemElement.classList.add("other");
        }

        mensagemElement.innerText = texto;
        
        mensagemBloco.appendChild(mensagemElement);

        listaMensagens.appendChild(mensagemBloco);
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