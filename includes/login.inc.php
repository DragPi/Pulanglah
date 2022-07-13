<?php 

if(isset($_POST["submit"])){
$user_name = $_POST['uid'];
$pwd = $_POST['pwd'];

	require_once 'dbh.inc.php';
	require_once 'function.inc.php';

$query = "SELECT USER_UID FROM ACCUSERS WHERE USER_UID='%".$user_name."%'"; 

$login_stmt = oci_parse($c, $query);

if(!$login_stmt)
{
    echo "An error occurred in parsing the sql string.\n"; 
    exit; 
}

oci_execute($login_stmt);

while(oci_fetch_array($login_stmt))
{
    $password = oci_result($login_stmt,"USER_PASSWORD");
}

if ($password == "")
{
    echo 'Password = blank';
}

if ($pwd == $password)
{
    echo 'Logged In';
    header("location:../logindex.php");
}
else
{
    echo 'Login Failed';
}

}
?>