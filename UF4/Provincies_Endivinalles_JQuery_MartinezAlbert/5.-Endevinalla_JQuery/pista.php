<?php
	if (isset($_REQUEST['pista'])) {
		switch($_REQUEST['pista']) {
			case 1:
				echo "volo sense tenir ales,";
				break;
			case 2:
				echo "xisclo sense tenir boca,";
				break;
			case 3:
				echo "i faig girar molins.";
				break;
			case 4:
				
				if (isset($_REQUEST['solucio'])) {
					if (strtolower($_REQUEST['solucio']) == "vent") {
						echo "<span style='color:green'>Felicitats!! L'has encertat</span>";
					} else {
						echo "<span style='color:red'>Ho sento. La solució és: vent</span>";
					}
				} else {
					echo "Error en processar la resposta";
				}
		}
	} else {
		echo "Error en processar la pista";
	}
	
?>