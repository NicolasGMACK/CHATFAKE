const listaDeContatos = [
    {
        id: 1,
        nome: "Joaquim",
        ultimaMensagem: "Olá, vamos programar?",
        horario: "20:20",
        avatar: "./src/assets/images/jessica--drew.png",
        conversas: [
            {mensagem: "a", tipo:"enviada", horario: "20:00"},
            {mensagem: "b", tipo:"recebida", horario: "20:00"},
            {mensagem: "c", tipo:"recebida", horario: "20:00"}
        ]
    },
    {
        id: 2,
        nome: "Maria",
        ultimaMensagem: "sei la kkkkk",
        horario: "20:20",
        avatar: "./src/assets/images/greg--james.png",
        conversas: [
            {mensagem: "d", tipo:"recebida", horario: "20:00"},
            {mensagem: "e", tipo:"enviada", horario: "20:00"},
            {mensagem: "f", tipo:"recebida", horario: "20:00"}
        ]
    },
    {
        id: 3,
        nome: "Jose",
        ultimaMensagem: "OGosto de vc",
        horario: "20:20",
        avatar: "./src/assets/images/emily--dorson.png",
        conversas: [
            {mensagem: "g", tipo:"enviada", horario: "20:00"},
            {mensagem: "h", tipo:"enviada", horario: "20:00"},
            {mensagem: "i", tipo:"recebida", horario: "20:00"}
        ]
    },
    {
        id: 4,
        nome: "Nick",
        ultimaMensagem: "faz o L",
        horario: "20:20",
        avatar: "./src/assets/images/david--moore.png",
        conversas: [
            {mensagem: "j", tipo:"enviada", horario: "20:00"},
            {mensagem: "k", tipo:"enviada", horario: "20:00"},
            {mensagem: "l", tipo:"recebida", horario: "20:00"}
        ]
    }
]

document.addEventListener("DOMContentLoaded", () => {
    console.log("Minha página carregou");

    const inputMsg = document.querySelector('#inputMensagem');
    

    inputMsg.placeholder = "Digite a sua mensagem!"

    const buttons = document.querySelectorAll(".cursor--pointer");
    

    const buttonSend = document.querySelector(".cursor--pointer[src*='send']")
    

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

    function renderizarMsg(tipo, mensagem, horario) {
            const divMensagem = document.createElement("div");
            const direcao = tipo === "enviada" ? "end" : "start";
            const stylesDiv = tipo === "enviada" ? "you" : "other";

            divMensagem.classList.add("flex",
                 "flex--direction--row", "width--100",
                  `justify--content--${direcao}`,
                "fade-in");

            divMensagem.innerHTML = `
            <div class="flex flex--direction--column message ${stylesDiv}">
                    <div class="flex--6">
                        ${mensagem}
                    </div>


                    <div class="flex--1 flex flex--direction--row justify--content--end align--items--center font--size--12 infos--message">
                        <img src="./src/assets/icons/heart.svg" />
                        <div>${horario}</div>
                        <img src="./src/assets/icons/viewed.svg" />

                    </div>
                    
                </div>
                                
            `
            return divMensagem;
        }
    
    function carregarMensagemContato(index) {
        const contato = listaDeContatos[index];
        listaMensagens.innerHTML = "";

        contato.conversas.forEach((conversa) => {
            const mensagemRenderizada = renderizarMsg(
                conversa.tipo,
                conversa.mensagem,
                conversa.horario
            );
            listaMensagens.appendChild(mensagemRenderizada);
        })
    }

    function enviarMensagem() {
        const texto = inputMsg.value.trim();
        if(texto === ""){
            alert("Ainda não possui msg.");
        } else{ 
        const mensagemRenderizada = renderizarMsg("enviada", texto, "21:00");
        listaMensagens.appendChild(mensagemRenderizada);
        inputMsg.value = "";

        //setTimeout -> Executa algo uma única vez, após um intervalo de tempo
        //setInterval -> Executa algo em um intervalo de tempo
        setTimeout(responderMsg, 2000);
    }
    }

    function responderMsg() {
        const posicao = Math.floor(Math.random() * respostasParaOBot.length);
        const msgDoBOT = respostasParaOBot[posicao];
        const mensagemRenderizada = renderizarMsg("recebida", msgDoBOT, "21:00");
        listaMensagens.appendChild(mensagemRenderizada);
    }    

    buttonSend.addEventListener("click", () => {
        enviarMensagem();
        
    });

 inputMsg.addEventListener("keypress", (event)=> {
    if (event.key === "Enter") {
            enviarMensagem();
        }
        });      


function carregarContatos() {
    const divContatosElement = document.querySelector(".div--contacts");

    
    listaDeContatos.forEach((contato, index) => {
        
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
        
        divParentElement.addEventListener("click", () => {
            carregarMensagemContato(index);
        });

        divContatosElement.appendChild(divParentElement);
    });

   
}

setTimeout(() => {
 carregarContatos();
}, 2500);



});