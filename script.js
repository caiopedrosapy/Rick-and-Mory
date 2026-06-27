const imagem = document.getElementById("imagem");
const nome = document.getElementById("nome");
const especie = document.getElementById("especie");
const status = document.getElementById("status");
const genero = document.getElementById("genero");
const origem = document.getElementById("origem");
const botao = document.getElementById("botao");

async function buscarPersonagem() {
  const id = Math.floor(Math.random() * 826) + 1;

  try {
    const resposta = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    if (!resposta.ok) {
      throw new Error("Erro ao buscar personagem.");
    }

    const personagem = await resposta.json();

    imagem.src = personagem.image;
    imagem.alt = personagem.name;

    nome.textContent = personagem.name;
    especie.textContent = personagem.species;
    status.textContent = personagem.status;
    genero.textContent = personagem.gender;
    origem.textContent = personagem.origin.name;

  } catch (erro) {

    nome.textContent = "Erro ao carregar";
    especie.textContent = "-";
    status.textContent = "-";
    genero.textContent = "-";
    origem.textContent = "-";

    console.error(erro);
  }
}

botao.addEventListener("click", buscarPersonagem);
buscarPersonagem();
