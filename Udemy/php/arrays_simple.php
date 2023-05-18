<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Arrys</title>
</head>
<body>
    <?php 
        $fmaily  = array("Mark", "Joan", "Rick", "Brett", "Kerry", "Kevin");
        $vehicles[0] = "car";
        $vehicles[1] = "airplane";
        print($fmaily[0]."just Purchased a new ". $vehicles[0]);
        for($i = 0; $i< count ($fmaily); $i++){
            print_r($fmaily);
            print("<br>");
        }
    ?>
</body>
</html>