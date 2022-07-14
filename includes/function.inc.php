<?php 

function emptyInputSignup($id,$user_name,$pwd,$pwdrepeat) {
	$result;
	if (empty($id) || empty($user_name) || empty($pwd) || empty($pwdrepeat)) {
		$result = true;
	}
	else {
		$result = false;
	}
	return $result;
}

function pwdMatch($pwd,$pwdrepeat) {
	$result;
	if ($pwd !== $pwdrepeat) {
		$result = true;
	}
	else {
		$result = false;
	}
	return $result;
}



function createUser($c,$user_name,$pwd,$id){
	$query = "INSERT INTO ACCUSERS (USER_UID,USER_PASSWORD,EMPLOYEE_ID) VALUES (:user_name,:pwd,:id);";
	$s = oci_parse($c, $query);
	$hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
	oci_bind_by_name($s, ':user_name',$user_name);
	oci_bind_by_name($s, ':pwd',$pwd);
	oci_bind_by_name($s, ':id',$id);
	oci_execute($s);
	header("location: ../logindex.php?error=none");
	echo oci_error();
}

function UpdateUser($c, $wid, $oid,$fname,$lname){
	$update = "UPDATE WAITRESS SET EMPLOYEE_ID = :wid,ORDER_ID =:oid, WAITRESS_FNAME = :fname, WAITRESS_LNAME = :lname WHERE ORDER_ID =:oid;";
	$s = oci_parse($c, $update);
	oci_bind_by_name($s, ':wid',$wid);
	oci_bind_by_name($s, ':oid',$oid);
	oci_bind_by_name($s, ':fname',$fname);
	oci_bind_by_name($s, ':lname',$lname);
	oci_execute($s);
	header("location: ../admin.php?error=none");
	oci_free_statement($s);
}

function emptyInputlogin($user_name,$pwd) {
	$result;
	if (empty($user_name) || empty($pwd)) {
		$result = true;
	}
	else {
		$result = false;
	}
	return $result;
}



function EmployeeCheck($username,$password,$database){

	include_once 'dbh.inc.php';
	$query = "select * from EMPLOYEES";
	$c = oci_connect($username, $password, $database);
if (!$c) {
    $m = oci_error();
    trigger_error('Could not connect to database: '. $m['message'], E_USER_ERROR);
}

$s = oci_parse($c, $query);
if (!$s) {
    $m = oci_error($c);
    trigger_error('Could not parse statement: '. $m['message'], E_USER_ERROR);
}
$r = oci_execute($s);
if (!$r) {
    $m = oci_error($s);
    trigger_error('Could not execute statement: '. $m['message'], E_USER_ERROR);
}

echo "<table class = 'table-1' style='display:none'>\n";
$ncols = oci_num_fields($s);
echo "<tr>\n";
for ($i = 1; $i <= $ncols; ++$i) {
    $colname = oci_field_name($s, $i);
    echo "  <th><b>".htmlspecialchars($colname,ENT_QUOTES|ENT_SUBSTITUTE)."</b></th>\n";
}
echo "</tr>\n";

while (($row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
    echo "<tr>\n";
    foreach ($row as $item) {
        echo "<td>";
        echo $item!==null?htmlspecialchars($item, ENT_QUOTES|ENT_SUBSTITUTE):"&nbsp;";
        echo "</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";
}

function waitressCheck($username,$password,$database){

	include_once 'dbh.inc.php';
	$query = "select * from WAITRESS";
	$c = oci_connect($username, $password, $database);
if (!$c) {
    $m = oci_error();
    trigger_error('Could not connect to database: '. $m['message'], E_USER_ERROR);
}

$s = oci_parse($c, $query);
if (!$s) {
    $m = oci_error($c);
    trigger_error('Could not parse statement: '. $m['message'], E_USER_ERROR);
}
$r = oci_execute($s);
if (!$r) {
    $m = oci_error($s);
    trigger_error('Could not execute statement: '. $m['message'], E_USER_ERROR);
}

echo "<table class = 'table-2' style='display:none'>\n";
$ncols = oci_num_fields($s);
echo "<tr>\n";
for ($i = 1; $i <= $ncols; ++$i) {
    $colname = oci_field_name($s, $i);
    echo "  <th><b>".htmlspecialchars($colname,ENT_QUOTES|ENT_SUBSTITUTE)."</b></th>\n";
}
echo "</tr>\n";

while (($row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
    echo "<tr>\n";
    foreach ($row as $item) {
        echo "<td>";
        echo $item!==null?htmlspecialchars($item, ENT_QUOTES|ENT_SUBSTITUTE):"&nbsp;";
        echo "</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";
}

function waitressCustomerCheck($username,$password,$database){

	include_once 'dbh.inc.php';
	$query = "select waitress_fname,order_id,customer_fname from WAITRESS join ORDERS using (order_id) join CUSTOMER using (customer_id)";
	$c = oci_connect($username, $password, $database);
if (!$c) {
    $m = oci_error();
    trigger_error('Could not connect to database: '. $m['message'], E_USER_ERROR);
}

$s = oci_parse($c, $query);
if (!$s) {
    $m = oci_error($c);
    trigger_error('Could not parse statement: '. $m['message'], E_USER_ERROR);
}
$r = oci_execute($s);
if (!$r) {
    $m = oci_error($s);
    trigger_error('Could not execute statement: '. $m['message'], E_USER_ERROR);
}

echo "<table class = 'table-3' style='display:none'>\n";
$ncols = oci_num_fields($s);
echo "<tr>\n";
for ($i = 1; $i <= $ncols; ++$i) {
    $colname = oci_field_name($s, $i);
    echo "  <th><b>".htmlspecialchars($colname,ENT_QUOTES|ENT_SUBSTITUTE)."</b></th>\n";
}
echo "</tr>\n";

while (($row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
    echo "<tr>\n";
    foreach ($row as $item) {
        echo "<td>";
        echo $item!==null?htmlspecialchars($item, ENT_QUOTES|ENT_SUBSTITUTE):"&nbsp;";
        echo "</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";
}

function acccheck($username,$password,$database){

	include_once 'dbh.inc.php';
	$query = "SELECT*FROM ACCUSERS";
	$c = oci_connect($username, $password, $database);
if (!$c) {
    $m = oci_error();
    trigger_error('Could not connect to database: '. $m['message'], E_USER_ERROR);
}

$s = oci_parse($c, $query);
if (!$s) {
    $m = oci_error($c);
    trigger_error('Could not parse statement: '. $m['message'], E_USER_ERROR);
}
$r = oci_execute($s);
if (!$r) {
    $m = oci_error($s);
    trigger_error('Could not execute statement: '. $m['message'], E_USER_ERROR);
}

echo "<table class = 'table-4' style='display:none'>\n";
$ncols = oci_num_fields($s);
echo "<tr>\n";
for ($i = 1; $i <= $ncols; ++$i) {
    $colname = oci_field_name($s, $i);
    echo "  <th><b>".htmlspecialchars($colname,ENT_QUOTES|ENT_SUBSTITUTE)."</b></th>\n";
}
echo "</tr>\n";

while (($row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {
    echo "<tr>\n";
    foreach ($row as $item) {
        echo "<td>";
        echo $item!==null?htmlspecialchars($item, ENT_QUOTES|ENT_SUBSTITUTE):"&nbsp;";
        echo "</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";
}