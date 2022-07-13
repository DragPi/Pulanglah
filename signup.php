<div class="bg-modal-su">
	<div class="modal-content-su">
		<form action="includes/signup.inc.php" method="post">

			<div class="close-su">+</div>
			<input type="text" name='id' placeholder="ID...">
			<input type="text" name='uid' placeholder="Username...">
			<input type="password" name='pwd'  placeholder="password...">
			<input type="password" name='pwdrepeat'  placeholder="repeat password...">
			<button type="submit" name="submit">Sign Up</button>
		</form>
					<?php 
	if(isset($_GET['error'])){
		if($_GET['error'] == 'emptyinput'){
			echo"<p>fill in all field</p>";
		}

		else if($_GET['error'] == 'passwordNotMatch'){
			echo"<p>Password dont match</p>";
		}
		else if($_GET['error'] == 'none'){
			echo"<p>you have sign up!</p>";
		}
	}
?>
	</div>
	
</div>
