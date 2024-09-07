const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com um novo vírus, e você com base em séries e filmes tem uma certa experiência, sim, experiência com zumbis.",
        alternativas: [
            {
                texto: "Isso é preocupante...",
                afirmacao: "No início ficou com medo do que esse vírus pode fazer. "
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Estava empolgado pois cada vez que assistiu ou ouviu uma história sobre zumbis, você já se imaginou em um mundo cheio deles."
            }
        ]
    },
    {
        enunciado: "você se reúne com outras pessoas, umas bem experiêntes na ocasião, outras nem tanto. Assim como nos filmes, séries, história que você via, precisa ter uma pessoa para ser o líder, que atitude você toma?",
        alternativas: [
            {
                texto: "você se disponibiliza ser o líder, alegando ser experiênte e perito em sobrevivencia.",
                afirmacao: "Você foi chamado para ser líder!"
            },
            {
                texto: "Você vota em outra pessoa para ser líder, e avisa que sua vida e a de seus companheiros, estarão nas mãos do líder",
                afirmacao: "Outra pessoa foi escolhida líder, mas você não ficou seguro com isso."
            }
        ]
    },
    {
        enunciado: "Após a escolha do novo líder, foi orientado por ele vocês se separarem para procurar um abrigo, ir atrás de comida e procurar armamentos, como você se posiciona? ",
        alternativas: [
            {
                texto: "você ajuda o grupo.",
                afirmacao: "Zumbis acabam aparecendo no seu caminho."
            },
            {
                texto: "você não ajuda seu grupo.",
                afirmacao: "Uma pessoa de seu grupo volta correndo avizando que o resto foi incurralado por zumbis."
            }
        ]
    },
    {
        enunciado: "Como você enfrenta os zumbis? Sozinho? Em grupo? o que vai fazer?",
        alternativas: [
            {
                texto: "Cria um plano com seu grupo, acabando com os zumbis sem nenhuma baixa em seu grupo",
                afirmacao: "Você volta para casa em segurança depois da luta bem sucedida com os zumbis."
            },   
            {
                texto: "Corre para alcançar seu grupo, se angustiando por não ter ido junto.",
                afirmacao: "Você não chega a tempo e então uma pessoa do seu grupo é mordida e se transforma, então sobra pra você tomar atitude e matar o zumbi, que um dia foi seu amigo..."
            }
        ]
    },
    {
        enunciado: "anos se passaram e essa imagem ainda perturba sua mente, você está pensando seriamente em ir embora, se afastar do grupo, com medo de que a mesma coisa aconteça, e que você tenha que tomar a mesma atitude.",
        alternativas: [
            {
                texto: "você decide ir embora sem dar satisfação, sem avisar nimguém, apenas desaparece de tudo, e da vida de todos",
                afirmacao: "nesse tempo andando, tantos dias, tantos quilômetros, você encontra um refúgio de todas as pessoas que sobreviveram,então você pode viver em paz. Mas antes de viver em paz você voltou e resgatou seus outros companheiros, companheiros o qual você se arrependeu de ter deixado-os para trás."
            },
            {
                texto: "Você vai embora, e se despede de todos seus amigos.",
                afirmacao: "Você encontrou salvaçâo, parabéns, porém está sozinho..."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2007...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
