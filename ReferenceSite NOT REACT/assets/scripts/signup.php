<?php

// TODO: Check if Email is registered on blur event
// TODO: Auto Login
// TODO: Check if User is logged in 
// FIXME: 

session_start();

  if(isset($_POST["action"]))
  {
    require_once('connect.php');
    
    // Check if the email is registered
    if($_POST["action"] == "checkUsername")
    {
        $sql= "SELECT 1 FROM users WHERE username = '{$_POST['username']}'";
        $result = $db->query($sql);
        if($result->num_rows === 1){
            exit('unavailable');
        }else{
            exit('available');
        }
    }

  }
?>