document.getElementById('noBtn').addEventListener('mouseover', () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    this.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById('siBtn').addEventListener('click', () => {
    document.getElementById('galeria').classList.remove('oculto');
    document.getElementById('musica').play();
    // Agregar confeti con librería externa como canvas-confetti
});