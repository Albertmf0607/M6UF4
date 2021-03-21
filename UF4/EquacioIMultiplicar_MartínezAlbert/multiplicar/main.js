function calcul(){
    var inp = document.getElementById("taula");
      peticionAjax ("calcul.php?num="+inp.value,"GET", multiplicar);
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
    
    function multiplicar() {
      if(this.readyState == 4) {
        if(this.status == 200) {
        // Ok 
        document.getElementById("resultat").innerHTML=this.responseText;
        } else {
        document.getElementById("resultat").innerHTML ="Error Ajax "+ this.status;
        }
      }  else {
          document.getElementById("resultat").innerHTML = "Loading";
        }
    }
    
    
  
    