// script.js

// LOADER

window.addEventListener("load", () => {

  document.querySelector(".loader")
  .classList.add("hide");

});

// MENSAGEM

function mostrarMensagem(){

  const msg = document.getElementById("mensagem");

  msg.innerHTML =
  "🌱 A agricultura sustentável ajuda a preservar o meio ambiente e garante alimentos para as futuras gerações.";

}

// MODO ESCURO

const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    modoBtn.innerHTML = "☀️ Modo Claro";

  }else{

    modoBtn.innerHTML = "🌙 Modo Escuro";

  }

});

// REVEAL

function revelar(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const janela = window.innerHeight;
    const topo = element.getBoundingClientRect().top;

    if(topo < janela - 100){

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revelar);

revelar();

// CONTADORES

function animarContador(id, maximo){

  let numero = 0;

  const contador = document.getElementById(id);

  const intervalo = setInterval(() => {

    numero += Math.ceil(maximo / 100);

    if(numero >= maximo){

      numero = maximo;

      clearInterval(intervalo);
    }

    contador.innerHTML = numero.toLocaleString();

  }, 30);

}

animarContador("contador1", 5000);
animarContador("contador2", 12000);
animarContador("contador3", 350);

// ADICIONE ISSO NO FINAL DO script.js

// MODAL

const modal = document.getElementById("modal");

const modalTitulo =
document.getElementById("modalTitulo");

const modalTexto =
document.getElementById("modalTexto");

const modalFonte =
document.getElementById("modalFonte");

function abrirModal(titulo, texto, fonte){

  modal.classList.add("active");

  modalTitulo.innerHTML = titulo;

  modalTexto.innerHTML = texto;

  modalFonte.innerHTML = fonte;

}

function fecharModal(){

  modal.classList.remove("active");

}

// FECHAR AO CLICAR FORA

window.addEventListener("click", (e) => {

  if(e.target === modal){

    fecharModal();

  }

});
