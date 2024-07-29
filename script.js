// Definindo objetos para representar as salas
let salas = {
    D017: {
        nome: "D017",
        imagem: "teste1.jpg",
        tipoSala: "sala de reunião",
        capacidade: 30
    },
    D018: {
        nome: "D018",
        imagem: "teste2.jpg",
        tipoSala: "sala de reunião",
        capacidade: 30
    },
    D025: {
        nome: "D025",
        imagem: "teste3.jpg",
        tipoSala: "sala de reunião Oval",
        capacidade: 40
    },
    D024: {
        nome: "D024",
        imagem: "teste4.jpg",
        tipoSala: "sala de reunião",
        capacidade: 20
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

            // Cria um elemento div para o pop-up
            const popup = document.createElement('div');
            popup.className = 'popup';
            popup.innerHTML = `
                <p><strong>${sala.nome}</strong></p>
                <p><strong>Tipo:</strong> ${sala.tipoSala}</p>
                <p><strong>Capacidade:</strong> ${sala.capacidade} pessoas</p>
                <img src="${sala.imagem}" alt="Imagem da sala ${sala.nome}" style="max-width: 100%; height: auto;">
            `;

            // Estilo para o pop-up
            popup.style.position = 'absolute';
            popup.style.left = `${e.pageX}px`; // Posição horizontal onde foi clicado
            popup.style.top = `${e.pageY}px`; // Posição vertical onde foi clicado
            popup.style.backgroundColor = 'white';
            popup.style.border = '1px solid black';
            popup.style.padding = '10px';
            popup.style.zIndex = '1000';
            popup.style.borderRadius = '15px';  

            // Adiciona o pop-up ao corpo do documento
            document.body.appendChild(popup);

            // Fecha o pop-up ao clicar fora dele
            popup.addEventListener('click', function() {
                document.body.removeChild(popup);
            });
        });
    });
});
