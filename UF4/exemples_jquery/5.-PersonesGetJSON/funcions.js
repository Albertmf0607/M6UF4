
$(document).ready(inicialitzarEvents);

function inicialitzarEvents()
{
  var x=$("#boto1");
  x.click(demana);
}

function demana()
{
  var v=$("#dni").val();
  $.getJSON("cercarPersona.php",{dni:v}, mostra)
	.fail(function() {
	    console.log( "error" );
	  }); 
  return false;
}

function mostra(dades)
{
 $("#resultat").html("Nom:"+dades.nom+
                       "<br>"+"Cognom:"+
                       dades.cognom+"<br>"+
                       "Adreça:"+dades.adreca);
}
