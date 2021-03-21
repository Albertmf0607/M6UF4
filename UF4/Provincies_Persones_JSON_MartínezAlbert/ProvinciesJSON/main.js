window.onload = function(){
    peticionAjax ("cargaProvinciasJSON.php","GET", carregarProvincies);
    document.getElementById("provincia").addEventListener("change",carregarMunicipi);
}
  function carregarMunicipi (){
      var indexProvincia=document.getElementById("provincia").value;
    peticionAjax ("cargaMunicipisJSON.php?provincia="+indexProvincia,"GET", carregarMunicipis);
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
        var obj = JSON.parse(this.responseText);
        document.getElementById("provincia").innerHTML="-";
        for(var prop in obj){
            document.getElementById("provincia").innerHTML+="<option value='"+prop+"'>"+obj[prop]+"</option>";
        }
        } else {
        document.getElementById("provincia").innerHTML ="Error Ajax "+ this.status;
        }
      }  
    }
    function carregarMunicipis() {
        if(this.readyState == 4) {
          if(this.status == 200) {
          // Ok 
          var obj = JSON.parse(this.responseText);
          document.getElementById("municipio").innerHTML="";
          for(var prop in obj){
            document.getElementById("municipio").innerHTML+="<option value='"+prop+"'>"+obj[prop]+"</option>";
          }
          } else {
          document.getElementById("municipio").innerHTML ="Error Ajax "+ this.status;
          }
        }  
      }
    
    
  
    