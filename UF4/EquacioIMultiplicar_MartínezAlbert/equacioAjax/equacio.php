
 <?php 
      $d= pow($_GET['V_b'], 2)-4*$_GET['V_a']*$_GET['V_c'] ;
      if ($d<0)  { 
	echo " no tiene solución ";
      } else {
	$s1=(-$_GET['V_b']+sqrt($d))/(2*$_GET['V_a']);
        $s2 =(-$_GET['V_b']-sqrt($d))/(2*$_GET['V_a']);
	echo" soluciones ".$s1." y ".$s2;
      }
  ?>

