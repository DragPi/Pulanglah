<?php

if (isset($_POST['submit'])) {
	require_once 'dbh.inc.php';
	require_once 'function.inc.php';

	$query = oci_parse($c, "DELETE FROM WAITRESS WHERE  ORDER_ID='" . $_POST['oid'] . "'");
	$result = oci_execute($query);
	header("location: ../admin.php");
}	