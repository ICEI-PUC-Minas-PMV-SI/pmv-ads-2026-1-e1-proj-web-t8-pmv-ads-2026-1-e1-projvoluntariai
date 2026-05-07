document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formVaga");
    const titulo = document.getElementById("tituloDaVaga");
    const modalidade = document.getElementById("opcModalidades");
    const localizacao = document.getElementById("localizacao");
    const numeroVagas = document.getElementById("numeroVagas");
    const btnCancelar = document.getElementById("btnCancelar");

    const mensagem = document.createElement("p");
    mensagem.style.marginTop = "10px";
    form.appendChild(mensagem);

    // Função para mostrar mensagens
    function mostrarMensagem(texto, cor) {
        mensagem.textContent = texto;
        mensagem.style.color = cor;
    }

    function validarLocalizacao(localizacao) {
        const valor = localizacao.value.trim();

        if (valor === "") {
            return "Preencha a localização";
        }

        if (valor.length < 3) {
            return "Digite uma localização válida";
        }

        return null;
    }


    function validarFormulario() {

        if (!titulo.value.trim()) {
            mostrarMensagem("Preencha o título da vaga", "red");
            return false;
        }

        if (!modalidade.value) {
            mostrarMensagem("Selecione uma modalidade", "red");
            return false;
        }

        
        const erroLocalizacao = validarLocalizacao(localizacao);
        if (erroLocalizacao) {
            mostrarMensagem(erroLocalizacao, "red");
            return false;
        }

        if (!numeroVagas.value || numeroVagas.value <= 0) {
            mostrarMensagem("Número de vagas inválido", "red");
            return false;
        }

        return true;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validarFormulario()) {

            const vaga = {
                titulo: titulo.value.trim(),
                modalidade: modalidade.value,
                localizacao: localizacao.value.trim(),
                numeroVagas: numeroVagas.value
            };

          
            let vagas = JSON.parse(localStorage.getItem("vagas")) || [];

        
            vagas.push(vaga);

            localStorage.setItem("vagas", JSON.stringify(vagas));

            mostrarMensagem("Informações gerais salvas!", "green");

            form.reset();
        }
    });

    btnCancelar.addEventListener("click", () => {
        form.reset();
        mostrarMensagem("Cadastro cancelado", "gray");
    });

});