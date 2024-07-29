// Definindo objetos para representar as salas
let salas = {
    D017: {
        nome: "D017",
        imagem: "teste1.jpg",
        tipoSala: "sala de reunião",
        capacidade: 30,
        funcionario: "Joao"
    },
    D018: {
        nome: "D018",
        imagem: "teste2.jpg",
        tipoSala: "sala de reunião",
        capacidade: 30,
        funcionario: "Ricardo"
    },
    D025: {
        nome: "D025",
        imagem: "teste3.jpg",
        tipoSala: "sala de reunião Oval",
        capacidade: 40,
        funcionario: "Miguel"
    },
    D024: {
        nome: "D024",
        imagem: "teste4.jpg",
        tipoSala: "sala de reunião",
        capacidade: 20,
        funcionario: "Theo"
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as áreas dentro do mapa de imagem
    const areas = document.querySelectorAll('area');

    // Adiciona um event listener para cada área
    areas.forEach(area => {
        area.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            // Obtém o id da área clicada
            const areaId = area.id;

            // Obtém os dados da sala com base no id da área
            const sala = salas[areaId];

            // Se não encontrar a sala, exibe uma mensagem de erro
            if (!sala) {
                console.error(`Sala ${areaId} não encontrada.`);
                return;
            }

            // Atualiza o conteúdo do sidebar com as informações da sala
            document.getElementById('sidebar').innerHTML = `
                <h2>Informações</h2>
                <p><strong>${sala.nome}</strong></p>
                <p><strong>Tipo:</strong> ${sala.tipoSala}</p>
                <p><strong>Capacidade:</strong> ${sala.capacidade} pessoas</p>
                <p><strong>Funcionario:</strong> ${sala.funcionario}</p>
                <img src="${sala.imagem}" alt="Imagem da sala ${sala.nome}" style="max-width: 100%; height: auto;">
                <button onclick="hideSidebar()">Fechar</button>
            `;

            // Exibe o sidebar
            document.getElementById('sidebar').style.display = 'block';
        });
    });
});

function hideSidebar() {
    document.getElementById('sidebar').style.display = 'none';
}