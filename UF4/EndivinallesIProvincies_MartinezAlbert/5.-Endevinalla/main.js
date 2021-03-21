  function peticionAjax (url, metodo, funcion) { 
      peticion_http = null; 
      if(window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
      } else if(window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
      }
      if(peticion_http) {
        peticion_http.onreadystatechange = funcion;
        peticion_http.open(metodo, url, true);
        peticion_http.send(null);
      }
    }
    
    function solucio() {
      if(this.readyState == 4) {
        if(this.status == 200) {
        
        document.getElementById("laSolucioEs").innerHTML=this.responseText;
        } else {
        document.getElementById("laSolucioEs").innerHTML ="Error Ajax "+ this.status;
        }
      } 
    }
    function  demanarPista1S() {
      if(this.readyState == 4) {
        if(this.status == 200) {
        
        document.getElementById("p1").innerHTML=this.responseText;
        } else {
        document.getElementById("p1").innerHTML ="Error Ajax "+ this.status;
        }
      } 
    }
    function  demanarPista2S() {
      if(this.readyState == 4) {
        if(this.status == 200) {
        
        document.getElementById("p2").innerHTML=this.responseText;
        } else {
        document.getElementById("p2").innerHTML ="Error Ajax "+ this.status;
        }
      } 
    }
    function  demanarPista3S() {
      if(this.readyState == 4) {
        if(this.status == 200) {
        
        document.getElementById("p3").innerHTML=this.responseText;
        } else {
        document.getElementById("p3").innerHTML ="Error Ajax "+ this.status;
        }
      } 
    }
function demanarPista1(){
    document.getElementById("p2Boto").style.visibility="visible";
    document.getElementById("p1Boto").style.visibility="hidden";
    peticionAjax ("pista.php?solucio=null&pista=1","GET", demanarPista1S);

}
function demanarPista2(){
    document.getElementById("p2Boto").style.visibility="hidden";
    document.getElementById("p3Boto").style.visibility="visible";
    document.getElementById("p2").style.visibility="visible";
    peticionAjax ("pista.php?solucio=null&pista=2","GET", demanarPista2S);

}
function demanarPista3(){
  document.getElementById("p3Boto").style.visibility="hidden";  
  document.getElementById("p3").style.visibility="visible";
  peticionAjax ("pista.php?solucio=null&pista=3","GET", demanarPista3S);

}
function comprovarSolucio(){
    var sol = document.getElementById("solucio");
    peticionAjax ("pista.php?solucio="+sol.value+"&pista=4","GET", solucio);
}
    
  
    