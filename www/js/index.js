document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    const fixarValoresBtn = document.querySelector('#fixarValoresBtn');
    const resetarValoresBtn = document.querySelector('#resetarValoresBtn');
    const quantidadeInputs = document.querySelectorAll('.quantidade-input');
    const precoInputs = document.querySelectorAll('.preco-input');

    fixarValoresBtn.addEventListener('click', (event) => {
        event.preventDefault();
        fixarValores();
        mostrarCamposQuantidade();
    });

    resetarValoresBtn.addEventListener('click', (event) => {
        event.preventDefault();
        resetarValores();
        ocultarCamposQuantidade();
        limparValoresInputs();
    });

    function fixarValores() {
        document.querySelectorAll('.medicamento').forEach((medicamento) => {
            const quantidadeInput = medicamento.querySelector('.quantidade-input');
            const precoInput = medicamento.querySelector('.preco-input');
            const preco = precoInput.value;
            const descricao = medicamento.querySelector('.descricao');
            descricao.textContent = ` - R$ ${preco}`;
            quantidadeInput.classList.remove('hidden');
            precoInput.classList.add('hidden');
        });
        alert("Valores foram fixados.");
    }

    function resetarValores() {
        document.querySelectorAll('.medicamento').forEach((medicamento) => {
            const quantidadeInput = medicamento.querySelector('.quantidade-input');
            const precoInput = medicamento.querySelector('.preco-input');
            const descricao = medicamento.querySelector('.descricao');
            descricao.textContent = '';
            quantidadeInput.classList.remove('hidden');
            precoInput.classList.remove('hidden');
        });
        alert("Valores foram resetados.");
    }

    function mostrarCamposQuantidade() {
        quantidadeInputs.forEach((input) => {
            input.classList.remove('hidden');
        });
    }

    function ocultarCamposQuantidade() {
        quantidadeInputs.forEach((input) => {
            input.classList.add('hidden');
        });
    }

    function limparValoresInputs() {
        precoInputs.forEach((input) => {
            input.value = '';
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let total = 0;

        document.querySelectorAll('.medicamento').forEach((medicamento) => {
            const quantidade = parseFloat(medicamento.querySelector('.quantidade-input').value) || 0;
            const preco = parseFloat(medicamento.querySelector('.preco-input').value) || 0;
            total += quantidade * preco;
        });

        const resultado = document.querySelector('#resultado');
        resultado.textContent = `R$ ${total.toFixed(2)}`;
    });

    precoInputs.forEach((input) => {
        input.addEventListener('input', () => {
            if (!Number.isInteger(Number(input.value))) {
                alert("Por favor, insira apenas valores inteiros.");
                input.value = '';
            }
        });
    });


    quantidadeInputs.forEach((input) => {
        input.addEventListener('input', () => {
            if (!Number.isInteger(Number(input.value))) {
                alert("Por favor, insira apenas valores inteiros.");
                input.value = '';
            }
        });
    });


});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("linkedin").addEventListener("click", function () {
        var site1 = "https://www.linkedin.com/in/aguiarwork/";
        abrirAba(site1);

    });
});

function abrirAba(url) {
    window.open(url, "_blank");

}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("twitter").addEventListener("click", function () {
        var site2 = "https://x.com/AguiarWork";
        abrirAba(site2);

    });
});

function abrirAba(url) {
    window.open(url, "_blank");

}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("github").addEventListener("click", function () {
        var site3 = "https://github.com/AguiarWork";
        abrirAba(site3);

    });
});

function abrirAba(url) {
    window.open(url, "_blank");

}