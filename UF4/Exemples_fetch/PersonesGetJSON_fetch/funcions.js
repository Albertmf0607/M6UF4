
$(document).ready(inicialitzarEvents);

function inicialitzarEvents() {
  var x = $("#boto1");
  x.click(demana);
}

function demana() {
  var v = $("#dni").val();
  // $.getJSON("cercarPersona.php",{dni:v}, mostra)
  // .fail(function() {
  //     console.log( "error" );
  //   }); 
  fetch(`cercarPersona.php?dni=${v}`).then(function (response) {
    if (response.ok) {
      response.json().then(mostra);
    } else {
      console.log(`Status: ${response.status} ${response.statusText}`);
    }  })
    .catch(function (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  return false;
}

function mostra(dades) {
  $("#resultat").html("Nom:" + dades.nom +
    "<br>" + "Cognom:" +
    dades.cognom + "<br>" +
    "Adreça:" + dades.adreca);
}
