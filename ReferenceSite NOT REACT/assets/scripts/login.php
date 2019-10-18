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
    if($_POST["action"] == "checkEmail")
    {
      $email=$_POST['email'];
        $sql= "SELECT 1 FROM users WHERE email = '{$_POST['email']}'";
        $result = $db->query($sql);
        if($result->num_rows === 1){
            exit('is registered');
        }else{
            exit('is not registered');
        }
    }

    // AutoLogin on load if Logged in Before (without Logging out)
    if($_POST["action"] == "autoLogin")
    {

    }

    // Login Normally (Through Login Form)
    if($_POST["action"] == "newLogin")
    { 
      
        $sql= "SELECT * FROM users WHERE email = '{$_POST['email']}' AND pass = '{$_POST['pass']}' LIMIT 1";
        $sql2 = "UPDATE users SET logged_in = 1, last_login_date = NOW() WHERE email = '{$_POST['email']}'";
        $result = $db->query($sql);
        if($result->num_rows === 1){

           $db->query($sql2);
            // SET SESSION Details
            while($row = $result->fetch_array()){
             
              $_SESSION["email"]= $row["email"];
              $_SESSION["user_id"]= $row["user_id"];
              $_SESSION["username"]= $row["username"];
              $_SESSION["loggedin"]= "1";
              $_SESSION["last_name"]= $row["last_name"];
              $_SESSION["first_name"]= $row["first_name"];
              $_SESSION["pass"]= $row["pass"];
              $_SESSION["phone_number"]= $row["phone"];
              $_SESSION["profile_image"]= $row["profile_image"];
              $_SESSION["gender"]= $row["gender"];
                       
              $data["first_name"] = $row["first_name"];
              $data["last_name"] = $row["last_name"];
              $data["pass"]= $row["pass"];
              $data["gender"] = $row["gender"];
              $data["email"] = $row["email"];
              $data["id"] = $row["user_id"];
              $data["message"] = "success";
              
            }
            
            echo(json_encode($data));
        } else if($result->num_rows === 0) {
              $data["message"] = "failed";
            echo(json_encode($data));
        }
    }

    // Logout
    if($_POST["action"] == "logout")
    {
      $email = $_POST["email"];
    }    

  }
?>