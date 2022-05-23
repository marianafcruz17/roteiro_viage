const init = () => {

    //ADICIONANDO EFEITO PARA CADASTRAR
    const errorCad = () => { 
        submitButtonC.classList.remove('Carregando');
        submitButtonC.classList.remove('success');
        submitButtonC.classList.add('error');
        submitButtonC.textContent = "Erro ao cadastrar roteiro";
    }

    const successCad = () => {
        submitButtonC.classList.remove('Carregando');
        submitButtonC.classList.remove('error');
        submitButtonC.classList.add('success');
        submitButtonC.textContent = "Roteiro cadastrado";
    }

    //Pegando os inputs
    const destino = document.querySelector('input[type="destino"]');
    const data_inicio = document.querySelector('#data_inicio');
    const data_fim = document.querySelector('#data_fim');
    const hospedagem = document.querySelector('#hospedagem');
    const endereco = document.querySelector('input[type="endereco"]');
    const transporte = document.querySelector('#transporte');
    const pontos_turisticos = document.querySelector('input[type="pontos_turisticos"]');
    const atividades = document.querySelector('input[type="atividades"]');
    const observacao = document.querySelector('input[type="observacao"]');
    const submitButtonC = document.querySelector('.Cadastro__submit');
    const submitButtonV = document.querySelector('.Cadastro__voltar');

    //localStorage
    const getBanco = () => JSON.parse(localStorage.getItem ('roteiros')) ?? [];
    const setBanco = (banco) => localStorage.setItem ('roteiros', JSON.stringify(banco));

    //INSERINDO destino NO localStorage
    const createUser = (newRoute) => {
        const roteiros = getBanco()
        roteiros.push (newRoute)
        setBanco(roteiros)
    }

    //FUNÇÃO PARA CADASTRO NOVO
    if (submitButtonC) {
        submitButtonC.addEventListener('click', (event) => {
            event.preventDefault();

            submitButtonC.textContent = "Carregando...";

            const newRoute = {
                destino: document.querySelector('input[type="destino"]').value,
                data_inicio: document.querySelector('#data_inicio').value,
                data_fim: document.querySelector('#data_fim').value,
                hospedagem: document.querySelector('#hospedagem').value,
                endereco: document.querySelector('input[type="endereco"]').value,
                transporte: document.querySelector('#transporte').value,
                pontos_turisticos: document.querySelector('input[type="pontos_turisticos"]').value,
                atividades: document.querySelector('input[type="atividades"]').value,
                observacao: document.querySelector('input[type="observacao"]').value,
            }
            createUser(newRoute)
                        
            successCad();
            setTimeout(() => {
                alert("Roteiro cadastrado com sucesso!");
                window.location="roteiro_cadastrado.html";
            }, "1000") 
        })
    }

    //FUNÇÃO PARA VOLTAR
    if(submitButtonV){
        submitButtonV.addEventListener('click', (event) => {
            window.location = "cadastro.html";
        })
    }
}
window.onload = init;