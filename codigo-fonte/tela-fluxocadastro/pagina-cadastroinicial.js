// Seleciona os elementos do HTML
const cardOng = document.querySelector(".roxo");
const cardVoluntario = document.querySelector(".verde");
const botaoContinuar = document.querySelector(".continuar");
const botaoCancelar = document.querySelector(".cancelar");

let perfilSelecionado = "";

// Função para limpar seleção dos cards
function limparSelecao() {
  cardOng.classList.remove("selecionado");
  cardVoluntario.classList.remove("selecionado");
}

// Clique no card ONG
cardOng.addEventListener("click", function (event) {
  event.preventDefault();

  limparSelecao();

  cardOng.classList.add("selecionado");
  perfilSelecionado = "ONG";

  console.log("Perfil selecionado:", perfilSelecionado);
});

// Clique no card Voluntário
cardVoluntario.addEventListener("click", function (event) {
  event.preventDefault();

  limparSelecao();

  cardVoluntario.classList.add("selecionado");
  perfilSelecionado = "Voluntário";

  console.log("Perfil selecionado:", perfilSelecionado);
});

// Clique no botão Continuar
botaoContinuar.addEventListener("click", function () {

  if (perfilSelecionado === "") {
    alert("Selecione um perfil antes de continuar.");
    return;
  }

  // Se escolheu ONG
  if (perfilSelecionado === "ONG") {
    window.location.href = "cadastro-ong.html";
  }

  // Se escolheu Voluntário
  if (perfilSelecionado === "Voluntário") {
    window.location.href = "cadastro-voluntario.html";
  }

});

// Clique no botão Cancelar
botaoCancelar.addEventListener("click", function () {

  const confirmar = confirm("Deseja cancelar o cadastro?");

  if (confirmar) {
    window.location.reload();
  }
});
