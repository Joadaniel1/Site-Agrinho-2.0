// ========================================
// DADOS DOS CURSOS
// ========================================
const cursos = [
  {
    titulo: "HTML e CSS",
    descricao: "Aprenda a criar sites estruturados e estilizados com HTML e CSS.",
    imagem: "https://via.placeholder.com/300x200?text=HTML+CSS"
  },
  {
    titulo: "JavaScript Básico",
    descricao: "Introdução à programação dinâmica com JavaScript.",
    imagem: "https://via.placeholder.com/300x200?text=JS+Basico"
  },
  {
    titulo: "React Avançado",
    descricao: "Construa interfaces interativas com React e Hooks.",
    imagem: "https://via.placeholder.com/300x200?text=React+Avancado"
  },
  {
    titulo: "Node.js e APIs",
    descricao: "Aprenda a criar APIs RESTful usando Node.js e Express.",
    imagem: "https://via.placeholder.com/300x200?text=Node+API"
  }
];

// Renderizar cursos dinamicamente
const cursosContainer = document.querySelector(".cursos-grid");
cursos.forEach(curso => {
  const card = document.createElement("article");
  card.classList.add("curso-card");
  card.innerHTML = `
    <img src="${curso.imagem}" alt="${curso.titulo}">
    <h3>${curso.titulo}</h3>
    <p>${curso.descricao}</p>
  `;
  cursosContainer.appendChild(card);
});

// ========================================
// CARROSSEL DE GALERIA
// ========================================
const slides = [
  "https://via.placeholder.com/600x300?text=Projeto+1",
  "https://via.placeholder.com/600x300?text=Projeto+2",
  "https://via.placeholder.com/600x300?text=Projeto+3"
];

const track = document.querySelector(".carousel-track");
let currentIndex = 0;

// Criar slides dinamicamente
slides.forEach(src => {
  const slide = document.createElement("img");
  slide.src = src;
  slide.alt = "Projeto da galeria";
  track.appendChild(slide);
});

// Função para atualizar a posição do carrossel
function updateCarousel() {
  const slideWidth = track.querySelector("img").clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Botões do carrossel
document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// ========================================
// FAQ / ACORDEÃO
// ========================================
const faqs = [
  {
    pergunta: "Qual é a duração dos cursos?",
    resposta: "Cada curso tem duração média de 4 a 8 semanas, dependendo do nível."
  },
  {
    pergunta: "Preciso de experiência prévia?",
    resposta: "Não! Todos os cursos iniciam do básico ao avançado."
  },
  {
    pergunta: "Receberei certificado?",
    resposta: "Sim, ao concluir cada curso você recebe um certificado digital."
  }
];

const accordion = document.querySelector(".accordion");

faqs.forEach(faq => {
  const item = document.createElement("div");
  item.classList.add("accordion-item");

  const header = document.createElement("button");
  header.classList.add("accordion-header");
  header.textContent = faq.pergunta;
  header.setAttribute("aria-expanded", "false");

  const content = document.createElement("div");
  content.classList.add("accordion-content");
  content.innerHTML = `<p>${faq.resposta}</p>`;

  header.addEventListener("click", () => {
    const expanded = header.getAttribute("aria-expanded") === "true";
    header.setAttribute("aria-expanded", String(!expanded));
    content.style.maxHeight = !expanded ? content.scrollHeight + "px" : "0";
  });

  item.appendChild(header);
  item.appendChild(content);
  accordion.appendChild(item);
});

// ========================================
// CONTROLE DE FONTE
// ========================================
const body = document.body;
let currentFontSize = parseInt(getComputedStyle(body).fontSize);

document.getElementById("increase-font").addEventListener("click", () => {
  currentFontSize += 2;
  body.style.fontSize = currentFontSize + "px";
});

document.getElementById("decrease-font").addEventListener("click", () => {
  currentFontSize = Math.max(12, currentFontSize - 2);
  body.style.fontSize = currentFontSize + "px";
});

// ========================================
// MODO ALTO CONTRASTE
// ========================================
document.getElementById("toggle-contrast").addEventListener("click", () => {
  body.classList.toggle("high-contrast");
});

// ========================================
// SCROLL REVEAL SIMPLES
// ========================================
const sections = document.querySelectorAll("main section");

const revealSection = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealSection, {
  threshold: 0.1
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  observer.observe(section);
});
