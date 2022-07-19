<?php include_once 'header-2.php';?>

<main>
    <section class="admin-main">
        <div class="admin-box-list">
            <ul>
                <li><label for="EMPrad" class="radio">
                        <input type="radio" name="myRadioField" id="EMPrad" class="radio__input">
                        <div class="radio__radio"></div>
                        Employees <a href="#" id="update-id-emp" class="button-update">Update|</a> <a href="#" id="delete-id-emp" class="button-delete">Delete</a>
                    </label>
                </li>
                <li>
                    <label for="Wrad" class="radio">
                        <input type="radio" name="myRadioField" id="Wrad" class="radio__input">
                        <div class="radio__radio"></div>
                        Waitress <a href="#" id="update-id-wcs" class="button-update">Update|</a> <a href="#" id="delete-id-wcs" class="button-delete">Delete</a>
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
                <li>
                    <label for="acrad" class="radio">
                        <input type="radio" name="myRadioField" id="acrad" class="radio__input">
                        <div class="radio__radio"></div>
                        Created Account <a href="#" id="update-id" class="button-update">Update|</a> <a href="#" id="delete-id" class="button-delete">Delete</a>
                    </label>
                    <p id="result"></p>
                </li>
            </ul>

             <?php 
            include_once 'update.php'
             ?>
            <?php  
            include_once 'delete.php' ?>
            <?php 
            include_once 'update-wcs.php';
            ?>
            <?php 
            include_once 'delete-wcs.php';
            ?>
             <?php 
            include_once 'employee-update.php';
            ?>
            <?php 
            include_once 'employee-delete.php';
            ?>
        </div> 
    <div class="table-list">
        <div class="table-wrapper">


        <?php 
        include_once 'includes/dbh.inc.php';
        include_once 'includes/function.inc.php';
        EmployeeCheck($username,$password,$database);
        WaitressCheck($username,$password,$database);
        waitressCustomerCheck($username,$password,$database);
        acccheck($username,$password,$database); ?>

    </div>
    </div>

<script >
    document.getElementById("EMPrad").addEventListener("click", myFunction);
    document.getElementById("Wrad").addEventListener("click", myFunction);
    document.getElementById("Prad").addEventListener("click", myFunction);
    document.getElementById("acrad").addEventListener("click", myFunction);

        function myFunction() {
            var x = document.getElementById("EMPrad").checked;
            var y = document.getElementById("Wrad").checked;
            var z = document.getElementById("Prad").checked;
            var a = document.getElementById("acrad").checked;
            if (x == true) {
                document.querySelector('.table-1').style.display = 'flex';
                document.querySelector('.table-2').style.display = 'none';
                document.querySelector('.table-3').style.display = 'none';
                document.querySelector('.table-4').style.display = 'none';
            }
            else if (y == true){
                document.querySelector('.table-1').style.display = 'none';
                document.querySelector('.table-2').style.display = 'flex';
                document.querySelector('.table-3').style.display = 'none';
                document.querySelector('.table-4').style.display = 'none';
            }
            else if (z == true){
                document.querySelector('.table-1').style.display = 'none';
                document.querySelector('.table-2').style.display = 'none';
                document.querySelector('.table-3').style.display = 'flex';
                document.querySelector('.table-4').style.display = 'none';
            }
            else if (a == true){
                document.querySelector('.table-1').style.display = 'none';
                document.querySelector('.table-2').style.display = 'none';
                document.querySelector('.table-3').style.display = 'none';
                document.querySelector('.table-4').style.display = 'flex';
            }
        }

    document.getElementById('update-id').addEventListener('click', function () {
    document.querySelector('.bg-update').style.display = 'flex';
});

document.querySelector('.close-update').addEventListener('click',function(){
    document.querySelector('.bg-update').style.display = 'none';
});

document.getElementById('delete-id').addEventListener('click', function () {
    document.querySelector('.bg-delete').style.display = 'flex';
});

document.querySelector('.close-delete').addEventListener('click',function(){
    document.querySelector('.bg-delete').style.display = 'none';
});

document.getElementById('update-id-wcs').addEventListener('click', function () {
    document.querySelector('.bg-update-wcs').style.display = 'flex';
});

document.querySelector('.close-update-wcs').addEventListener('click',function(){
    document.querySelector('.bg-update-wcs').style.display = 'none';
});

document.getElementById('delete-id-wcs').addEventListener('click', function () {
    document.querySelector('.bg-delete-wcs').style.display = 'flex';
});

document.querySelector('.close-delete-wcs').addEventListener('click',function(){
    document.querySelector('.bg-delete-wcs').style.display = 'none';
});

document.getElementById('delete-id-emp').addEventListener('click', function () {
    document.querySelector('.bg-emp-delete').style.display = 'flex';
});

document.querySelector('.close-emp-delete').addEventListener('click',function(){
    document.querySelector('.bg-emp-delete').style.display = 'none';
});

document.getElementById('update-id-emp').addEventListener('click', function () {
    document.querySelector('.bg-emp-update').style.display = 'flex';
});

document.querySelector('.close-emp-update').addEventListener('click',function(){
    document.querySelector('.bg-emp-update').style.display = 'none';
});


</script>
    </section>
</main>
<?php include_once 'footer.php';?>
