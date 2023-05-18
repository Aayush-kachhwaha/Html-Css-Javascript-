<?php 
    $band = $_COOKIE['band'];
    $food = $_COOKIE['food'];

    print("Band : " . $band);
    print("<br> Food : " . $food);
    if(isset($_COOKIE['name']))
    {
        print("<br> Name Cookie set");
    }
    else
    {
        print("<br> No name cookie found.");
    }
?>