const btnMenu = document.getElementById('btn_menu');
const btnPesquisa = document.getElementById('btn_pesquisa');
btnMenu.addEventListener('click', abrirMenu);
btnPesquisa.addEventListener('click', mostrarBarra);

function abrirMenu(){
	document.getElementById('menu').classList.toggle('mover_menu');
	document.getElementById('painel').classList.toggle('mover_painel');
};

function mostrarBarra(){
	document.getElementById('barra_pesquisa').classList.toggle('mostrar_barra');
};
