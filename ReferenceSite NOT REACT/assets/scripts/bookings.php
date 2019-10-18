<?php

// TODO: USER CRUD Registered Vehicles
// TODO: ADMIN CRUD Vehicle Types, Brands
// TODO: Admin Login ???

if(isset($_POST["action"]))
  {
    require_once('connect.php');
    // $user_id = $_POST["userId"];

    // USER - Retrieve User Registered Vehicles
    if($_POST["action"] == "getVehicles")
    {

    }

    // USER - Create / Register New Vehicle
    if($_POST["action"] == "addVehicle")
    {

    }

    // USER - Update Registered Vehicle
    if($_POST["action"] == "updateVehicle")
    {

    }

    // USER - Delete Registered Vehicle
    if($_POST["action"] == "deleteVehicle")
    {

    }

    // ADMIN - Get Vehicle Type
    if($_POST["action"] == "adminGetVehicleType") 
    {

    }

    // ADMIN - Add Vehicle Type
    if($_POST["action"] == "adminAddVehicleType") 
    {

    }

    // ADMIN - Update Vehicle Type
    if($_POST["action"] == "adminUpdateVehicleType") 
    {

    }

    // ADMIN - Delete Vehicle Type
    if($_POST["action"] == "adminDeleteVehicleType") 
    {

    }

    // ADMIN - Get Vehicle Brands
    if($_POST["action"] == "adminGetVehicleBrand") 
    {

    }

    // ADMIN - Add Vehicle Brand
    if($_POST["action"] == "adminAddVehicleBrands") 
    {

    } 

    // ADMIN - Update Vehicle Brand
    if($_POST["action"] == "adminUpdateVehicleBrands") 
    {

    } 

    // ADMIN - Delete Vehicle Brand
    if($_POST["action"] == "adminDeleteVehicleBrands") 
    {

    } 
  
  }
?>