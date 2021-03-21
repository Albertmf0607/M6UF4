
$(document).ready(inicialitzarEvents);

function inicialitzarEvents()
{
  var x;
  x=$("#menu a");
  x.click(clicar);
}

function clicar()
{
  var pagina=$(this).attr("href");
  var modo = 2;
  if (modo ==1) {
  	enviar();
  	$.get(pagina, mostra);
  } else {
	var x=$("#detall");
  	x.ajaxStart(enviar);
  	x.load(pagina); 
  }
  return false;
}

function enviar()
{
  var x=$("#detall");
  x.html('<img src="img/ajax_wait.gif">');
}

function mostra(dades){

  var x=$("#detall");
  x.html(dades);
}
