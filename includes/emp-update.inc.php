<?php

if (isset($_POST['submit'])) {

	require_once 'dbh.inc.php';
	require_once 'function.inc.php';
	$query = oci_parse($c, "UPDATE 	EMPLOYEES SET EMPLOYEE_ID='" . $_POST['empid'] . "', EMPLOYEE_FNAME='" . $_POST['empfname'] . "',EMPLOYEE_LNAME='" . $_POST['emplname'] . "', EMPLOYEE_SALARY='" . $_POST['empsal'] . "', EMPLOYEE_JOB='" . $_POST['empjob'] . "', EMPLOYEE_AGE='" . $_POST['empage'] . "', EMPLOYEE_SEX='" . $_POST['empsex'] . "', EMPLOYEE_PNUMBER='" . $_POST['emppnum'] . "', MANAGER_ID='" . $_POST['empmanid'] . "' WHERE EMPLOYEE_ID = '" . $_POST['empid'] . "' ");
	$result = oci_execute($query);
	header("location: ../admin.php");
}

else {
	header("location: ../index.php");
	exit();
}