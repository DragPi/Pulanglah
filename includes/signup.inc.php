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
	
	createUser($c, $user_name, $pwd,$id);
}

else {
	header("location: ../index.php");
	exit();
}