
const gameArea =
document.getElementById("gameArea");

const pontosText =
document.getElementById("pontos");

const tempoText =
document.getElementById("tempo");

let pontos = 0;
let tempo = 30;
let jogoRodando = false;

function iniciarJogo(){

  if(jogoRodando) return;

  jogoRodando = true;

  pontos = 0;
  tempo = 30;

  pontosText.innerHTML = pontos;
  tempoText.innerHTML = tempo;

  const timer = setInterval(() => {

    tempo--;

    tempoText.innerHTML = tempo;

    if(tempo <= 0){

      clearInterval(timer);

      jogoRodando = false;

      alert(
        "🎉 Fim de jogo! Você fez " +
        pontos +
        " pontos!"
      );

    }

  }, 1000);

  criarItem();

}

function criarItem(){

  if(!jogoRodando) return;

  const item =
  document.createElement("div");

  const bom =
  Math.random() > 0.3;

  item.classList.add("item");

  item.innerHTML =
  bom ? "🌳" : "🗑️";

  item.style.left =
  Math.random() * 90 + "%";

  item.style.top =
  Math.random() * 80 + "%";

  item.onclick = () => {

    if(bom){

      pontos++;

    } else {

      pontos--;

    }

    pontosText.innerHTML = pontos;

    item.remove();

  };

  gameArea.appendChild(item);

  setTimeout(() => {

    item.remove();

  }, 2000);

  setTimeout(criarItem, 800);

}
