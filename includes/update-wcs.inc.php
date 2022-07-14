<?php

if (isset($_POST['submit'])) {

	require_once 'dbh.inc.php';
	require_once 'function.inc.php';
	$query = oci_parse($c, "UPDATE WAITRESS SET EMPLOYEE_ID='" . $_POST['eid'] . "', ORDER_ID='" . $_POST['oid'] . "', WAITRESS_FNAME='" . $_POST['wfname'] . "', WAITRESS_LNAME='" . $_POST['wlname'] . "' WHERE ORDER_ID = '" . $_POST['oid'] . "' ");
	$result = oci_execute($query);
	header("location: ../admin.php");
}

else {
	header("location: ../index.php");
	exit();
}	