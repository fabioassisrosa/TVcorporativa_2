body {
    font-family: Arial, sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

/* Estilos para o cabeçalho */
header {
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    padding: 10px 0;
    display: flex;
    justify-content: center; /* Centraliza o texto */
    align-items: center; /* Alinha logo e texto na vertical */
    position: relative;
}

header img {
    height: 40px; /* Ajuste a altura do logo conforme necessário */
    margin-left: 50px; /* Descola o logo da borda esquerda */
    position: absolute;
    left: 50px; /* Garante que o logo fique 50px da borda esquerda */
}

/* Estilos para o texto no cabeçalho */
header h1 {
    flex: 1;
    text-align: center; /* Garante que o texto do título fique centralizado */
    margin-left: 0;
}

/* Estilos para o rodapé */
footer {
    background-color: #f4f4f4;
    color: #666;
    text-align: center;
    padding: 10px 0;
    position: relative;
}

main {
    flex: 1;
    display: flex;
}

.tv-content {
    flex: 2;
    background-color: #000;
}

.tv-content iframe {
    width: 100%;
    height: 100%;
}

.info-panel {
    flex: 1;
    background-color: #f4f4f4;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.info-panel div {
    text-align: center;
    margin-bottom: 15px;
}

.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

#admin-panel {
    display: none;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 1000;
    border-radius: 8px;
    max-height: 80vh; /* Limita a altura máxima */
    overflow-y: auto; /* Adiciona barra de rolagem se necessário */
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
    #admin-panel {
        width: 90%; /* Ocupa 90% da largura da tela */
        padding: 15px;
    }
}
