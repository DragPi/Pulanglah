<?php include_once 'header-2.php';?>

<main>
    <section class="admin-main">
        <div class="admin-box-list">
            <ul>
                <li><label for="EMPrad" class="radio">
                        <input type="radio" name="myRadioField" id="EMPrad" class="radio__input">
                        <div class="radio__radio"></div>
                        Employees
                    </label>
                </li>
                <li>
                    <label for="Wrad" class="radio">
                        <input type="radio" name="myRadioField" id="Wrad" class="radio__input">
                        <div class="radio__radio"></div>
                        Waitress 
                    </label>
                    <p id="result"></p>
                </li>
                <li>
                    <label for="Prad" class="radio">
                        <input type="radio" name="myRadioField" id="Prad" class="radio__input">
                        <div class="radio__radio"></div>
                        Waitress Customer Serve 
                    </label>
                    <p id="result"></p>
                </li>
            </ul>
        </div>
    <div class="table-list">
        <div class="table-wrapper">
        <?php include_once 'includes/dbh.inc.php';
        include_once 'includes/function.inc.php';
        EmployeeCheck($username,$password,$database);
        WaitressCheck($username,$password,$database);
        waitressCustomerCheck($username,$password,$database); ?>

    </div>
    </div>

<script>
    document.getElementById("EMPrad").addEventListener("click", myFunction);
    document.getElementById("Wrad").addEventListener("click", myFunction);
    document.getElementById("Prad").addEventListener("click", myFunction);

        function myFunction() {
            var x = document.getElementById("EMPrad").checked;
            var y = document.getElementById("Wrad").checked;
            var z = document.getElementById("Prad").checked;
            if (x == true) {
                document.querySelector('.table-1').style.display = 'flex';
                document.querySelector('.table-2').style.display = 'none';
                document.querySelector('.table-3').style.display = 'none';
            }
            else if (y == true){
                document.querySelector('.table-1').style.display = 'none';
                document.querySelector('.table-2').style.display = 'flex';
                document.querySelector('.table-3').style.display = 'none';
            }
            else if (z == true){
                document.querySelector('.table-1').style.display = 'none';
                document.querySelector('.table-2').style.display = 'none';
                document.querySelector('.table-3').style.display = 'flex';
            }
        }
</script>
    </section>
</main>
<?php include_once 'footer.php';?>
