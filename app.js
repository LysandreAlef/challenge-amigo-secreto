//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
const amigoSorteado = amigos[indiceAleatorio]; // Seleciona o amigo sorteado
const resultado = document.getElementById('resultado'); // Seleciona a lista de resultados
resultado.innerHTML = ''; // Limpa resultados anteriores

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo'); // Seleciona o campo de texto
    const nome = inputNome.value.trim(); // Pega o valor do campo e remove espaços em branco

    if (nome === '') {
        alert('Por favor, insira um nome válido.'); // Alerta se o campo estiver vazio
        return; // Para a função se o nome estiver vazio
    }

    amigos.push(nome); // Adiciona o nome ao array de amigos
    inputNome.value = ''; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista visível
}
