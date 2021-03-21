function demanarPista1(){
    $("#p1Boto").css('visibility','hidden');
    $("#p2Boto").css('visibility','visible');
    fetch(`pista.php?pista=1`).then(function (response) {
        if (response.ok) {
          response.text().then(pista1);
        } else {
          console.log(`Status: ${response.status} ${response.statusText}`);
        }  })
        .catch(function (error) {
          console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
}
function demanarPista2(){
    $("#p2Boto").css('visibility','hidden');
    $("#p3Boto").css('visibility','visible');
    fetch(`pista.php?pista=2`).then(function (response) {
      if (response.ok) {
        response.text().then(pista2);
      } else {
        console.log(`Status: ${response.status} ${response.statusText}`);
      }  })
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
}
function demanarPista3(){
    $("#p3Boto").css('visibility','hidden');
    fetch(`pista.php?pista=3`).then(function (response) {
      if (response.ok) {
        response.text().then(pista3);
      } else {
        console.log(`Status: ${response.status} ${response.statusText}`);
      }  })
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
}
function comprovarSolucio(){
    var sol = document.getElementById("solucio").value;
    $("#laSolucioEs").load("pista.php?pista=4&solucio="+sol);
}
function pista1(txt){
    $("#p1").css("visibility","visible");
    $("#p1").html(txt);
}
function pista2(txt){
    $("#p2").css("visibility","visible");
    $("#p2").html(txt);
}
function pista3(txt){
    $("#p3").css("visibility","visible");
    $("#p3").html(txt);
}