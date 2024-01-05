let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle("on", show)
    show = !show;
});



  document.getElementById('pedirfrango').addEventListener('click', function() {
    // Substitua 'outraTela.html' pelo nome do arquivo da outra tela na mesma pasta
    window.location.href = 'carrinho.html';
  });
