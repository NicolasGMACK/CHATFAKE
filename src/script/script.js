const listaDeContatos = [
    {
        id: 1,
        nome: "Joaquim",
        ultimaMensagem: "Olá, vamos programar?",
        horario: "20:20",
        avatar: "./src/assets/images/jessica--drew.png",
        conversas: [
            {mensagem: "a", tipo:"recebida", horario: "20:00"},
            {mensagem: "a", tipo:"recebida", horario: "20:00"},
            {mensagem: "a", tipo:"recebida", horario: "20:00"}
        ]
    },
    {
        id: 2,
        nome: "Maria",
        ultimaMensagem: "sei la kkkkk",
        horario: "20:20",
        avatar: "./src/assets/images/greg--james.png",
        conversas: [
            {mensagem: "a", tipo:"recebida", horario: "20:00"},
            {mensagem: "a", tipo:"recebida", horario: "20:00"},
            {mensagem: "a", tipo:"recebida", horario: "20:00"}
        ]
    },
    {
        id: 3,
        nome: "Jose",
        ultimaMensagem: "OGosto de vc",
        horario: "20:20",
        avatar: "./src/assets/images/emily--dorson.png",
        conversas: [
            {mensagem: "a", tipo:"recebida", horario: "20:00"},
            {mensagem: "a", tipo:"recebida", horario: "20:00"},
            {mensagem: "a", tipo:"recebida", horario: "20:00"}
        ]
    },
    {
        id: 4,
        nome: "Nick",
        ultimaMensagem: "faz o L",
        horario: "20:20",
        avatar: "./src/assets/images/david--moore.png",
        conversas: [
            {mensagem: "a", tipo:"recebida", horario: "20:00"},
            {mensagem: "a", tipo:"recebida", horario: "20:00"},
            {mensagem: "a", tipo:"recebida", horario: "20:00"}
        ]
    }
]

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


function carregarContatos() {
    const divContatosElement = document.querySelector(".div--contacts");

    
    listaDeContatos.forEach((contato) => {
        console.log(contato);
        //inner text e o inner html

        const divParentElement = document.createElement("div");
        divParentElement.classList.add("flex", "area--contact", "fade-in");
    
        divParentElement.innerHTML = 
        `       
            <div class="flex justify--content--center align--items--center flex--1">
                <img class="avatar--left--bar" src="${contato.avatar}" />
            </div>

            <div class="flex flex--direction--column justify--content--center flex--3">
                <div class="flex align--items--center infos--contact">
                    <div class="font--family font--weight--bold">${contato.nome}</div>
                    <img src="./src/assets/icons/verified.svg" />
                </div>

                <div class="last--message">${contato.ultimaMensagem}</div>
                
            </div>

            <div class="flex flex--direction--column justify--content--center align--items--end flex--1 div--last--messages--info">
                <div class="hour--last--message">${contato.horario}</div>
                <div class="flex justify--content--center align--items--center quantity--not--viewed--messages background--green">1</div>
            </div>
        `;        
        
        divContatosElement.appendChild(divParentElement);
    });

   
}

setTimeout(() => {
 carregarContatos();
}, 2500);



});