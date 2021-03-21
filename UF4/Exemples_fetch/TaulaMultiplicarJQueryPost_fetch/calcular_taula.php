<?php
$valor = $_POST["value"];
for ($i = 1; $i <= 10; $i++) {
    echo $valor. " * ".$i." = ".$valor*$i."<br />\n";
}
?>