$(document).ready(iniciaFitxer);
function iniciaFitxer()
{
    $.getJSON("cargaProvinciasJSON.php", carregarProvincies)
	.fail(function() {
	    console.log( "error" );
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
    $.getJSON("cargaMunicipisJSON.php",{provincia:prop}, carregarMunicipis)
	.fail(function() {
	    console.log( "error" );
	  });
}
function carregarMunicipis(obj){
    var str="";
    for(var prop in obj){
        str+="<option value='"+prop+"'>"+obj[prop]+"</option>";
    }
    $("#municipio").html(str);
}