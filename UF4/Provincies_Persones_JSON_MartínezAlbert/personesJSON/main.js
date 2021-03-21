 function getP(){
     var dni=document.getElementById("dni");
     // 
     peticionAjax ("cercarPersona.php?dni="+dni.value,"GET", getPersona);
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
   
   function getPersona() {
     if(this.readyState == 4) {
       if(this.status == 200) {
       // Ok 
       var obj = JSON.parse(this.responseText);
       document.getElementById("resultat").innerHTML="Nom:"+obj.nom+"<br>Cognom:"+obj.cognom+"<br>Adreca:"+obj.adreca;
       } else {
       document.getElementById("resultat").innerHTML ="Error Ajax "+ this.status;
       }
     }  else {
         document.getElementById("resultat").innerHTML = "Loading";
       }
   }
   
   
 
   