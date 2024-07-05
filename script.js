document.addEventListener("DOMContentLoaded", function() {
    const areas = document.querySelectorAll('area');

    areas.forEach(area => {
        area.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir o comportamento padrão do clique no link

            const salaId = area.getAttribute('id'); // Obtém o ID da área clicada
            const sala = window[salaId]; // Acessa o objeto de sala correspondente usando o ID

            // Criar o conteúdo do pop-up com base nas informações da sala
            const popupHTML = `
                <div>
                    <h2>${sala.nome}</h2>
                    <p>Pessoas: ${sala.pessoas}</p>
                    <p>Tipo de Sala: ${sala.tipoSala}</p>
                    <img src="${sala.imagem}" alt="${sala.nome}">
                </div>
            `;

            // Exibir o pop-up com as informações da sala
            alert(popupHTML);
        });
    });
});
