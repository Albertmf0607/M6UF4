$(document).ready(iniciaFitxer);
function iniciaFitxer()
{
    fetch(`cargaProvinciasJSON.php`).then(function (response) {
        if (response.ok) {
          response.json().then(carregarProvincies);
        } else {
          console.log(`Status: ${response.status} ${response.statusText}`);
        }  })
        .catch(function (error) {
          console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
  $("#provincia").change(iniciaMunicipis)
}
function carregarProvincies(obj){
    var str="";
    for(var prop in obj){
        str+="<option value='"+prop+"'>"+obj[prop]+"</option>";
    }
    $("#provincia").html(str);
}
function iniciaMunicipis(){
    var prop = $("#provincia").val();
    fetch(`cargaMunicipisJSON.php?provincia=`+prop).then(function (response) {
        if (response.ok) {
          response.json().then(carregarMunicipis);
        } else {
          console.log(`Status: ${response.status} ${response.statusText}`);
        }  })
        .catch(function (error) {
          console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
}
function carregarMunicipis(obj){
    var str="";
    for(var prop in obj){
        str+="<option value='"+prop+"'>"+obj[prop]+"</option>";
    }
    $("#municipio").html(str);
}