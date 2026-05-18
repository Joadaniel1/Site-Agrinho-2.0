
const perguntas = [

{

pergunta:
"Qual prática ajuda o meio ambiente?",

respostas: [

"Queimadas",

"Uso consciente da água",

"Poluição",

"Desmatamento"

],

correta: 1

},

{

pergunta:
"Qual energia é sustentável?",

respostas: [

"Solar",

"Petróleo",

"Carvão",

"Diesel"

],

correta: 0

}

];

let atual = 0;
let pontos = 0;

const pergunta =
document.getElementById("pergunta");

const respostas =
document.getElementById("respostas");

const pontuacao =
document.getElementById("pontuacao");

function carregarPergunta(){

respostas.innerHTML = "";

pergunta.innerHTML =
perguntas[atual].pergunta;

perguntas[atual].respostas.forEach(
(resp, index) => {

const btn =
document.createElement("button");

btn.innerHTML = resp;

btn.classList.add("quiz-btn");

btn.onclick = () => verificar(index);

respostas.appendChild(btn);

}

);

}

function verificar(index){

if(index === perguntas[atual].correta){

pontos++;

}

atual++;

if(atual < perguntas.length){

carregarPergunta();

} else {

pergunta.innerHTML =
"🎉 Quiz finalizado!";

respostas.innerHTML = "";

pontuacao.innerHTML =
"Você fez " + pontos + " pontos!";

}

}

carregarPergunta();
