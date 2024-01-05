let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle("on", show)
    show = !show;
});
function mostrarOpcoes() {
    var refriSelect = document.getElementById("refri");
    var opcoesRefriDiv = document.getElementById("opcoesRefri");

    if (refriSelect.value === "sim") {
        opcoesRefriDiv.style.display = "flex";
    } else {
        opcoesRefriDiv.style.display = "none";
    }
}

function desativarOpcaoVazia() {
    var tipoRefriSelect = document.getElementById("tipoRefri");
    tipoRefriSelect.options[0].disabled = true;
}
/*  api  */
const url = 'https://api.gloriafood.com/v1/restaurants';
const apiKey = 'rdXDurN7xluO92OtPl1c2BAbDcIPeSNhx';

fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Lógica para manipular os dados da resposta
  })
  .catch(error => {
    console.error('Erro:', error);
    // Lógica para lidar com erros
  });

