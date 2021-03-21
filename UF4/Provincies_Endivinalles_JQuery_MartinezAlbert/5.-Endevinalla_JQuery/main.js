function demanarPista1(){
    $("#p1Boto").css('visibility','hidden');
    $("#p2Boto").css('visibility','visible');
    $.get("pista.php",{pista:1}, pista1)
	.fail(function() {
	    console.log( "error" );
	  });
}
function demanarPista2(){
    $("#p2Boto").css('visibility','hidden');
    $("#p3Boto").css('visibility','visible');
    $.post("pista.php",{pista:2}, pista2)
	.fail(function() {
	    console.log( "error" );
	  });
}
function demanarPista3(){
    $("#p3Boto").css('visibility','hidden');
    $.ajax({
        async:true,
        type: "POST",
        dataType: "html",
        contentType: "application/x-www-form-urlencoded",
        url:"pista.php",
        data:"pista="+3,
        success:pista3,
        timeout:4000,
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