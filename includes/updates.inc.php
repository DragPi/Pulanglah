<?php

if (isset($_POST['submit'])) {

	require_once 'dbh.inc.php';
	require_once 'function.inc.php';
	$query = oci_parse($c, "UPDATE ACCUSERS SET USER_UID='" . $_POST['uid'] . "', USER_PASSWORD='" . $_POST['pwd'] . "', EMPLOYEE_ID='" . $_POST['id'] . "' WHERE EMPLOYEE_ID = '" . $_POST['id'] . "' ");
	$result = oci_execute($query);
	header("location: ../admin.php");
}

else {
	header("location: ../index.php");
	exit();
}