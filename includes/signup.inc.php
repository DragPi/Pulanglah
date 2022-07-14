<?php

if (isset($_POST['submit'])) {
	$id = $_POST['id'];
	$user_name = $_POST['uid'];
	$pwd = $_POST['pwd'];
	$pwdrepeat = $_POST['pwdrepeat'];

	require_once 'dbh.inc.php';
	require_once 'function.inc.php';

	if (emptyInputSignup($id,$user_name,$pwd,$pwdrepeat) !== false) {
		header("location: ../index.php?error=emptyinput");
		exit();
	}
	if (pwdMatch($pwd,$pwdrepeat) !== false) {
		header("location: ../index.php?error=passwordNotMatch");
		exit();
	}
	$query = oci_parse($c, "INSERT INTO ACCUSERS(USER_UID,USER_PASSWORD,EMPLOYEE_ID) 
	values('$user_name','$pwd','$id')");
	$result = oci_execute($query);
	header("location: ../logindex.php");
}

else {
	header("location: ../index.php");
	exit();
}