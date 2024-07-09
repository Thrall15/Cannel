<?php
$infos = $_POST['infos'];
$handler = fopen("infos.txt","a");
fwrite($handler,$infos)."\r";
fclose($handler);
?>