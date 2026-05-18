
const perguntas = [

  {

    pergunta:
    "Qual prática ajuda o meio ambiente?",

    respostas: [

      "Desmatamento",

      "Queimadas",

      "Uso consciente da água",

      "Poluição"

    ],

    correta: 2

  },

  {

    pergunta:
    "Qual energia é sustentável?",

    respostas: [

      "Carvão",

      "Solar",

      "Petróleo",

      "Diesel"

    ],

    correta: 1

  },

  {

    pergunta:
    "O que ajuda o agro sustentável?",

    respostas: [

      "Desperdício",

      "Poluição",

      "Tecnologia",

      "Queimadas"

    ],

    correta: 2

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
