window.onload = function(){
    peticionAjax ("cargaProvinciasHtml.php","GET", carregarProvincies);
    document.getElementById("provincia").addEventListener("change",carregarMunicipi);
}
  function carregarMunicipi (){
      var indexProvincia=document.getElementById("provincia").value;
    peticionAjax ("cargaMunicipisHtml.php?provincia="+indexProvincia,"GET", carregarMunicipis);
  }
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
    
    function carregarProvincies() {
      if(this.readyState == 4) {
        if(this.status == 200) {
        // Ok 
        document.getElementById("provincia").innerHTML=this.responseText;
        } else {
        document.getElementById("provincia").innerHTML ="Error Ajax "+ this.status;
        }
      }  
    }
    function carregarMunicipis() {
        if(this.readyState == 4) {
          if(this.status == 200) {
          // Ok 
          document.getElementById("municipio").innerHTML=this.responseText;
          } else {
          document.getElementById("municipio").innerHTML ="Error Ajax "+ this.status;
          }
        }  
      }
    
    
  
    