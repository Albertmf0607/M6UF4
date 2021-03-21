var x;
x=$(document);
x.ready(inicialitzarEvents);

function inicialitzarEvents()
{
  var x;
  x=$("#enviar");
  x.click(Submit);
}

function Submit()
{
  var v=$("#num").attr("value");
  $.ajax({
           async:true,
           type: "POST",
           dataType: "html",
           contentType: "application/x-www-form-urlencoded",
           url:"quadrat.php",
           data:"numero="+v,
           beforeSend:Enviar,
           success:tornada,
           timeout:4000,
           error:problemes
         }); 
  return false;
}

function Enviar()
{
  var x=$("#resultat");
  x.html('<img src="img/ajax_wait.gif">');
}
function tornada(dades)
{
  $("#resultat").text(dades);
}

function problemes()
{
  $("#resultat").text('Problemes al servidor.');
}
