<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML CSS Form exercise</title>
</head>
<style>
*{margin:0; padding:0}
span{
    color: blue;
}
p.row {
    font-size: 18px;
    padding: 20px 30px;
}

p.title {
    font-size: 25px;
    text-align: center;
    padding: 20px;
}

.container {
    width: 600px;

    margin: auto;
    top: 100px;
    position: relative;
}
</style>
<body>
    <div class="container">
        <p class="title">Your Registed Informations <span><?php echo $_POST["fullName"];?></span> </p>
        <p class="row">Welcome <span> <?php echo $_POST["email"];?> </span></p>
        <p class="row">Your email address is: <span> <?php echo $_POST["email"];?> </span></p>
        <p class="row">Your date of Birth is : <span> <?php echo $_POST["birth"];?> </span></p>
        <p class="row">Your Phone Number is: <span> <?php echo $_POST["phonenumber"];?> </span></p>
     
       
        <p class="row">You have indicated that you like: <br> <br> <span> <?php echo isset($_POST["caramelslice"]) ? "Caramel Slice <br>" : ""?>  <?php echo isset($_POST["cherryripeslice"]) ? "Cherry Ripe Slice <br>" : ""?> <?php echo isset($_POST["raspberrycheesecake"]) ? "Raspberry Cheese Cake <br>" : ""?>  <?php echo isset($_POST["lemonmeringuepie"]) ? "Lemon Meringue Pie <br>" : ""?></span></p>
        
        <p class="row">You have also provided the following additional information: <span> <?php echo !empty($_POST["message"]) ? $_POST["message"] : "None"?> </span></p></p>
       
        <p class="row">We look forward to seeing you soon. </p>
        <p class="row">Thank You</p>
        <p class="row">Best Regards</p>
        <p class="row">Management of Tropical Treats Bakery</p>
    </div>
</body>
</html>