<?php

try {
	$dbh = new PDO('mysql:host=192.168.2.189;port=3306;dbname=erebor', 'erebor', '33tres', array( PDO::ATTR_PERSISTENT => false));

	$stmt = $dbh->prepare("insert into t_contacto (nombre, email, mensaje, ip, userAgent, referer) values
(:nombre, :email, :mensaje, :ip, :userAgent, :referer);");

	// call the stored procedure
	$stmt->execute(array(
		'nombre' => $_POST['nombre'],	
		'email' => $_POST['email'],	
		'mensaje' => $_POST['mensaje'],	
		'ip' => $_SERVER['REMOTE_ADDR'],	
		'userAgent' => $_SERVER['HTTP_USER_AGENT'],	
		'referer' => $_POST['nombre'],	
	));

	$result = array("result" => 1);

} catch (PDOException $e) {
	$result = array("result" => 0, "error" => $e->getMessage());
}

die(json_encode($result));
?>