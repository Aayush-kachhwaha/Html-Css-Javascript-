<?php 
    setcookie("band", "Journey", time()+ 3600); // Expires in One Houre
    setcookie("food", "pasta", time()+ (60 * 60 * 24 * 30)); //Expire in 30 Days or 30 days cookies
    setcookie("nome" , "Joan", (time()-1));
?>