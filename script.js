 const paragrafo = document.querySelector("#paragrafo");
        const botao= document.querySelector("#botao");
        const imagem = document.querySelector("#jogador")
            botao.addEventListener("click", () =>{
                paragrafo.innerHTML = "Matheus Bidu Foi convocado!";
                imagem.src = "./matheus_convocado.png"
        });
     document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'r') {
            location.reload(); // Recarrega a página para reiniciar o jogo
        }
    });
