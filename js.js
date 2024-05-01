window.addEventListener('scroll', function() {
    var nav = document.getElementById('cabecalho');
    if (window.scrollY > 100) { // Mude 100 para a altura desejada antes da navegação começar a rolar
        nav.style.position = 'fixed';
        nav.style.top = '0';
    } else {
        nav.style.position = 'absolute';
        nav.style.top = 'auto'; // Mude 50px para a altura da sua navegação
    }
});