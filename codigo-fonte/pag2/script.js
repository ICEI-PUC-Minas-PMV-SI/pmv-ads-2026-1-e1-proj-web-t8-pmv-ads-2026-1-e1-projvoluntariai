document.addEventListener("DOMContentLoaded", () => {

    console.log("JS carregado");

    const form = document.getElementById("formEtapa2");
    const dataInicio = document.getElementById("data");
    const dataFim = document.getElementById("data2");
    const hora = document.getElementById("hora");
    const btnCancelar = document.getElementById("btnCancelar");

    const mensagem = document.createElement("p");
    mensagem.style.marginTop = "10px";
    form.appendChild(mensagem);

    function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

    function validarDatas() {

        if (!dataInicio.value) {
            return "Selecione a data de início";
        }

        if (!dataFim.value) {
            return "Selecione a data de término";
        }

        if (new Date(dataFim.value) < new Date(dataInicio.value)) {
            return "A data final não pode ser antes da inicial";
        }

        return null;
    }

    function validarHora() {
        if (!hora.value) {
            return "Informe a carga horária";
        }
        return null;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log("Submit acionado");

        const erroData = validarDatas();
        if (erroData) {
            mostrarMensagem("Selecione a Data.", "erro");
            return;
        }

        const dados = {
            dataInicio: dataInicio.value,
            dataFim: dataFim.value,
            hora: hora.value
        };

        let lista = JSON.parse(localStorage.getItem("detalhesVaga")) || [];
        lista.push(dados);
        localStorage.setItem("detalhesVaga", JSON.stringify(lista));

        mostrarMensagem("Salvo!", "sucesso");
        window.location.href = "";
    });


    btnCancelar.addEventListener("click", () => {
        form.reset();
        mostrarMensagem("Cadastro cancelado", "gray");
    });

});