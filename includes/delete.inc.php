<?php

if (isset($_POST['submit'])) {
	require_once 'dbh.inc.php';
	require_once 'function.inc.php';

	$query = oci_parse($c, "DELETE FROM ACCUSERS WHERE  EMPLOYEE_ID='" . $_POST['id'] . "'");
	$result = oci_execute($query);
	header("location: ../admin.php");
}		

else {
	header("location: ../index.php");
	exit();
}