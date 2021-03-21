function borra(){
   var in1=document.getElementsByName('V_a');
   var in2=document.getElementsByName('V_b');
   var in3=document.getElementsByName('V_c');
   in1[0].value="";
   in2[0].value="";
   in3[0].value="";
   document.getElementById("resultado").innerHTML="";
}
function calcula(){
    var in1=document.getElementsByName('V_a');
    var in2=document.getElementsByName('V_b');
    var in3=document.getElementsByName('V_c');
    // 
    peticionAjax ("equacio.php?V_a="+in1[0].value+"&V_b="+in2[0].value+"&V_c="+in3[0].value,"GET", solucionarEquacio;
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
  
  function solucionarEquacio() {
    if(this.readyState == 4) {
      if(this.status == 200) {
      // Ok 
      document.getElementById("resultado").innerHTML=this.responseText;
      } else {
      document.getElementById("resultado").innerHTML ="Error Ajax "+ this.status;
      }
    }  else {
        document.getElementById("resultado").innerHTML = "Loading";
      }
  }
  
  

  