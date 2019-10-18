<?php 
// Database connection file
// Uncomment for Live/Hosted Connection
// $host = "";
// $dbname = "";
// $dbuser = "";
// $password = "";

// Variables for Local connection
$host = "localhost";
$dbname = "jojoride";
$dbuser = "root";
$password = "";

//order: localhost user password db_name
//use @ to block error report
//connect_error: null
$db = new mysqli($host,$dbuser,$password,$dbname); 

// if($db->connect_error){
//     exit("cannot connect to database");
//     }
// var_dump($db->connect_error); 

//close the connection
//  if($db->close()){
//     echo "bye";
// } else {
//     echo "error";
// }; 

?>